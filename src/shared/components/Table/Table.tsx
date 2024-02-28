import { useNavigate } from 'react-router-dom'

import { Tooltip } from '@/shared/components/Tooltip/Tooltip'
import { formatDate } from '@/shared/lib/formatDate'
import { User } from '@/shared/types'

import styles from './Tabe.module.css'

interface TableProps {
  data: User[]
  height?: string
}

export const Table = ({ data, height }: TableProps) => {
  const style = {
    height,
  }

  const navigate = useNavigate()

  const emptyData = data.length === 0

  const onRowClick = (id: string) => {
    navigate(id)
  }

  const rows = data.map((user) => (
    <tr
      key={user.login.uuid}
      onClick={() => onRowClick(user.id.value)}
      className={styles.table_row}
    >
      <td>{`${user.name.first} ${user.name.last}`}</td>
      <td>
        <Tooltip
          tooltipContent={<img src={user.picture.large} alt="user-avatar" />}
        >
          <img src={user.picture.thumbnail} alt="user-avatar" />
        </Tooltip>
      </td>
      <td>{`${user.location.state}, ${user.location.city}`}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{formatDate(user.registered.date)}</td>
    </tr>
  ))

  if (emptyData) {
    return <div>Данные не найдены</div>
  }

  return (
    <div className={styles.table_wrapper} style={style}>
      <table>
        <thead className={styles.header}>
          <tr>
            <th>Name</th>
            <th>Picture</th>
            <th>Location</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Register date</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  )
}
