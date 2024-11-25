'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
} from 'lucide-react'

import { Button, ButtonProps } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface PaginationProps {
  totalPages: number
  currentPage?: number
  onPageChange?: (page: number) => void
  defaultCurrentPage?: number
}

const isNil = (value: any): value is null | undefined => value === null || value === undefined

const PaginationContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-1">{children}</div>
)

const PaginationItem = ({
  children,
  isActive,
  ...props
}: ButtonProps & {
  isActive?: boolean
}) => (
  <Button
    {...props}
    className={cn('flex h-10 w-10 items-center justify-center p-0', props.className)}
    variant={isActive ? 'outline' : 'ghost'}
  >
    {children}
  </Button>
)

const PaginationEllipsis = ({
  hoverIcon,
  onClick,
}: {
  hoverIcon?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}) => (
  <PaginationItem className="group relative hover:bg-transparent" variant="link" onClick={onClick}>
    <MoreHorizontal
      className={cn(
        'h-4 w-4 transition-opacity duration-200',
        !isNil(hoverIcon) && 'group-hover:opacity-0'
      )}
    />
    {!isNil(hoverIcon) && (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        {hoverIcon}
      </div>
    )}
    <span className="sr-only">More pages</span>
  </PaginationItem>
)

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
  defaultCurrentPage,
}: PaginationProps) => {
  const [cmpCurrentPage, setCmpCurrentPage] = useState(defaultCurrentPage ?? currentPage ?? 1)

  const handlePageChange = (page: number) => {
    if (isNil(currentPage)) {
      setCmpCurrentPage(page)
    }
    onPageChange?.(page)
  }

  const formatPage = (page: number) => {
    if (page < 1) {
      return 1
    } else if (page > totalPages) {
      return totalPages
    }
    return page
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
    <PaginationContainer>
      <PaginationItem
        onClick={() => {
          if (cmpCurrentPage === 1) {
            return
          }
          handlePageChange(cmpCurrentPage - 1)
        }}
        disabled={cmpCurrentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
      </PaginationItem>

      {showPreEllipsis && (
        <PaginationEllipsis
          hoverIcon={<ChevronsLeft className="h-4 w-4" />}
          onClick={() => {
            handlePageChange(formatPage(cmpCurrentPage - 3))
          }}
        />
      )}

      {showPages.map(pageNum => (
        <PaginationItem
          key={pageNum}
          isActive={pageNum === cmpCurrentPage}
          onClick={() => {
            if (pageNum === totalPages) {
              return
            }
            handlePageChange(pageNum)
          }}
        >
          {pageNum}
        </PaginationItem>
      ))}

      {showNextEllipsis && (
        <PaginationEllipsis
          hoverIcon={<ChevronsRight className="h-4 w-4" />}
          onClick={() => {
            handlePageChange(formatPage(cmpCurrentPage + 3))
          }}
        />
      )}

      <PaginationItem
        onClick={() => {
          if (cmpCurrentPage === totalPages) {
            return
          }
          handlePageChange(cmpCurrentPage + 1)
        }}
        disabled={cmpCurrentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
      </PaginationItem>
    </PaginationContainer>
  )
}

Pagination.displayName = 'Pagination'

export default Pagination
