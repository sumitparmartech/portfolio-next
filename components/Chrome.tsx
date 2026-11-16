export default function Chrome() {
  return (
    <>
    <div className="boot" id="intro">
      <canvas id="introc"></canvas>
      <div className="ibar">
        <b id="ibar"></b>
      </div>
    </div>
    <div id="cur">
      <b></b>
      <i></i>
      <span id="curl">OPEN</span>
    </div>
    <div className="prog" id="prog"></div>
    <header className="bar" id="bar">
      <div className="wrap">
        <a href="#top" className="mark" data-mag>
          <i>
            <em>SP</em>
          </i>
          <span>Sumit Parmar</span>
        </a>
        <nav className="tabs" id="tabs">
          <a href="#about">About</a>
          <a href="#what">What I do</a>
          <a href="#brain">Featured</a>
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#rl">Research</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="mid mono" id="clock">
          <b></b>
          <span>Ahmedabad, IN</span>
          <span id="time">--:--</span>
        </div>
        <div className="tools">
          <a className="ib" id="tlink" href="https://www.linkedin.com/in/sumitparmar-ai/" target="_blank" rel="noopener" aria-label="LinkedIn profile">
            <i className="lgo" id="tli"></i>
          </a>
          <button className="ib kb mono" id="kbtn" aria-label="Open command menu">
            <span id="kkey">⌘K</span>
          </button>
          <button className="ib" id="theme" aria-label="Toggle theme">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path id="tico" d="" />
            </svg>
          </button>
          <button className="ib menub" id="menub" aria-label="Open menu">
            <span className="t" id="mt">Menu</span>
            <span className="ln">
              <i></i>
              <i></i>
            </span>
          </button>
        </div>
      </div>
    </header>
    <div className="menu" id="menu">
      <div className="wrap">
        <div>
          <nav id="mnav"></nav>
          <div className="mf">
            <a href="https://www.linkedin.com/in/sumitparmar-ai/" target="_blank" rel="noopener">LinkedIn</a>
            <a href="https://wa.me/918487027268?text=Hi%20Sumit%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect." target="_blank" rel="noopener">WhatsApp</a>
            <a href="https://x.com/sumitparmar_ai" target="_blank" rel="noopener">X</a>
            <a href="#" id="mpal">Command menu</a>
            <a href="#contact" data-close>Contact</a>
          </div>
        </div>
        <aside>
          <span className="lbl">Now</span>
          <p>Building agent loops and the Enterprise Brain at Pucho.ai.</p>
          <span className="lbl">Based in</span>
          <p>Ahmedabad, India</p>
          <span className="lbl">Focus</span>
          <p>Agent harnesses, context engineering, autonomous dev loops, evals and RL</p>
        </aside>
      </div>
    </div>
    <div className="tint" id="tint"></div>
    <canvas id="ffc" aria-hidden="true"></canvas>
    <div className="rails" aria-hidden="true"></div>
    </>
  );
}
