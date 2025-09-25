import { useState } from 'react'

export default function ReportPage(){
  const [vin,setVin] = useState('')
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState('')

  async function handleSubmit(e){
    e.preventDefault()
    setError('')
    if(!vin || !email){ setError('Please enter VIN and email'); return }
    setLoading(true)
    try{
      await fetch('/api/submit',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body: JSON.stringify({ vin, name, email })
      })

      const r = await fetch('/api/create-checkout-session',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body: JSON.stringify({ vin, name, email })
      })
      const data = await r.json()
      if(data.url){ window.location = data.url }
      else { setError(data.error || 'Failed to create checkout session') }
    }catch(err){ setError(err.message || 'Error'); console.error(err) }
    finally{ setLoading(false) }
  }

  return (
    <div className="container">
      <h1>Request Vehicle History Report</h1>
      <form onSubmit={handleSubmit}>
        <label>VIN
          <input className="input" value={vin} onChange={e=>setVin(e.target.value)} placeholder="Enter VIN" />
        </label>
        <label>Name (optional)
          <input className="input" value={name} onChange={e=>setName(e.target.value)} />
        </label>
        <label>Email
          <input className="input" type="email" value={email} onChange={e=>setEmail(e.target.value)} />
        </label>
        <button className="button" style={{marginTop:12}} disabled={loading}>
          {loading ? 'Processing...' : 'Buy Report — $9.99 (test)'}
        </button>
        {error && <p style={{color:'crimson'}}>{error}</p>}
      </form>

      <p className="small">This demo uses Stripe test mode and stores requests in Supabase. The site will not automatically fetch Carfax reports — you'll deliver them manually or add an API later.</p>
    </div>
  )
}
