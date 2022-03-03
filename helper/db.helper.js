module.exports = class DB_Helper {
  constructor(model) {
    this.db = global.db;
    this.model = this.db[model];
  }
  findAll(query) {
    return new Promise((resolve) => {
      this.model
        .findAll({ ...query })
        .then((res) => resolve({ success: true, res }))
        .catch((err) => resolve({ success: false, err }));
    });
  }
  findOne(query) {
    return new Promise((resolve) => {
      this.model
        .findOne({ ...query })
        .then((res) => resolve({ success: true, res }))
        .catch((err) => resolve({ success: false, err }));
    });
  }
  insert(body) {
    return new Promise((resolve) => {
      this.model
        .create({ ...body })
        .then((res) => resolve({ success: true, res }))
        .catch((err) => resolve({ success: false, err }));
    });
  }
  update(update, where) {
    return new Promise((resolve) => {
      this.model
        .update({ ...update }, { ...where })
        .then((res) => resolve({ success: true, res }))
        .catch((err) => resolve({ success: false, err }));
    });
  }
  delete(query) {
    return new Promise((resolve) => {
      this.model
        .destroy({ ...query })
        .then((res) => resolve({ success: true, res }))
        .catch((err) => resolve({ success: false, err }));
    });
  }
  truncate() {
    return new Promise((resolve) => {
      this.model
        .destroy({ truncate: true })
        .then((res) => resolve({ success: true, res }))
        .catch((err) => resolve({ success: false, err }));
    });
  }
  count(query) {
    return new Promise((resolve) => {
      this.model
        .count({ ...query })
        .then((res) => resolve({ success: true, res }))
        .catch((err) => resolve({ success: false, err }));
    });
  }
  max(field, query) {
    return new Promise((resolve) => {
      this.model
        .max(String(field), { ...query })
        .then((res) => resolve({ success: true, res }))
        .catch((err) => resolve({ success: false, err }));
    });
  }
  min(field, query) {
    return new Promise((resolve) => {
      this.model
        .min(String(field), { ...query })
        .then((res) => resolve({ success: true, res }))
        .catch((err) => resolve({ success: false, err }));
    });
  }
  sum(field, query) {
    return new Promise((resolve) => {
      this.model
        .sum(String(field), { ...query })
        .then((res) => resolve({ success: true, res }))
        .catch((err) => resolve({ success: false, err }));
    });
  }
  increment(increment, query) {
    return new Promise((resolve) => {
      this.model
        .increment({ ...increment }, { ...query })
        .then((res) => resolve({ success: true, res }))
        .catch((err) => resolve({ success: false, err }));
    });
  }
  decrement(decrement, query) {
    return new Promise((resolve) => {
      this.model
        .decrement({ ...decrement }, { ...query })
        .then((res) => resolve({ success: true, res }))
        .catch((err) => resolve({ success: false, err }));
    });
  }
};
