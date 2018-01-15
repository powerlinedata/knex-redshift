import QueryCompiler_PG from 'knex/lib/dialects/postgres/query/compiler'

export default class QueryCompiler_Redshift extends QueryCompiler_PG {
  truncate() {
    return `truncate ${this.tableName}`
  }

  _returning() {
    return ''
  }
}