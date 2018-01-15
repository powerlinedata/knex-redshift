'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _postgres = require('knex/lib/dialects/postgres');

var _postgres2 = _interopRequireDefault(_postgres);

var _compiler = require('./query/compiler');

var _compiler2 = _interopRequireDefault(_compiler);

var _columncompiler = require('./schema/columncompiler');

var _columncompiler2 = _interopRequireDefault(_columncompiler);

var _tablecompiler = require('./schema/tablecompiler');

var _tablecompiler2 = _interopRequireDefault(_tablecompiler);

var _transaction = require('./transaction');

var _transaction2 = _interopRequireDefault(_transaction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Client_Redshift = function (_Client_PG) {
  (0, _inherits3.default)(Client_Redshift, _Client_PG);

  function Client_Redshift() {
    (0, _classCallCheck3.default)(this, Client_Redshift);
    return (0, _possibleConstructorReturn3.default)(this, (Client_Redshift.__proto__ || (0, _getPrototypeOf2.default)(Client_Redshift)).apply(this, arguments));
  }

  (0, _createClass3.default)(Client_Redshift, [{
    key: 'transaction',
    value: function transaction() {
      return new _transaction2.default.apply(this, arguments);
    }
  }, {
    key: 'queryCompiler',
    value: function queryCompiler() {
      return new _compiler2.default.apply(this, arguments);
    }
  }, {
    key: 'columnCompiler',
    value: function columnCompiler() {
      return new _columncompiler2.default.apply(this, arguments);
    }
  }, {
    key: 'tableCompiler',
    value: function tableCompiler() {
      return new _tablecompiler2.default.apply(this, arguments);
    }
  }]);
  return Client_Redshift;
}(_postgres2.default);

exports.default = Client_Redshift;


(0, _assign2.default)(Client_Redshift.prototype, {
  dialect: 'redshift'
});
module.exports = exports['default'];