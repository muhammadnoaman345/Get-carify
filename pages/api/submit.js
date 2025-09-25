import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)

export default async function handler(req,res){
  if(req.method !== 'POST') return res.status(405).json({ error:'Method Not Allowed' })
  const { vin, name, email } = req.body
  try{
    const { data, error } = await supabase.from('reports').insert([{ vin, name, email }]).select()
    if(error) throw error
    res.status(200).json({ data })
  }catch(err){
    console.error(err)
    res.status(500).json({ error: err.message })
  }
}
