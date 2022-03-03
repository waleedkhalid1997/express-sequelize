const DB_Helper = require("../helper/db.helper");
class User {
  async store(req, res) {
    return res.json();
  }

  async index(req, res) {
    return res.json();
  }

  async create(req, res) {
    let where = {username: "johndoe1"};
    res.json(await new DB_Helper('User').findOne({ where }));
  }

  async show(req, res) {
    return res.json();
  }

  async edit(req, res) {
    return res.json();
  }

  async update(req, res) {
    return res.json();
  }

  async destroy(req, res) {
    return res.json();
  }
}

module.exports = new User();
