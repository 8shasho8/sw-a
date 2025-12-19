import styles from './CSSModule.module.css'

const CSSModule = () => {
  return (
    <div className={styles.container}>
      <span className="aquaText">CSS Modules</span>を適用したコンポーネントです
    </div>
  )
}

export default CSSModule
