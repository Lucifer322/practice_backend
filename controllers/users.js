const { models } = require('../database');

async function getUsersForTable(req, res) {
  const users = await models.user.find({}, { _id: 0 });
  res.send(users);
}

module.exports = {
  getUsersForTable,
};
