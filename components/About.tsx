export default function About() {
  return (
    <>
    <section className="sec" id="about" data-hud="01|ABOUT">
      <div className="wrap">
        <div className="sh rv" data-node>
          <span className="lbl">
            <b>01</b>
            {" · About me"}
          </span>
          <span className="ln"></span>
        </div>
        <h2 className="sp">
          {"Hi, I'm "}
          <span className="o">Sumit.</span>
        </h2>
        <p className="abp rv">AI engineer at Pucho.ai, and in the final year of an Integrated Master's in AI and ML. I work directly with clients, turn what they need into product designs, and build the systems behind them, from the first prompt to the server it runs on. I also guide the junior engineers on our team.</p>
        <div className="prin">
          <div className="pc rv">
            <div className="k">P/01</div>
            <h4>Smart is easy. Reliable is engineering.</h4>
            <p>Getting a model to answer is one prompt. Getting it right every time, in production, is the real work.</p>
          </div>
          <div className="pc rv" style={{"--d": ".1s"} as React.CSSProperties}>
            <div className="k">P/02</div>
            <h4>Every token is a cost decision.</h4>
            <p>The right model per task, on quality, latency and price, with routing kept explicit.</p>
          </div>
          <div className="pc rv" style={{"--d": ".2s"} as React.CSSProperties}>
            <div className="k">P/03</div>
            <h4>AI breaks silently.</h4>
            <p>Wrong routing, wrong prompt roles, wrong date logic. You only catch it if you look.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
