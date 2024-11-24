'use client'

import { useEffect, useMemo, useState } from 'react'

import {
  Pagination as UIPagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

export interface PaginationProps {
  totalPages: number
  currentPage?: number
  onPageChange?: (page: number) => void
  defaultCurrentPage?: number
  showCount?: number
}

const isNil = (value: any): value is null | undefined => value === null || value === undefined

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
  defaultCurrentPage,
}: PaginationProps) => {
  const [cmpCurrentPage, setCmpCurrentPage] = useState(defaultCurrentPage ?? 1)

  const handlePageChange = (page: number) => {
    if (isNil(currentPage)) {
      setCmpCurrentPage(page)
    }
    onPageChange?.(page)
  }

  const showPreEllipsis = useMemo(
    () => totalPages > 3 && cmpCurrentPage >= 3,
    [totalPages, cmpCurrentPage]
  )

  const showNextEllipsis = useMemo(
    () => totalPages > 3 && cmpCurrentPage <= totalPages - 2,
    [totalPages, cmpCurrentPage]
  )

  const showPages = useMemo(() => {
    if (cmpCurrentPage === 1) {
      return [1, 2, 3]
    } else if (cmpCurrentPage === totalPages) {
      return [totalPages - 2, totalPages - 1, totalPages]
    } else {
      return [cmpCurrentPage - 1, cmpCurrentPage, cmpCurrentPage + 1]
    }
  }, [totalPages, cmpCurrentPage])

  useEffect(() => {
    setCmpCurrentPage(currentPage ?? defaultCurrentPage ?? 1)
  }, [currentPage])

  return (
    <UIPagination>
      <PaginationContent>
        <PaginationItem
          onClick={() => {
            if (cmpCurrentPage === 1) {
              return
            }
            handlePageChange(cmpCurrentPage - 1)
          }}
        >
          <PaginationPrevious href="#" />
        </PaginationItem>

        {showPreEllipsis && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {showPages.map(pageNum => (
          <PaginationItem key={pageNum}>
            <PaginationLink href="#" isActive={pageNum === cmpCurrentPage}>
              {pageNum}
            </PaginationLink>
          </PaginationItem>
        ))}

        {showNextEllipsis && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem
          onClick={() => {
            if (cmpCurrentPage === totalPages) {
              return
            }
            handlePageChange(cmpCurrentPage + 1)
          }}
        >
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </UIPagination>
  )
}

Pagination.displayName = 'Pagination'

export default Pagination
