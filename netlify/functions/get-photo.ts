import type { Config, Context } from '@netlify/functions'
import { getStore } from '@netlify/blobs'

export default async (req: Request, _context: Context) => {
  const url = new URL(req.url)
  const key = url.searchParams.get('key')

  if (!key) {
    return new Response(JSON.stringify({ error: 'Missing key parameter' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const store = getStore('gallery-photos')
  const result = await store.getWithMetadata(key, { type: 'blob' })

  if (!result) {
    return new Response(JSON.stringify({ error: 'Photo not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const contentType = (result.metadata as any)?.contentType || 'image/jpeg'

  return new Response(result.data as Blob, {
    status: 200,
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}

export const config: Config = {
  path: '/api/get-photo',
}
