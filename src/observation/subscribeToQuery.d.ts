declare module '@qsi/watermelondb/observation/observeQuery' {
  import { Model, Query } from '@qsi/watermelondb'
  import { Observable } from 'rxjs'

  export default function observeQuery<Record extends Model>(
    query: Query<Record>,
  ): Observable<Record[]>
}
