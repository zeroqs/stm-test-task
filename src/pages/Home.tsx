import { Filter } from '@/features/Filter/Filter'
import { useFetch } from '@/shared/hooks/useFetch'
import { ResponseUserGet } from '@/shared/types'
import { UsersTable } from '@/widgets/UsersTable/UsersTable'

const Home = () => {
  const { data, isLoading, isError, error } = useFetch<ResponseUserGet>({
    endpoint: 'https://randomuser.me/api/?results=15',
  })

  return (
    <>
      <Filter />
      <UsersTable
        data={data}
        isLoading={isLoading}
        isError={isError}
        error={error}
      />
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Home
