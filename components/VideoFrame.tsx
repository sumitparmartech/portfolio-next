export default function VideoFrame({ src, poster, label }: { src: string; poster: string; label: string }) {
  return (
    <div className="vf">
      <div className="vf-bar" aria-hidden="true">
        <i></i>
        <i></i>
        <i></i>
      </div>
      <video
        className="vf-video"
        data-auto
        muted
        loop
        playsInline
        controls
        preload="metadata"
        poster={poster}
        aria-label={label}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
