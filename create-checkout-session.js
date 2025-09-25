import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req,res){
  if(req.method !== 'POST') return res.status(405).json({ error:'Method Not Allowed' })
  const { vin, name, email } = req.body
  try{
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: { name: 'Vehicle History Report' },
          unit_amount: 999
        },
        quantity: 1
      }],
      customer_email: email,
      metadata: { vin, name, email },
      success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/report`
    })
    res.status(200).json({ url: session.url })
  }catch(err){
    console.error(err)
    res.status(500).json({ error: err.message })
  }
}