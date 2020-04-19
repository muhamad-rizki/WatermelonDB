declare module '@qsi/watermelondb/decorators/text' {
  import { ColumnName } from '@qsi/watermelondb'

  const text: (columnName: ColumnName) => PropertyDecorator

  export default text
}
