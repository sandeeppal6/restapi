const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    default: null,
  },
  lastName: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    default: null,
  },
  createdAt: {
    type: String,
    default: new Date(),
  },
  updateAt: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("Users", UserSchema);
