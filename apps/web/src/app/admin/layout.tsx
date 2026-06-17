import '../globals.scss';
import styles from './Layout.module.scss';

export const dynamic = 'force-dynamic';

export default async function RootLayout({ children }: LayoutProps<'/admin'>) {
  return (
    <html>
      <body className={styles.body}>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
