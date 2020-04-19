declare module '@qsi/watermelondb/Database/helpers' {
    import { BatchOperation } from "@qsi/watermelondb/adapters/type";
    export const operationTypeToCollectionChangeType: (input: BatchOperation) => string
}
