declare module '@qsi/watermelondb/decorators/relation' {
  import { ColumnName, TableName } from '@qsi/watermelondb'
  import { Options } from '@qsi/watermelondb/Relation'

  const relation: (
    relationTable: TableName<any>,
    relationIdColumn: ColumnName,
    options?: Options,
  ) => PropertyDecorator


  export default relation
}
