import { useRouter } from 'next/router'

export default function User() {
  const router = useRouter()
  console.log(router.query)
  const { username } = router.query
  return (
    <div>
      <h1>User Detail Page - {username} </h1>
    </div>
  )
}
