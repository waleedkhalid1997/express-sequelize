"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DB_Helper = require("../helper/db.helper");

var User =
/*#__PURE__*/
function () {
  function User() {
    _classCallCheck(this, User);
  }

  _createClass(User, [{
    key: "store",
    value: function store(req, res) {
      return regeneratorRuntime.async(function store$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", res.json());

            case 1:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "index",
    value: function index(req, res) {
      return regeneratorRuntime.async(function index$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", res.json());

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "create",
    value: function create(req, res) {
      var model, where;
      return regeneratorRuntime.async(function create$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              model = new DB_Helper('User');
              where = {
                username: "johndoe1"
              };
              _context3.t0 = res;
              _context3.next = 5;
              return regeneratorRuntime.awrap(model.findOne({
                where: where
              }));

            case 5:
              _context3.t1 = _context3.sent;

              _context3.t0.json.call(_context3.t0, _context3.t1);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    key: "show",
    value: function show(req, res) {
      return regeneratorRuntime.async(function show$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", res.json());

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }, {
    key: "edit",
    value: function edit(req, res) {
      return regeneratorRuntime.async(function edit$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", res.json());

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      });
    }
  }, {
    key: "update",
    value: function update(req, res) {
      return regeneratorRuntime.async(function update$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", res.json());

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      });
    }
  }, {
    key: "destroy",
    value: function destroy(req, res) {
      return regeneratorRuntime.async(function destroy$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", res.json());

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      });
    }
  }]);

  return User;
}();

module.exports = new User();