import { createContext, useContext, useState } from 'react'

import { ProviderProps } from '@/shared/types'

interface QueryParamsContextProps {
  query: string
  setQuery: (value: string) => void
}

const QueryParamsContext = createContext<QueryParamsContextProps>({
  query: '',
  setQuery: () => {},
})

export const QueryParamsProvider = ({ children }: ProviderProps) => {
  const [query, setQuery] = useState('')

  return (
    <QueryParamsContext.Provider value={{ query, setQuery }}>
      {children}
    </QueryParamsContext.Provider>
  )
}

export const useQueryParamsContext = () => useContext(QueryParamsContext)
