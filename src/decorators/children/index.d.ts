declare module '@qsi/watermelondb/decorators/children' {
  import { TableName } from '@qsi/watermelondb'

  const children: (childTable: TableName<any>) => PropertyDecorator
  export default children
}
