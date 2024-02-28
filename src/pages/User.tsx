import { useParams } from 'react-router-dom'

import { useFetch } from '@/shared/hooks/useFetch'
import { ResponseUserGet } from '@/shared/types'
import { UserInfo } from '@/widgets/UserInfo/UserInfo'

const UserPage = () => {
  const { userId } = useParams()

  const { data, isLoading, isError, error } = useFetch<ResponseUserGet>({
    endpoint: `https://randomuser.me/api/?id=${userId}`,
  })

  return (
    <>
      <UserInfo
        data={data}
        isLoading={isLoading}
        isError={isError}
        error={error}
      />
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default UserPage
