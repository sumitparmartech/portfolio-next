import type { Metadata } from 'next';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { getProject, projects } from '../../../content/projects';
import VideoFrame from '../../../components/VideoFrame';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  const title = `${p.title}: ${p.tagline} ${p.emphasis}`;
  return {
    title: p.title,
    description: p.summary,
    alternates: { canonical: `/work/${p.slug}/` },
    openGraph: { type: 'article', url: `/work/${p.slug}/`, title, description: p.summary, images: [{ url: p.video.poster, width: 1280, height: 720 }] },
    twitter: { card: 'summary_large_image', title, description: p.summary, images: [p.video.poster] },
  };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const others = projects.filter((x) => x.slug !== p.slug);

  return (
    <div className="cs">
      <header className="cs-bar">
        <div className="cs-wrap cs-barin">
          <a href="/" className="cs-brand">
            <i>SP</i>
            <span>Sumit Parmar</span>
          </a>
          <nav>
            <a href="/#projects">All projects</a>
            {p.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="cs-wrap">
        <section className="cs-hero">
          <div className="cs-lbl cs-in" style={{ ['--i' as string]: 0 }}>
            {p.kind}
          </div>
          <h1 className="cs-in" style={{ ['--i' as string]: 1 }}>{p.title}</h1>
          <p className="cs-lede cs-in" style={{ ['--i' as string]: 2 }}>
            {p.tagline} <em>{p.emphasis}</em>
          </p>
          <p className="cs-sub cs-in" style={{ ['--i' as string]: 3 }}>{p.summary}</p>
          <div className="cs-ctas cs-in" style={{ ['--i' as string]: 4 }}>
            {p.links.map((l) => (
              <a key={l.href} className={`cs-btn${l.primary ? ' pri' : ''}`} href={l.href} target="_blank" rel="noopener">
                {l.label}
              </a>
            ))}
          </div>
        </section>

        <section className="cs-video cs-in" style={{ ['--i' as string]: 5 }}>
          <VideoFrame src={p.video.src} poster={p.video.poster} label={`${p.title} walkthrough video`} />
          <p className="cs-cap">{p.video.caption}</p>
        </section>

        <section className="cs-band">
          <div className="cs-k">{p.statsLabel}</div>
          <div className="cs-stats">
            {p.stats.map((s) => (
              <div className="cs-stat" key={s.label}>
                <small>{s.label}</small>
                <s>{s.before}</s>
                <b>{s.after}</b>
              </div>
            ))}
          </div>
          <dl className="cs-meta">
            <div><dt>Role</dt><dd>{p.role}</dd></div>
            <div><dt>Stack</dt><dd>{p.stack.slice(0, 3).join(', ')}</dd></div>
            <div><dt>Status</dt><dd>{p.status}, {p.year}</dd></div>
          </dl>
        </section>

        <section className="cs-sec cs-two">
          <h2><span>01</span>The problem</h2>
          <div>
            {p.problem.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
        </section>

        <section className="cs-sec">
          <h2><span>02</span>What the report shows</h2>
          <div className="cs-shots">
            {p.gallery.map((g) => (
              <figure key={g.src}>
                <a href={g.src} target="_blank" rel="noopener" className="cs-shot">
                  <div className="vf-bar" aria-hidden="true"><i></i><i></i><i></i></div>
                  <img src={g.src} alt={g.alt} loading="lazy" />
                </a>
                <figcaption>{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="cs-sec">
          <h2><span>03</span>What it checks</h2>
          <div className="cs-grid">
            {p.checks.map(([a, b]) => (
              <div className="cs-card" key={a}>
                <h3>{a}</h3>
                <code>{b}</code>
              </div>
            ))}
          </div>
        </section>

        <section className="cs-sec">
          <h2><span>04</span>How it works</h2>
          <ol className="cs-pipe">
            {p.pipeline.map(([a, b], i) => (
              <li key={a}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <h3>{a}</h3>
                <p>{b}</p>
              </li>
            ))}
          </ol>
          {p.code.map((c) => (
            <div key={c.label}>
              <div className="cs-k cs-codek">{c.label}</div>
              <pre className="cs-code"><code>{c.text}</code></pre>
            </div>
          ))}
        </section>

        {p.realRun && (
          <section className="cs-sec">
            <h2><span>05</span>On a real model</h2>
            <div className="cs-real">
              <div className="cs-card">
                <div className="cs-k">{p.realRun.label}</div>
                <table>
                  <tbody>
                    {p.realRun.rows.map(([a, b]) => (
                      <tr key={a}><td>{a}</td><td>{b}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>{p.realRun.note}</p>
            </div>
          </section>
        )}

        <section className="cs-sec">
          <h2><span>06</span>Decisions</h2>
          <div className="cs-grid cs-grid2">
            {p.decisions.map(([a, b]) => (
              <div className="cs-card" key={a}>
                <h3>{a}</h3>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cs-sec">
          <h2><span>07</span>Honest limits</h2>
          <ul className="cs-limits">
            {p.limits.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </section>

        <section className="cs-sec cs-end">
          <h2>Want this on your agent?</h2>
          <p>I build and test LLM agents, RAG and backend systems. If your agent works in a demo and wobbles in production, I can help.</p>
          <div className="cs-ctas">
            <a className="cs-btn pri" href="https://www.linkedin.com/in/sumitparmar-ai/" target="_blank" rel="noopener">Message me on LinkedIn</a>
            <a className="cs-btn" href="/#projects">All projects</a>
          </div>
          {others.length > 0 && (
            <div className="cs-more">
              <div className="cs-k">More projects</div>
              {others.map((o) => (
                <a key={o.slug} href={`/work/${o.slug}/`}>{o.title}</a>
              ))}
            </div>
          )}
        </section>
      </main>
      <Script src="/autoplay.js" strategy="afterInteractive" />
    </div>
  );
}
