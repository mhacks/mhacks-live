import styles from './Table.module.scss';
import styleBuilder from '@/utils/styleBuilder';
import { Column } from '@/utils/types';
import Row from '@/components/Row';

type TableProps = {
  columns: Array<Column>;
  data: Array<any>;
};

export default function Table({ columns, data }: TableProps) {

  const columnGap = 16;
  const numCols = columns.length;
  const colWidths = columns.map(col => `calc((100% - (${numCols} - 1) * ${columnGap}px) * ${col.proportion})`);
  const gridTemplateColumns = colWidths.reduce((str, width) => str + ' ' + width);

  return (
    <div className={styles.container}>
      <div
        className={styles.tableHeader}
        style={{
          padding: columnGap,
          gridTemplateColumns: gridTemplateColumns,
          columnGap: columnGap
        }}
      >
        {columns.map(col => (<h3 key={col.name} className={styles.colName}>{col.name}</h3>))}
      </div>
      <div className={styles.rowContainer}>
        {data.map((row, index) => <Row key={index} columns={columns} row={row} columnGap={columnGap} numCols={numCols} colWidths={colWidths} gridTemplateColumns={gridTemplateColumns} />)}
      </div>
    </div>
  );
}
