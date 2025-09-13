import styles from "./Row.module.scss";
import { Column } from "@/utils/types";
import styleBuidler from "@/utils/styleBuilder";
import { parse } from "date-fns";
import format from "date-fns/format";

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
      className={styleBuidler([
        [styles.container, !prizes],
        [styles.prizesContainer, prizes],
      ])}
      style={{
        gridTemplateColumns: gridTemplateColumns,
        columnGap: columnGap,
      }}
    >
      {columns.map((col) => {
        return <p key={col.name}>{formatColumnValue(col)}</p>;
      })}
    </div>
  );

  function formatColumnValue(col: Column) {
    const value = row[col.name];
    if (value && col.name === "Start Time") {
      return format(new Date(value), "h:mm aaa, eeee");
    } else if (value && col.name === "End Time") {
      return format(new Date(value), "h:mm aaa");
    }
    return value;
  }
}
