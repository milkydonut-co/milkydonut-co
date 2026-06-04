import { createFileRoute } from '@tanstack/react-router'
import { useState, useCallback, useRef, useEffect } from 'react'

export const Route = createFileRoute('/gallery')({
  component: GalleryPage,
})

type Photo = {
  key: string
  url: string
  name?: string
  uploadedAt?: string
}

type UploadStatus = 'idle' | 'uploading' | 'success' | 'error'

function PhotoCard({ photo, onDelete }: { photo: Photo; onDelete: (key: string) => void }) {
  const [loaded, setLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)

  return (
    <div className="gallery-item group relative overflow-hidden rounded" style={{ background: 'var(--beige)' }}>
      {!loaded && !imgError && (
        <div
          className="w-full animate-pulse"
          style={{ height: '180px', background: 'var(--beige-dark)' }}
        />
      )}
      {!imgError ? (
        <img
          src={photo.url}
          alt={photo.name || 'Gallery photo'}
          className="w-full block"
          style={{
            display: loaded ? 'block' : 'none',
            objectFit: 'cover',
          }}
          onLoad={() => setLoaded(true)}
          onError={() => { setImgError(true); setLoaded(true) }}
        />
      ) : (
        <div
          className="w-full flex flex-col items-center justify-center gap-2"
          style={{ height: '160px', background: 'var(--beige)' }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--beige-dark)" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
          <span className="text-xs" style={{ color: 'var(--text-light)' }}>Image unavailable</span>
        </div>
      )}

      {/* Overlay on hover */}
      <div
        className="absolute inset-0 flex flex-col items-end justify-start p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(135deg, rgba(60,30,10,0.2) 0%, transparent 50%)' }}
      >
        <button
          onClick={() => onDelete(photo.key)}
          className="w-7 h-7 rounded flex items-center justify-center transition-colors"
          style={{ background: 'rgba(255,255,255,0.9)', color: 'var(--brown)' }}
          title="Delete photo"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="3 6 5 6 21 6"/>
            <path d="M19 6l-1 14H6L5 6"/>
            <path d="M10 11v6M14 11v6"/>
            <path d="M9 6V4h6v2"/>
          </svg>
        </button>
      </div>

      {/* Name label */}
      {photo.name && (
        <div
          className="px-2 py-1 text-xs truncate"
          style={{ color: 'var(--text-light)', fontFamily: 'DM Sans' }}
        >
          {photo.name}
        </div>
      )}
    </div>
  )
}

function EmptyGallery() {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-24 text-center">
      <div className="mb-6">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <rect x="8" y="16" width="64" height="48" rx="6" stroke="var(--beige-dark)" strokeWidth="2"/>
          <circle cx="28" cy="34" r="6" stroke="var(--beige-dark)" strokeWidth="2"/>
          <path d="M8 52l16-12 14 10 10-8 24 14" stroke="var(--beige-dark)" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M52 8l4 4-4 4M60 12H52" stroke="var(--brown-light)" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      <h3
        className="mb-2"
        style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', color: 'var(--brown-dark)' }}
      >
        No photos yet
      </h3>
      <p className="text-sm" style={{ color: 'var(--text-light)', maxWidth: '280px', lineHeight: 1.7 }}>
        Upload your first sales photo or activity snap to get the gallery started!
      </p>
    </div>
  )
}

