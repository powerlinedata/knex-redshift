'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _transaction = require('knex/lib/transaction');

var _transaction2 = _interopRequireDefault(_transaction);

var _helpers = require('knex/lib/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Transaction_Redshift = function (_Transaction) {
  (0, _inherits3.default)(Transaction_Redshift, _Transaction);

  function Transaction_Redshift() {
    (0, _classCallCheck3.default)(this, Transaction_Redshift);
    return (0, _possibleConstructorReturn3.default)(this, (Transaction_Redshift.__proto__ || (0, _getPrototypeOf2.default)(Transaction_Redshift)).apply(this, arguments));
  }

  (0, _createClass3.default)(Transaction_Redshift, [{
    key: 'savepoint',
    value: function savepoint() {
      (0, _helpers.warn)('Redshift does not support savepoints.');
      return _promise2.default.resolve();
    }
  }, {
    key: 'release',
    value: function release() {
      (0, _helpers.warn)('Redshift does not support savepoints.');
      return _promise2.default.resolve();
    }
  }, {
    key: 'rollbackTo',
    value: function rollbackTo() {
      (0, _helpers.warn)('Redshift does not support savepoints.');
      return _promise2.default.resolve();
    }
  }]);
  return Transaction_Redshift;
}(_transaction2.default);

exports.default = Transaction_Redshift;
module.exports = exports['default'];