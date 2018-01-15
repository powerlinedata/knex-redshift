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

var _compiler = require('knex/lib/dialects/postgres/query/compiler');

var _compiler2 = _interopRequireDefault(_compiler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QueryCompiler_Redshift = function (_QueryCompiler_PG) {
  (0, _inherits3.default)(QueryCompiler_Redshift, _QueryCompiler_PG);

  function QueryCompiler_Redshift() {
    (0, _classCallCheck3.default)(this, QueryCompiler_Redshift);
    return (0, _possibleConstructorReturn3.default)(this, (QueryCompiler_Redshift.__proto__ || (0, _getPrototypeOf2.default)(QueryCompiler_Redshift)).apply(this, arguments));
  }

  (0, _createClass3.default)(QueryCompiler_Redshift, [{
    key: 'truncate',
    value: function truncate() {
      return 'truncate ' + this.tableName;
    }
  }, {
    key: '_returning',
    value: function _returning() {
      return '';
    }
  }]);
  return QueryCompiler_Redshift;
}(_compiler2.default);

exports.default = QueryCompiler_Redshift;
module.exports = exports['default'];