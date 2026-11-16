export default function Sky() {
  return (
    <>
    <footer className="sky" id="sky" data-hud="10|THE END">
      <canvas id="skyc"></canvas>
      <div className="tip" id="tip"></div>
      <div className="skytop wrap">
        <span className="lbl">
          <b>09</b>
          {" · Night sky"}
        </span>
        <p className="skyq">
          {"Every constellation up here is something I have built. "}
          <span className="dim2" id="skyhint">Hover one to find out which.</span>
        </p>
      </div>
      <div className="skybar">
        <div className="wrap">
          <span>
            {"© "}
            <span id="yr"></span>
            {" Sumit Parmar"}
          </span>
          {" "}
          <span className="sbm">
            <i></i>
            {"Ahmedabad · "}
            <span id="ftime">--:--</span>
          </span>
          {" "}
          <span className="sbr">
            <a href="https://www.linkedin.com/in/sumitparmar-ai/" target="_blank" rel="noopener">LinkedIn</a>
            <a href="https://wa.me/918487027268?text=Hi%20Sumit%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect." target="_blank" rel="noopener">WhatsApp</a>
            <a href="https://x.com/sumitparmar_ai" target="_blank" rel="noopener">X</a>
            <a href="#top">Back to top</a>
            <a href="#" id="kfoot">Command menu</a>
          </span>
        </div>
      </div>
    </footer>
    </>
  );
}
