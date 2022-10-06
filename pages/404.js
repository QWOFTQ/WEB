import Link from 'next/link'
import React from 'react'

export default function PageNotFound() {
  return (
    <div className='container'>
      <h1>Page Not Found!</h1>
      <h3>찾는 페이지가 없습니다.</h3>
      <Link href='/'>홈으로 돌아가기</Link>
    </div>
  )
}
