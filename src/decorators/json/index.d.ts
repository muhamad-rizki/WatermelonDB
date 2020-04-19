declare module '@qsi/watermelondb/decorators/json' {
  import { ColumnName, Model } from '@qsi/watermelondb'

  type Sanitizer = (source: any, model?: Model) => any

  const json: (rawFieldName: ColumnName, sanitizer: Sanitizer) => PropertyDecorator

  export default json
}
