import { formatDate } from '@/shared/lib/formatDate'
import { User } from '@/shared/types'

import styles from './UserContent.module.css'

interface UserContentProps {
  user: User
}

export const UserContent = ({ user }: UserContentProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        <img
          className={styles.avatar}
          src={user.picture.large}
          alt="user-avatar"
        />
      </div>
      <div className={styles.user_info}>
        <div className={styles.card}>
          Name: {`${user.name.first} ${user.name.last}`}
        </div>
        <div className={styles.card}>Age: {user.dob.age}</div>
        <div className={styles.card}>Gender: {user.gender}</div>

        <div className={styles.card}>Email: {user.email}</div>
        <div className={styles.card}>
          Location: {`${user.location.state}, ${user.location.city}`}
        </div>
        <div className={styles.card}>Street: {user.location.street.name}</div>

        <div className={styles.card}>Phone: {user.phone}</div>
        <div className={styles.card}>
          Registered Date: {formatDate(user.registered.date)}
        </div>
        <div className={styles.card}>Cell: {user.cell}</div>
      </div>
    </div>
  )
}
