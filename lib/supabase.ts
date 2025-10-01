// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'
import { createServerClient, CookieOptions } from '@supabase/ssr'
import { NextApiRequest, NextApiResponse } from 'next'

// Verifica que las variables de entorno estén definidas
if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('NEXT_PUBLIC_SUPABASE_URL no está definida')
}
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('NEXT_PUBLIC_SUPABASE_ANON_KEY no está definida')
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Cliente para uso en el lado del cliente (navegador)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipo para el contexto de Next.js
interface NextContext {
  req: NextApiRequest
  res: NextApiResponse
}

// Cliente para uso en el servidor (API routes)
export function createServerSupabaseClient(ctx: NextContext) {
  return createServerClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        get(name: string) {
          return ctx.req.cookies[name]
        },
        set(name: string, value: string, options: CookieOptions) {
          ctx.res.setHeader(
            'Set-Cookie',
            [
              `${name}=${value}; Path=/;`,
              options.maxAge ? `Max-Age=${options.maxAge};` : '',
              options.httpOnly ? 'HttpOnly;' : '',
              options.secure ? 'Secure;' : '',
              options.sameSite ? `SameSite=${options.sameSite};` : '',
            ].join(' ')
          )
        },
        remove(name: string, options: CookieOptions) {
          ctx.res.setHeader(
            'Set-Cookie',
            [
              `${name}=; Path=/; Max-Age=0;`,
              options.httpOnly ? 'HttpOnly;' : '',
              options.secure ? 'Secure;' : '',
              options.sameSite ? `SameSite=${options.sameSite};` : '',
            ].join(' ')
          )
        },
      },
    }
  )
}

// Cliente para uso en API routes del servidor (con clave de servicio)
if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error('SUPABASE_SERVICE_ROLE_KEY no está definida')
}

export const supabaseServer = createClient(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)
