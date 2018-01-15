import ColumnCompiler_PG from 'knex/lib/dialects/postgres/schema/columncompiler'

export default class ColumnCompiler_Redshift extends ColumnCompiler_PG {
  bit(column) {
    return column.length === false ?
      'char(1)' :
      `char(${column.length})`
  }
}

Object.assign(ColumnCompiler_Redshift.prototype, {
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
  varbinary: 'varchar(max)',
})