import { Skeleton } from '@/shared/components/Skeleton/Skeleton'
import { UserContent } from '@/shared/components/UserContent/UserContent'
import { ResponseUserGet } from '@/shared/types'

import styles from './UserInfo.module.css'

interface UserInfoProps {
  data: ResponseUserGet | null
  isLoading: boolean
  isError: boolean
  error: string
}

export const UserInfo = ({
  data,
  isLoading,
  isError,
  error,
}: UserInfoProps) => {
  if (isLoading)
    return (
      <div className={styles.wrapper}>
        <Skeleton height="700px" borderRadius="12px" />
      </div>
    )

  if (isError) return <h1>{error}</h1>

  if (!data) return <h1>no have data</h1>

  const user = data.results[0]

  return (
    <div className={styles.wrapper}>
      <UserContent user={user} />
    </div>
  )
}
