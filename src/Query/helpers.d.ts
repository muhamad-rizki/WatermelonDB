declare module '@qsi/watermelondb/Query/helpers' {
  import { QueryDescription } from '@qsi/watermelondb/QueryDescription'
  import { TableName } from '@qsi/watermelondb'
  import { AssociationInfo, Associations } from '@qsi/watermelondb/Model'

  export const getSecondaryTables: QueryDescription

  export const getAssociations: (
    table: TableName<any>[],
    associations: Associations,
  ) => [TableName<any>, AssociationInfo][]
}
