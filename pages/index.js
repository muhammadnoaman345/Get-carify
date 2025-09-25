import Link from 'next/link'

export default function Home(){
  return (
    <div className="container">
      <h1>Car Report — Demo</h1>
      <p className="small">A simple demo site to request a vehicle history report (VIN lookup + Stripe payment).</p>
      <p><Link href="/report">Get a report →</Link></p>
      <hr />
      <p className="small">Follow the README in this repo to configure Stripe and Supabase, then deploy to Vercel.</p>
    </div>
  )
}
