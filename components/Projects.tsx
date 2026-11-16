import { projects } from '../content/projects';
import VideoFrame from './VideoFrame';

export default function Projects() {
  const [feat, ...rest] = projects;
  return (
    <section className="sec pj" id="projects" data-hud="04|PROJECTS">
      <div className="wrap">
        <div className="sh rv" data-node>
          <span className="lbl">
            <b>05</b>
            {' · Projects'}
          </span>
          <span className="ln"></span>
        </div>
        <h2 className="sp">
          Things I build <span className="o">on my own.</span>
        </h2>
        <p className="intro rv">Open source work with real code, real numbers and a demo you can run yourself.</p>

        <article className="pj-feat rv">
          <div className="pj-media">
            <VideoFrame src={feat.video.src} poster={feat.video.poster} label={`${feat.title} walkthrough video`} />
          </div>
          <div className="pj-body">
            <div className="pj-main">
              <div className="pj-kind">
                {feat.kind}
                <span className="pj-st">
                  <b></b>
                  {feat.status}
                </span>
              </div>
              <h3>{feat.title}</h3>
              <p className="pj-line">
                {feat.tagline} <em>{feat.emphasis}</em>
              </p>
              <div className="pj-ctas">
                <a className="btn pri" href={`/work/${feat.slug}/`}>
                  <span>Read the case study</span>
                </a>
                {feat.links.map((l) => (
                  <a className="btn gho" key={l.href} href={l.href} target="_blank" rel="noopener">
                    <span>{l.label}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="pj-side">
              <div className="pj-stats">
                {feat.stats.slice(0, 3).map((s) => (
                  <div className="pj-stat" key={s.label}>
                    <small>{s.label}</small>
                    <b>{s.after}</b>
                    <span>was {s.before}</span>
                  </div>
                ))}
              </div>
              <p className="pj-note">{feat.statsLabel}.</p>
              <div className="pj-tags">
                {feat.stack.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {rest.length > 0 && (
          <div className="pj-grid">
            {rest.map((p) => (
              <a className="pj-card rv" key={p.slug} href={`/work/${p.slug}/`}>
                <div className="pj-kind">{p.kind}</div>
                <h3>{p.title}</h3>
                <p>
                  {p.tagline} {p.emphasis}
                </p>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
