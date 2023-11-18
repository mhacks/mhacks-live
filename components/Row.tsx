import styles from './Row.module.scss';
import { Column } from '@/utils/types';
import styleBuidler from '@/utils/styleBuilder';
import { parse } from 'date-fns';
import format from 'date-fns/format';

type RowProps = {
  columns: Array<Column>;
  row: any;
  columnGap: number;
  numCols: number;
  colWidths: Array<string>;
  gridTemplateColumns: string;
  prizes: boolean;
};

export default function Row({
  columns,
  row,
  columnGap,
  numCols,
  colWidths,
  gridTemplateColumns,
  prizes = false,
}: RowProps) {
  return (
    <div
      className={styleBuidler([[styles.container, !prizes], [styles.prizesContainer, prizes]])}
      style={{
        gridTemplateColumns: gridTemplateColumns,
        columnGap: columnGap,
      }}
    >
      {columns.map((col) => {
        const value = col.name === 'Start Time' ? format(new Date(row[col.name]), "h:mm aaa, eeee") : (col.name === 'End Time' ? format(new Date(row[col.name]), "h:mm aaa") : row[col.name]);
        return <p key={col.name}>{value}</p>;
      }
      )}
    </div>
  );
}
