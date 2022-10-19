
import styles from '../styles/Home.module.css'

export default function about() {
  const name = '강채린'
  return (
    <div className= {styles.about} >
      <h1>About Page</h1>

      <p>안녕하세요, {name}님!</p>
    </div>
  )
}
