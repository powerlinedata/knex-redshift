import Client_PG from 'knex/lib/dialects/postgres'
import QueryCompiler from './query/compiler'
import ColumnCompiler from './schema/columncompiler'
import TableCompiler from './schema/tablecompiler'
import Transaction from './transaction'


export default class Client_Redshift extends Client_PG {
  transaction() {
    return new Transaction.apply(this, arguments)
  }

  queryCompiler() {
    return new QueryCompiler.apply(this, arguments)
  }

  columnCompiler() {
    return new ColumnCompiler.apply(this, arguments)
  }

  tableCompiler() {
    return new TableCompiler.apply(this, arguments)
  }
}

Object.assign(Client_Redshift.prototype, {
  dialect: 'redshift',
})