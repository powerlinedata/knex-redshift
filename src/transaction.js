import Transaction from 'knex/lib/transaction'
import { warn } from 'knex/lib/helpers'

export default class Transaction_Redshift extends Transaction {
  savepoint() {
    warn('Redshift does not support savepoints.')
    return Promise.resolve()
  }

  release() {
    warn('Redshift does not support savepoints.')
    return Promise.resolve()
  }

  rollbackTo() {
    warn('Redshift does not support savepoints.')
    return Promise.resolve()
  }
}
