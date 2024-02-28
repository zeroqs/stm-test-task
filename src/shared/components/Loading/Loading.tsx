import styles from './Loading.module.css'

export const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner}>
        <div className={styles.bounce1} />
        <div className={styles.bounce2} />
        <div className={styles.bounce3} />
      </div>
    </div>
  )
}
