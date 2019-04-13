const config = require("config.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("_helpers/db");
const User = db.User;

module.exports = {
  authenticate,
  getAll,
  getById,
  create,
  update,
  delete: _delete
};

async function authenticate({ username, password }) {
  console.log(username, password);
  var sql =
    "SELECT username, hash, firstname, lastname, createdDate FROM `user` WHERE `username`='" +
    username +
    "' and hash = '" +
    password +
    "'";

  return new Promise((resolve, reject) => {
    db.query(sql, (err, results) => {
      if (results.length) {
        let user = results[0];
        resolve(user);
      } else {
        reject(err);
      }
    });
  });
}

async function getAll() {
  return await User.find().select("-hash");
}

async function getById(id) {
  return await User.findById(id).select("-hash");
}

async function create(userParam) {
  // validate
  if (await User.findOne({ username: userParam.username })) {
    throw 'Username "' + userParam.username + '" is already taken';
  }

  const user = new User(userParam);

  // hash password
  if (userParam.password) {
    user.hash = bcrypt.hashSync(userParam.password, 10);
  }

  // save user
  await user.save();
}

async function update(id, userParam) {
  const user = await User.findById(id);

  // validate
  if (!user) throw "User not found";
  if (
    user.username !== userParam.username &&
    (await User.findOne({ username: userParam.username }))
  ) {
    throw 'Username "' + userParam.username + '" is already taken';
  }

  // hash password if it was entered
  if (userParam.password) {
    userParam.hash = bcrypt.hashSync(userParam.password, 10);
  }

  // copy userParam properties to user
  Object.assign(user, userParam);

  await user.save();
}

async function _delete(id) {
  await User.findByIdAndRemove(id);
}
