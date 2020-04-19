declare module '@qsi/watermelondb/decorators/immutableRelation' {
  import { ColumnName, TableName } from '@qsi/watermelondb'

  const immutableRelation: (relationTable: TableName<any>, relationIdColumn: ColumnName) => PropertyDecorator;

  export default immutableRelation
}
