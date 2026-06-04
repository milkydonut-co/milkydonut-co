import type { Config, Context } from '@netlify/functions'
import { getStore } from '@netlify/blobs'

export default async (_req: Request, _context: Context) => {
  const store = getStore('gallery-photos')

  const { blobs } = await store.list({ prefix: 'photos/' })

  const photos = blobs.map(blob => ({
    key: blob.key,
    url: `/api/get-photo?key=${encodeURIComponent(blob.key)}`,
  }))

  // Sort newest first
  photos.reverse()

  return new Response(JSON.stringify({ photos }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  })
}

export const config: Config = {
  path: '/api/get-photos',
}