export default function GalleryPage() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [photosLoaded, setPhotosLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>('idle')
  const [uploadError, setUploadError] = useState('')
  const [dragOver, setDragOver] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [uploadProgress, setUploadProgress] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [activeTab, setActiveTab] = useState<'all' | 'sales' | 'activities'>('all')
  const [loadError, setLoadError] = useState('')

  const loadPhotos = useCallback(async () => {
    if (photosLoaded) return
    setLoading(true)
    setLoadError('')
    try {
      const res = await fetch('/api/get-photos')
      if (!res.ok) throw new Error('Failed to load photos')
      const data = await res.json()
      setPhotos(data.photos || [])
      setPhotosLoaded(true)
    } catch (err) {
      setLoadError('Could not load photos. Please refresh.')
    } finally {
      setLoading(false)
    }
  }, [photosLoaded])

  // Load photos on mount
  useEffect(() => {
    loadPhotos()
  }, [loadPhotos])

  const handleFiles = (files: FileList | null) => {
    if (!files) return
    const valid = Array.from(files).filter(f => f.type.startsWith('image/'))
    setSelectedFiles(valid)
  }

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    handleFiles(e.dataTransfer.files)
  }, [])

  const uploadFiles = async () => {
    if (!selectedFiles.length) return
    setUploadStatus('uploading')
    setUploadError('')
    setUploadProgress(0)

    const newPhotos: Photo[] = []

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i]
      const formData = new FormData()
      formData.append('photo', file)
      formData.append('category', activeTab === 'all' ? 'general' : activeTab)

      try {
        const res = await fetch('/api/upload-photo', {
          method: 'POST',
          body: formData,
        })
        if (!res.ok) {
          const err = await res.json().catch(() => ({ error: 'Upload failed' }))
          throw new Error(err.error || 'Upload failed')
        }
        const data = await res.json()
        newPhotos.push({
          key: data.key,
          url: `/api/get-photo?key=${encodeURIComponent(data.key)}`,
          name: file.name,
        })
      } catch (err: any) {
        setUploadError(err.message || 'Upload failed')
        setUploadStatus('error')
        return
      }

      setUploadProgress(Math.round(((i + 1) / selectedFiles.length) * 100))
    }

    setPhotos(prev => [...newPhotos, ...prev])
    setSelectedFiles([])
    setUploadStatus('success')
    setTimeout(() => setUploadStatus('idle'), 3000)
  }

  const handleDelete = async (key: string) => {
    if (!confirm('Delete this photo?')) return
    try {
      const res = await fetch(`/api/delete-photo?key=${encodeURIComponent(key)}`, {
        method: 'DELETE',
      })
      if (res.ok) {
        setPhotos(prev => prev.filter(p => p.key !== key))
      }
    } catch {
      // silently fail
    }
  }

  const filteredPhotos = photos.filter(p => {
    if (activeTab === 'all') return true
    return p.key.includes(`/${activeTab}/`) || p.key.includes(`-${activeTab}-`)
  })

  return (
    <div style={{ background: 'var(--cream)', paddingTop: '80px' }}>
      {/* Hero */}
      <section
        className="py-20 px-6 text-center relative overflow-hidden"
        style={{ background: 'var(--brown)' }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(-45deg, var(--cream) 0px, var(--cream) 1px, transparent 1px, transparent 30px)',
          }}
        />
        <div className="relative">
          <div className="section-label mb-6" style={{ color: 'var(--brown-light)' }}>Our Story in Pictures</div>
          <h1
            className="mb-4"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 600,
              color: 'var(--cream)',
              lineHeight: 1.15,
            }}
          >
            The MilkyDonut{' '}
            <em style={{ color: 'var(--gold-light)' }}>Gallery</em>
          </h1>
          <p style={{ color: 'var(--text-light)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.8 }}>
            A visual diary of our daily bakes, happy customers, and unforgettable moments behind the scenes.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Upload section */}
          <div
            className="mb-12 p-6 md:p-8 rounded"
            style={{ background: 'var(--beige-light)', border: '1px solid var(--beige-dark)' }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
              <div>
                <h2
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.8rem',
                    fontWeight: 600,
                    color: 'var(--brown-dark)',
                    marginBottom: '0.25rem',
                  }}
                >
                  Upload Photos
                </h2>
                <p className="text-sm" style={{ color: 'var(--text-light)' }}>
                  Share your sales photos and activity snaps with the team
                </p>
              </div>
              {selectedFiles.length > 0 && (
                <button
                  onClick={uploadFiles}
                  disabled={uploadStatus === 'uploading'}
                  className="btn-primary ml-auto"
                >
                  {uploadStatus === 'uploading' ? `Uploading... ${uploadProgress}%` : `Upload ${selectedFiles.length} Photo${selectedFiles.length > 1 ? 's' : ''}`}
                </button>
              )}
            </div>

            {/* Drop zone */}
            <div
              className={`upload-zone rounded p-10 text-center cursor-pointer transition-all ${dragOver ? 'drag-over' : ''}`}
              onClick={() => fileInputRef.current?.click()}
              onDragOver={e => { e.preventDefault(); setDragOver(true) }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={e => handleFiles(e.target.files)}
              />

              {selectedFiles.length > 0 ? (
                <div>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {selectedFiles.slice(0, 6).map((f, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ background: 'var(--brown)', color: 'var(--cream)' }}
                      >
                        {f.name.length > 20 ? f.name.slice(0, 18) + '…' : f.name}
                      </div>
                    ))}
                    {selectedFiles.length > 6 && (
                      <div
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ background: 'var(--beige-dark)', color: 'var(--brown-dark)' }}
                      >
                        +{selectedFiles.length - 6} more
                      </div>
                    )}
                  </div>
                  <p className="text-sm" style={{ color: 'var(--text-mid)' }}>
                    {selectedFiles.length} file{selectedFiles.length > 1 ? 's' : ''} selected — click to change
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: 'var(--beige)', color: 'var(--brown-light)' }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="17 8 12 3 7 8"/>
                      <line x1="12" y1="3" x2="12" y2="15"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium mb-1" style={{ color: 'var(--brown-dark)', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem' }}>
                      Drag & drop photos here
                    </p>
                    <p className="text-sm" style={{ color: 'var(--text-light)' }}>
                      or click to browse — JPG, PNG, WebP supported
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Status messages */}
            {uploadStatus === 'success' && (
              <div
                className="mt-4 p-3 rounded flex items-center gap-2 text-sm"
                style={{ background: '#d4edda', color: '#155724' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Photos uploaded successfully!
              </div>
            )}
            {uploadStatus === 'error' && uploadError && (
              <div
                className="mt-4 p-3 rounded flex items-center gap-2 text-sm"
                style={{ background: '#f8d7da', color: '#721c24' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                {uploadError}
              </div>
            )}
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mb-8 p-1 rounded w-fit" style={{ background: 'var(--beige)' }}>
            {(['all', 'sales', 'activities'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-5 py-2 rounded text-sm font-medium capitalize transition-all duration-200"
                style={{
                  background: activeTab === tab ? 'var(--brown)' : 'transparent',
                  color: activeTab === tab ? 'var(--cream)' : 'var(--text-mid)',
                  fontFamily: 'DM Sans',
                }}
              >
                {tab === 'all' ? 'All Photos' : tab === 'sales' ? 'Sales' : 'Activities'}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          {loading ? (
            <div className="gallery-grid">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="gallery-item rounded animate-pulse"
                  style={{
                    height: `${150 + (i % 3) * 60}px`,
                    background: 'var(--beige)',
                  }}
                />
              ))}
            </div>
          ) : loadError ? (
            <div className="text-center py-16">
              <p className="text-sm mb-4" style={{ color: 'var(--text-light)' }}>{loadError}</p>
              <button
                onClick={() => { setPhotosLoaded(false); loadPhotos() }}
                className="btn-outline text-sm"
              >
                Try Again
              </button>
            </div>
          ) : filteredPhotos.length === 0 ? (
            <EmptyGallery />
          ) : (
            <div className="gallery-grid">
              {filteredPhotos.map(photo => (
                <PhotoCard key={photo.key} photo={photo} onDelete={handleDelete} />
              ))}
            </div>
          )}

          {/* Photo count */}
          {!loading && filteredPhotos.length > 0 && (
            <div className="mt-8 text-center">
              <p className="text-sm" style={{ color: 'var(--text-light)' }}>
                Showing {filteredPhotos.length} photo{filteredPhotos.length !== 1 ? 's' : ''}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
