import { useEffect, useState } from 'react'

import { User } from '@/shared/types'

interface UseFilterProps {
  data: User[] | undefined
  queryFilter: string
}

export const useFilter = ({ data, queryFilter }: UseFilterProps) => {
  const [filteredUsers, setFilteredUsers] = useState([] as User[])

  useEffect(() => {
    if (queryFilter && data) {
      const filtered = data.filter((user) =>
        user.name.first.toLowerCase().includes(queryFilter.toLowerCase()),
      )
      setFilteredUsers(filtered)
    } else {
      setFilteredUsers(data || [])
    }
  }, [data, queryFilter])

  return {
    filteredUsers,
  }
}
