import styles from './Row.module.scss';
import { Column } from '@/utils/types';
import { parse } from 'date-fns';
import format from 'date-fns/format';

type RowProps = {
  columns: Array<Column>;
  row: any;
  columnGap: number;
  numCols: number;
  colWidths: Array<string>;
  gridTemplateColumns: string;
};

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
        const value = col.name === 'Time' ? format(new Date(row[col.name]), "h:mm aaa, eeee") : row[col.name];
        return <p key={col.name}>{value}</p>;
      }
      )}
    </div>
  );
}
