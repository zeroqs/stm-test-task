import styles from './Skeleton.module.css'

interface SkeletonProps {
  height: string
  borderRadius: string
}

export const Skeleton = ({ height, borderRadius }: SkeletonProps) => {
  const style = {
    height,
    borderRadius,
  }

  return <div className={styles.skeleton} style={style} />
}
