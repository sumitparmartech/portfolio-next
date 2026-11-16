export default function Hero() {
  return (
    <>
    <section className="hero" id="hero" data-hud="00|INTRO">
      <canvas id="swarm"></canvas>
      <div className="wrap">
        <div className="hgrid">
          <div className="htext">
            <div className="lbl rv">
              {"AI Engineer "}
              <b>·</b>
              {" Ahmedabad, India"}
            </div>
            <h1 className="sp" id="h1">Sumit Parmar</h1>
            <div className="lede rv" style={{"--d": ".5s"} as React.CSSProperties}>
              {"From what AI "}
              <em>can</em>
              {" do, to what it "}
              <em>actually does.</em>
            </div>
            <p className="sub rv" style={{"--d": ".6s"} as React.CSSProperties}>Most AI stays a promise. I build the systems that turn it into real work, from the first requirement to production.</p>
            <div className="ctas rv" style={{"--d": ".7s"} as React.CSSProperties}>
              <a className="btn pri" href="#brain" data-mag>
                <span>
                  {"See the work "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </a>
              <a className="btn gho" href="#contact" data-mag>
                <span>Get in touch</span>
              </a>
              <a className="btn gho ico" aria-label="WhatsApp" href="https://wa.me/918487027268?text=Hi%20Sumit%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect." target="_blank" rel="noopener">
                <span>
                  <i className="lgo bi" id="hwa"></i>
                </span>
              </a>
              <a className="btn gho ico" aria-label="LinkedIn" href="https://www.linkedin.com/in/sumitparmar-ai/" target="_blank" rel="noopener">
                <span>
                  <i className="lgo bi" id="hli"></i>
                </span>
              </a>
              <a className="btn gho ico" aria-label="GitHub" href="https://github.com/sumitparmartech" target="_blank" rel="noopener">
                <span>
                  <i className="lgo bi inv" id="hgh"></i>
                </span>
              </a>
              <a className="btn gho ico" aria-label="X" href="https://x.com/sumitparmar_ai" target="_blank" rel="noopener">
                <span>
                  <i className="lgo bi inv" id="hx"></i>
                </span>
              </a>
            </div>
            <div className="meta-row mono rv" style={{"--d": ".8s"} as React.CSSProperties}>
              <span>Product · Full stack · LLM systems · Agents · Infrastructure</span>
            </div>
          </div>
          <div className="hp" id="hp">
            <span className="orb">
              <i></i>
            </span>
            <span className="ring"></span>
            <img id="hpi" alt="Sumit Parmar" decoding="async" />
            <canvas id="hpc"></canvas>
          </div>
        </div>
      </div>
      <div className="scrollcue mono">
        <span>SCROLL</span>
        <i></i>
      </div>
    </section>
    </>
  );
}
