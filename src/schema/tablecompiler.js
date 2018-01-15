import TableCompiler_PG from 'knex/lib/dialects/postgres/schema/tablecompiler'
import { warn } from 'knex/lib/helpers'


export default class TableCompiler_Redshift extends TableCompiler_PG {
  index() {
    warn('Redshift does not support indexes.')
  }

  dropIndex() {
    warn('Redshift does not support indexes.')
  }
}