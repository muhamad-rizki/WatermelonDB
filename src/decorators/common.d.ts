declare module '@qsi/watermelondb/decorators/common' {
  import { ColumnName } from '@qsi/watermelondb'

  export function ensureDecoratorUsedProperly(
    columnName: ColumnName,
    target: Object,
    key: string,
    descriptor: Object,
  ): void
}
