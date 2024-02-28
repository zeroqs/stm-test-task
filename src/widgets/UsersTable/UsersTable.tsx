import { useQueryParamsContext } from '@/app/providers/queryParams/QueryParamsContext'
import { Skeleton } from '@/shared/components/Skeleton/Skeleton'
import { Table } from '@/shared/components/Table/Table'
import { useFilter } from '@/shared/hooks/useFilter'
import { ResponseUserGet } from '@/shared/types'

import styles from './UserTable.module.css'

interface UsersTableProps {
  data: ResponseUserGet | null
  isLoading: boolean
  isError: boolean
  error: string
}

export const UsersTable = ({
  data,
  isLoading,
  isError,
  error,
}: UsersTableProps) => {
  const { query } = useQueryParamsContext()

  const { filteredUsers } = useFilter({
    data: data?.results,
    queryFilter: query,
  })

  if (isLoading)
    return (
      <div className={styles.table_wrapper}>
        <Skeleton height="600px" borderRadius="12px" />
      </div>
    )

  if (isError) return <h1>{error}</h1>

  if (!data) return <h1>no have data</h1>

  return (
    <>
      <div className={styles.table_wrapper}>
        <Table height="600px" data={filteredUsers} />
      </div>
    </>
  )
}
