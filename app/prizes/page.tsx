import styles from './page.module.scss'
import Table from '@/components/Table'
import { prizeCols, prizes} from '@/utils/data'


export default function Page() {
  return <main className={styles.page}><h1 className={styles.heading}>Prizes</h1><Table columns={prizeCols} data={prizes} /></main>
}
