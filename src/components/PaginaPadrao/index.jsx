import { Outlet } from 'react-router-dom';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

import styles from './PaginaPadrao.module.scss';

export default function PaginaPadrao() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles['container-outlet']}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}