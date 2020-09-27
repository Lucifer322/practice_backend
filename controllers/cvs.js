const { models } = require('../database');

async function getCvs(req, res) {
  const cvs = await models.cv.find();
  res.send(cvs);
}
async function addNewCv(req, res) {
  const cv = await models.cv.create({
    ...req.body,
  });
  console.log(`CV ${cv} is succesfully added`);
  res.send(cv);
}

module.exports = {
  getCvs,
  addNewCv,
};
