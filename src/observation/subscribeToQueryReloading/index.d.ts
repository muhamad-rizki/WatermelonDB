declare module '@qsi/watermelondb/observation/reloadingObserver' {
  import { Model, Query } from '@qsi/watermelondb'
  import { Observable } from 'rxjs'

  export default function reloadingObserver<Record extends Model>(
    query: Query<Record>,
  ): Observable<Record[]>
}
