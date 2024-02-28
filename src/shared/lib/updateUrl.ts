export const updateUrl = (
  value: string,
  setContextValue: (value: string) => void,
) => {
  const params = new URLSearchParams(window.location.search)
  if (value) {
    params.set('query', value)
    setContextValue(value)
  } else {
    params.delete('query')
    setContextValue('')
  }

  const queryString = params.toString()
  const newUrl = queryString
    ? `${window.location.pathname}?${queryString}`
    : window.location.pathname

  window.history.replaceState({}, '', newUrl)
}
