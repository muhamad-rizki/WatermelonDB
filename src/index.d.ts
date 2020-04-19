declare module '@qsi/watermelondb' {
  import * as Q from '@qsi/watermelondb/QueryDescription'
  import Database from '@qsi/watermelondb/Database'

  export { default as Collection } from '@qsi/watermelondb/Collection'
  // export { default as Database } from '@qsi/watermelondb/Database'
  export { default as CollectionMap } from '@qsi/watermelondb/Database/CollectionMap'
  export { default as Relation } from '@qsi/watermelondb/Relation'
  export { default as Model, associations } from '@qsi/watermelondb/Model'
  export { default as Query } from '@qsi/watermelondb/Query'
  export { tableName, columnName, appSchema, tableSchema } from '@qsi/watermelondb/Schema'

  export { DatabaseAdapter } from '@qsi/watermelondb/adapters/type'
  export { RawRecord, DirtyRaw } from '@qsi/watermelondb/RawRecord'
  export { RecordId } from '@qsi/watermelondb/Model'
  export {
    TableName,
    ColumnName,
    ColumnType,
    ColumnSchema,
    TableSchema,
    AppSchema,
  } from '@qsi/watermelondb/Schema'

  export { Q, Database }
}
