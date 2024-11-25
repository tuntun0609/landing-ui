import { useState } from 'react'

import Pagination from '.'

import styles from './index.module.css'

const PaginationDemo = () => {
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <div className={styles.pagination}>
      <Pagination totalPages={10} onPageChange={setCurrentPage} currentPage={currentPage} />
    </div>
  )
}

export default PaginationDemo
