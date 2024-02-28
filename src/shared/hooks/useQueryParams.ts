import { useEffect, useState } from 'react'

import { useQueryParamsContext } from '@/app/providers/queryParams/QueryParamsContext'
import { updateUrl } from '@/shared/lib/updateUrl'

export const useQueryParams = () => {
  const { query: contextValue, setQuery: setContextValue } =
    useQueryParamsContext()
  const [value, setValue] = useState(contextValue)

  useEffect(() => {
    const timer = setTimeout(() => {
      updateUrl(value, setContextValue)
    }, 500)
    return () => {
      clearTimeout(timer)
    }
  }, [value, setContextValue])

  return {
    value,
    handleQuery: setValue,
  }
}
