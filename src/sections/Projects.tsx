import { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const filters = ['All', 'Editing', 'Website', 'Creative'];

interface Project {
  id: number;
  title: string;
  category: string;
  filter: string;
  image?: string;
  video?: string;
  featured?: boolean;
  gradient?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Secret Door',
    category: 'Video Editing',
    filter: 'Editing',
    video: '/videos/Secretdoor.mp4',
    featured: true,
  },
  {
    id: 2,
    title: 'Stephen',
    category: 'Shortform Content',
    filter: 'Editing',
    video: '/videos/Stephen.mp4',
    featured: true,
  },
  {
    id: 3,
    title: 'School Multimedia',
    category: 'Creative',
    filter: 'Creative',
    gradient: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
  },
  {
    id: 4,
    title: 'Portfolio V1',
    category: 'Website',
    filter: 'Website',
    gradient: 'linear-gradient(135deg, #e8e8e8 0%, #d0d0d0 100%)',
  },
  {
    id: 5,
    title: 'Brand Identity',
    category: 'Creative',
    filter: 'Creative',
    gradient: 'linear-gradient(135deg, #c0c0c0 0%, #a0a0a0 100%)',
  },
  {
    id: 6,
    title: 'Cinematic Short',
    category: 'Editing',
    filter: 'Editing',
    gradient: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
  },
];

function VideoThumbnail({ src, title }: { src: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [frame, setFrame] = useState('');

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => {
      video.currentTime = 0.5;
    };

    const handleSeeked = () => {
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth || 640;
      canvas.height = video.videoHeight || 360;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        setFrame(canvas.toDataURL('image/jpeg', 0.8));
      }
    };

    video.addEventListener('loadeddata', handleLoaded);
    video.addEventListener('seeked', handleSeeked);

    return () => {
      video.removeEventListener('loadeddata', handleLoaded);
      video.removeEventListener('seeked', handleSeeked);
    };
  }, [src]);

  return (
    <>
      <video ref={videoRef} src={src} crossOrigin="anonymous" className="hidden" preload="metadata" />
      {frame ? (
        <img src={frame} alt={title} className="w-full h-full object-cover" style={{ filter: 'grayscale(100%)' }} />
      ) : (
        <div className="w-full h-full" style={{ background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)' }} />
      )}
    </>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.1, stagger: 0.08 });

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.filter === activeFilter);

  return (
    <section
      id="work"
      ref={ref}
      className="w-full"
      style={{
        backgroundColor: '#F5F5F7',
        paddingTop: 'var(--section-pad)',
        paddingBottom: 'var(--section-pad)',
      }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: 'var(--content-max)' }}>
        <span
          data-reveal
          className="font-mono text-[11px] tracking-[0.15em] uppercase"
          style={{ color: '#9A9A9A' }}
        >
          SELECTED WORK
        </span>
        <h2
          data-reveal
          className="font-semibold mt-4"
          style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
            color: '#1A1A1A',
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
          }}
        >
          Projects & Creations
        </h2>

        {/* Filter Tabs */}
        <div data-reveal className="flex flex-wrap gap-2 mt-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="px-5 py-2 text-[13px] font-medium transition-all duration-150"
              style={{
                borderRadius: '100px',
                backgroundColor: activeFilter === f ? '#1A1A1A' : 'transparent',
                color: activeFilter === f ? '#FFFFFF' : '#6B6B6B',
                border: activeFilter === f ? '1px solid #1A1A1A' : '1px solid #E5E5E5',
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== f) {
                  (e.target as HTMLElement).style.borderColor = '#6B6B6B';
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== f) {
                  (e.target as HTMLElement).style.borderColor = '#E5E5E5';
                }
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div
          className="grid gap-4 mt-10"
          style={{
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridAutoRows: '280px',
          }}
        >
          {filtered.map((project) => {
            const isFeatured = project.featured;
            return (
              <div
                key={project.id}
                data-reveal
                className="group relative overflow-hidden cursor-pointer"
                style={{
                  borderRadius: '12px',
                  gridColumn: isFeatured ? 'span 2' : 'span 2',
                  gridRow: isFeatured ? 'span 2' : 'span 1',
                }}
              >
                {/* Image / Video */}
                <div className="w-full h-full transition-all duration-500 ease-out group-hover:scale-[1.03]">
                  {project.video ? (
                    <div className="w-full h-full relative">
                      <VideoThumbnail src={project.video} title={project.title} />
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Play size={14} color="white" fill="white" />
                      </div>
                    </div>
                  ) : (
                    <div
                      className="w-full h-full"
                      style={{ background: project.gradient }}
                    />
                  )}
                </div>

                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.6) 100%)',
                  }}
                />

                {/* Info */}
                <div
                  className="absolute bottom-5 left-5 right-5 transition-transform duration-300 group-hover:-translate-y-1"
                >
                  <span
                    className="font-mono text-[10px] tracking-[0.1em] uppercase"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                  >
                    {project.category}
                  </span>
                  <h3
                    className="font-medium mt-1 text-white"
                    style={{
                      fontSize: 'clamp(1.1rem, 1.5vw, 1.35rem)',
                    }}
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Hover: remove grayscale for video thumbnails */}
                {project.video && (
                  <style>{`
                    .group:hover img {
                      filter: grayscale(0%) !important;
                    }
                  `}</style>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
