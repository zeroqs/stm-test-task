import { ReactNode } from 'react'

import styles from './Tooltip.module.css'

interface TooltipProps {
  children: ReactNode
  tooltipContent: ReactNode
}

export const Tooltip = ({ children, tooltipContent }: TooltipProps) => {
  return (
    <div className={styles.wrapper}>
      {children}
      <div className={styles.tooltip}>{tooltipContent}</div>
    </div>
  )
}
