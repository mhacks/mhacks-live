import styles from './Row.module.scss'
import { Column } from '@/utils/types'
import { parse } from 'date-fns'
import format from 'date-fns/format'

type RowProps = {
  columns: Column
  row: Array<any>
  columnGap: number
  numCols: number
  colWidths: Array<number>
  gridTemplateColumns: string
}

export default function Row({
  columns,
  row,
  columnGap,
  numCols,
  colWidths,
  gridTemplateColumns,
}: RowProps) {
  return (
    <div
      className={styles.container}
      style={{
        gridTemplateColumns: gridTemplateColumns,
        columnGap: columnGap,
      }}
    >
      {columns.map((col) => {
        const value = col.name === 'Time' ? format(new Date(row[col.name]), "H:mm aaa, MMM do") : row[col.name]
        return <p key={col.name}>{value}</p>
      }
      )}
    </div>
  )
}