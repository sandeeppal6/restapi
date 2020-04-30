const express = require("express");
const Users = require("../modals/Users");

const router = express.Router();

router.get("/", (req, res) => {
  Users.find({}, { __v: 0, createdAt: 0, updateAt: 0 }).exec((err, result) => {
    if (err) {
      res.status(500).send({ error: err });
    } else {
      return res.status(200).send({ users: result });
    }
  });
});

router.get("/:userId", (req, res) => {
  const id = req.params.userId;

  Users.findById({ _id: id }, { __v: 0, createdAt: 0, updateAt: 0 }).exec(
    (err, result) => {
      if (err) {
        res.status(500).send({ error: err });
      } else {
        return res.status(200).send({ users: result });
      }
    }
  );
});

router.post("/", (req, res) => {
  const { firstName, lastName, email } = req.body;
  Users.create({ firstName, lastName, email }, (err) => {
    if (err) {
      res.status(500).send({ error: err });
    } else {
      res.status(200).send({ message: "added successfully" });
    }
  });
});

router.put("/:userId", (req, res) => {
  const { firstName, lastName, email } = req.body;
  const { userId } = req.params;

  Users.findByIdAndUpdate(
    { _id: userId },
    { firstName, lastName, email },
    (err) => {
      if (err) {
        res.status(500).send({ error: err });
      } else {
        res.status(200).send({ message: "updated successfully" });
      }
    }
  );
});

router.delete("/:userId", (req, res) => {
  const { userId } = req.params;

  Users.findByIdAndRemove({ _id: userId }, (err) => {
    if (err) {
      res.status(500).send({ error: err });
    } else {
      res.status(200).send({ message: "deleted successfully" });
    }
  });
});

module.exports = router;
