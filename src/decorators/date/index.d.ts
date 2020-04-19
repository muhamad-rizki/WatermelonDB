declare module '@qsi/watermelondb/decorators/date' {
  import { ColumnName } from '@qsi/watermelondb'

  const date: (columnName: ColumnName) => PropertyDecorator
  export default date
}
