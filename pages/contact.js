
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'
import chaerin from "../public/images/chaerin.jpg"

export default function Contact() {
  return (
    <div className={styles.me}>
      <h1>자기 소개</h1>
      
      <p>안녕하세요 반갑습니다!</p>
      <p>이름 : 강채린</p>
      <p>나이 : 21세</p>   
    </div>
  )
}

