import type { Config, Context } from '@netlify/functions'
import { getStore } from '@netlify/blobs'

export default async (req: Request, _context: Context) => {
  if (req.method !== 'DELETE') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const url = new URL(req.url)
  const key = url.searchParams.get('key')

  if (!key) {
    return new Response(JSON.stringify({ error: 'Missing key parameter' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const store = getStore('gallery-photos')
  await store.delete(key)

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}

export const config: Config = {
  path: '/api/delete-photo',
}
