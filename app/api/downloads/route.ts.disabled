import { NextRequest, NextResponse } from 'next/server'
import { supabaseServer } from '../../../lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name, company, phone, howFound, resourceTitle } = body

    // Insertar lead en la tabla downloads
    const { data, error } = await supabaseServer
      .from('downloads')
      .insert({
        user_email: email,
        user_name: name,
        company: company || null,
        phone: phone || null,
        how_found_us: howFound || null,
        resource_id: null,
        ip_address: request.headers.get('x-forwarded-for') || 'unknown',
        user_agent: request.headers.get('user-agent') || 'unknown'
      })

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Database error' }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}