import styles from './page.module.scss';
import { resources } from '@/public/data';
import Resource from '@/components/Resource';

export const metadata = {
  title: "Resources - MHacks Live"
}

export default function Page() {
  return <main className={styles.page}>
    <h1>Resources</h1>
    <section className={styles.resourceContainer}>
      {resources.map(resource => <Resource key={resource.company} company={resource.company} logoPath={resource.logoPath} href={resource.href} />)}
    </section>
  </main>;
}
