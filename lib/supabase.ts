import { createClient } from '@supabase/supabase-js'
import { createServerClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Cliente para uso en el lado del cliente
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Cliente para uso en el servidor
export function createServerSupabaseClient() {
  return createServerClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        get(name: string) {
          return undefined
        },
        set(name: string, value: string, options: any) {
          // No-op for now
        },
        remove(name: string, options: any) {
          // No-op for now
        },
      },
    }
  )
}