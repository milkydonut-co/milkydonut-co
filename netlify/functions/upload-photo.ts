import type { Config, Context } from '@netlify/functions'
import { getStore } from '@netlify/blobs'

export default async (req: Request, _context: Context) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  let formData: FormData
  try {
    formData = await req.formData()
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid form data' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const file = formData.get('photo') as File | null
  const category = (formData.get('category') as string) || 'general'

  if (!file || !(file instanceof File)) {
    return new Response(JSON.stringify({ error: 'No photo provided' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  if (!file.type.startsWith('image/')) {
    return new Response(JSON.stringify({ error: 'File must be an image' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  // Max 10 MB
  if (file.size > 10 * 1024 * 1024) {
    return new Response(JSON.stringify({ error: 'Image must be under 10 MB' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const store = getStore('gallery-photos')
  const timestamp = Date.now()
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_')
  const key = `photos/${category}/${timestamp}-${safeName}`

  const arrayBuffer = await file.arrayBuffer()

  await store.set(key, arrayBuffer, {
    metadata: {
      contentType: file.type,
      originalName: file.name,
      category,
      uploadedAt: new Date().toISOString(),
    },
  })

  return new Response(
    JSON.stringify({ key, name: file.name, category }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  )
}

export const config: Config = {
  path: '/api/upload-photo',
}
