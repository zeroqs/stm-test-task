/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { useEffect, useState } from 'react'

/**
 * Represents the state of an HTTP request.
 * @template T - The type of data expected in the response.
 *
 * @interface State
 * @property {T | []} data - The data received from the HTTP request.
 * @property {isLoading | boolean} isLoading - flag when request is fetching.
 * @property {isError | boolean} error - An error flag if the request encounters an error.
 * @property {error | string} error - An error string if the request encounters an error.
 */
interface UseFetchProps {
  endpoint: string
}

interface State<T> {
  data: T
  isLoading: boolean
  isError: boolean
  error: string
}

export const useFetch = <T>({ endpoint }: UseFetchProps): State<T | null> => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelRequest = false

    ;(async () => {
      try {
        setLoading(true)

        const response = await fetch(endpoint)
        const responseData = (await response.json()) as T
        if (!cancelRequest) {
          setData(responseData)
        }
      } catch (error) {
        if (!cancelRequest) {
          setError('Fetch Error')
          setIsError(true)
        }
      } finally {
        if (!cancelRequest) {
          setLoading(false)
        }
      }
    })()

    return () => {
      cancelRequest = true
    }
  }, [endpoint])

  return {
    data,
    isLoading,
    isError,
    error,
  }
}
