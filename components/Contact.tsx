export default function Contact() {
  return (
    <>
    <section className="sec" id="contact" data-hud="06|CONTACT">
      <div className="wrap">
        <div className="sh rv" data-node>
          <span className="lbl">
            <b>08</b>
            {" · Contact"}
          </span>
          <span className="ln"></span>
        </div>
        <div className="big-cta sp">Let's ship something real.</div>
        <div className="cgrid">
          <div className="term rv">
            <div className="tb">
              <i></i>
              <i></i>
              <i></i>
              <span className="mono">sumit@portfolio: ~ · interactive</span>
            </div>
            <pre id="tpre"></pre>
          </div>
          <div className="rv" style={{"--d": ".1s"} as React.CSSProperties}>
            <div className="clist" id="clist"></div>
            <div className="crs" id="crs"></div>
            <p className="avail">Open to conversations about production AI, retrieval and agent systems. WhatsApp is the fastest way to reach me.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
