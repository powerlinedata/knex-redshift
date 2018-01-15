'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _tablecompiler = require('knex/lib/dialects/postgres/schema/tablecompiler');

var _tablecompiler2 = _interopRequireDefault(_tablecompiler);

var _helpers = require('knex/lib/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableCompiler_Redshift = function (_TableCompiler_PG) {
  (0, _inherits3.default)(TableCompiler_Redshift, _TableCompiler_PG);

  function TableCompiler_Redshift() {
    (0, _classCallCheck3.default)(this, TableCompiler_Redshift);
    return (0, _possibleConstructorReturn3.default)(this, (TableCompiler_Redshift.__proto__ || (0, _getPrototypeOf2.default)(TableCompiler_Redshift)).apply(this, arguments));
  }

  (0, _createClass3.default)(TableCompiler_Redshift, [{
    key: 'index',
    value: function index() {
      (0, _helpers.warn)('Redshift does not support indexes.');
    }
  }, {
    key: 'dropIndex',
    value: function dropIndex() {
      (0, _helpers.warn)('Redshift does not support indexes.');
    }
  }]);
  return TableCompiler_Redshift;
}(_tablecompiler2.default);

exports.default = TableCompiler_Redshift;
module.exports = exports['default'];