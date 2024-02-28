import { useQueryParams } from '@/shared/hooks/useQueryParams'

import styles from './Filter.module.css'

export const Filter = () => {
  const { value, handleQuery } = useQueryParams()

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleQuery(event.target.value)
  }
  const onClear = () => {
    handleQuery('')
  }

  return (
    <div className={styles.wrapper}>
      <input
        value={value}
        onChange={onChange}
        className={styles.input}
        type="text"
      />
      <button onClick={onClear} className={styles.button}>
        очистить
      </button>
    </div>
  )
}
