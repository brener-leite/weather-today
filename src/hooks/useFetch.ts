import axios, { AxiosRequestConfig } from 'axios'
import { useState, useEffect } from 'react'

export const useFetch = <T = unknown>(
  url: string,
  options?: AxiosRequestConfig
) => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    axios
      .get(url, options)
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setIsFetching(false)
      })
  }, [options, url])

  return { data, error, isFetching }
}
