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

var _columncompiler = require('knex/lib/dialects/postgres/schema/columncompiler');

var _columncompiler2 = _interopRequireDefault(_columncompiler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColumnCompiler_Redshift = function (_ColumnCompiler_PG) {
  (0, _inherits3.default)(ColumnCompiler_Redshift, _ColumnCompiler_PG);

  function ColumnCompiler_Redshift() {
    (0, _classCallCheck3.default)(this, ColumnCompiler_Redshift);
    return (0, _possibleConstructorReturn3.default)(this, (ColumnCompiler_Redshift.__proto__ || (0, _getPrototypeOf2.default)(ColumnCompiler_Redshift)).apply(this, arguments));
  }

  (0, _createClass3.default)(ColumnCompiler_Redshift, [{
    key: 'bit',
    value: function bit(column) {
      return column.length === false ? 'char(1)' : 'char(' + column.length + ')';
    }
  }]);
  return ColumnCompiler_Redshift;
}(_columncompiler2.default);

exports.default = ColumnCompiler_Redshift;


(0, _assign2.default)(ColumnCompiler_Redshift.prototype, {
  bigincrements: 'bigint identity(1,1) primary key not null',
  binary: 'varchar(max)',
  blob: 'varchar(max)',
  datetime: 'timestamp',
  enu: 'text',
  enum: 'text',
  increments: 'integer identity(1,1) primary key not null',
  json: 'varchar(max)',
  jsonb: 'varchar(max)',
  longblob: 'varchar(max)',
  mediumblob: 'varchar(max)',
  set: 'text',
  text: 'varchar(max)',
  timestamp: 'timestamp',
  tinyblob: 'text',
  uuid: 'char(32)',
  varbinary: 'varchar(max)'
});
module.exports = exports['default'];