declare module '@qsi/watermelondb/decorators/field' {
  import { ColumnName } from '@qsi/watermelondb'

  const field: (columnName: ColumnName) => PropertyDecorator
  export default field
}
