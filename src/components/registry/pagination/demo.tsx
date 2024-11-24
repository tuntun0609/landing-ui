import Pagination from '.'

import styles from './index.module.css'

const PaginationDemo = () => (
  <div className={styles.pagination}>
    <Pagination totalPages={10} />
  </div>
)

export default PaginationDemo
