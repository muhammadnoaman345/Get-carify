import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Success(){
  const router = useRouter()
  const { session_id } = router.query
  const [message, setMessage] = useState('Finalizing...')

  useEffect(()=>{
    if(!session_id) return
    setMessage('Payment received — we will email your report shortly.')
  },[session_id])

  return (
    <div className="container">
      <h1>Thank you — payment complete</h1>
      <p className="small">{message}</p>
      <p className="small">If this was a test, you can inspect the session in Stripe Dashboard (test data).</p>
    </div>
  )
}
