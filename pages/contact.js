
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'
import chaerin from "../public/images/chaerin.jpg"

export default function Contact() {
  return (
    <div className={styles.main}>
      <h1>자기 소개</h1>
      <Image
      src={chaerin}
      alt=''
      width={200}
      height={250}/>
      <p>안녕하세요 반갑습니다!</p>
      <p>이름 : 강채린</p>    
    </div>
  )
}

