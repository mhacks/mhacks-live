export type Column = {
  name: string
  proportion: number
}

export type Row = {
  values: Array<any>
}

export type Table = {
  columns: Array<Column>
  data: Array<Row>
}
