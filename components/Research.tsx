export default function Research() {
  return (
    <>
    <section className="sec rl" id="rl" data-hud="04|RESEARCH">
      <div className="wrap">
        <div className="sh rv" data-node>
          <span className="lbl">
            <b>06</b>
            {" · Research"}
          </span>
          <span className="ln"></span>
          <span className="lbl ebst">
            <i></i>
            Building
          </span>
        </div>
        <h2 className="sp">
          {"Reinforcement learning "}
          <span className="o">for LLMs</span>
        </h2>
        <p className="eb-lede rv">
          {"Fine-tuning makes a model sound right. RL with "}
          <em>verifiable rewards</em>
          {" makes it be right. I build the environments where that can be proven."}
        </p>
        <div className="rl-demo rv">
          <canvas data-fig="grpo"></canvas>
          <div className="eb-live mono">
            <b></b>
            ONE TRAINING STEP · ANIMATED
          </div>
          <div className="rl-note mono">SIMULATED TO EXPLAIN THE METHOD · NOT RESULTS</div>
        </div>
        <div className="rl-steps">
          <div className="rv">
            <span className="mono">01</span>
            <b>Sample</b>
            <small>The policy writes a group of answers to one task.</small>
          </div>
          <div className="rv" style={{"--d": ".06s"} as React.CSSProperties}>
            <span className="mono">02</span>
            <b>Verify</b>
            <small>Hidden checks score each answer.</small>
          </div>
          <div className="rv" style={{"--d": ".12s"} as React.CSSProperties}>
            <span className="mono">03</span>
            <b>Compare</b>
            <small>Each answer is judged against its own group.</small>
          </div>
          <div className="rv" style={{"--d": ".18s"} as React.CSSProperties}>
            <span className="mono">04</span>
            <b>Update</b>
            <small>Better answers become more likely.</small>
          </div>
        </div>
        <details className="deep rv" id="deep">
          <summary>
            <span>Go deeper: the math, and what makes an environment trustworthy</span>
            <i></i>
          </summary>
          <div className="rl-math">
            <div>
              <span className="lbl">
                <b>A</b>
                {" · Group relative advantage"}
              </span>
              {" "}
              <div className="eq mono">
                A
                <sub>i</sub>
                {" = ( r"}
                <sub>i</sub>
                {" − mean(r"}
                <sub>1..G</sub>
                ) ) / std(r
                <sub>1..G</sub>
                )
              </div>
              <p>No separate value model. An answer is rewarded for beating its siblings on the same prompt, which keeps training stable and cheap.</p>
            </div>
            <div>
              <span className="lbl">
                <b>B</b>
                {" · Objective, kept close to the start"}
              </span>
              {" "}
              <div className="eq mono">
                max E[ A
                <sub>i</sub>
                {" · clip(ρ"}
                <sub>i</sub>
                ) ] − β · KL( π
                <sub>θ</sub>
                {" ‖ π"}
                <sub>ref</sub>
                {" )"}
              </div>
              <p>The KL term stops the policy drifting too far from the reference model while it chases reward.</p>
            </div>
          </div>
          <div className="eb-dec">
            <span className="lbl">
              <b>C</b>
              {" · What makes an environment trustworthy"}
            </span>
            {" "}
            <div className="dr">
              <div className="dg">
                <canvas data-fig="rl1"></canvas>
              </div>
              <div>
                <h4>Expert-written tasks</h4>
                <p>From people who know the domain, not scraped from text the model has already seen.</p>
              </div>
            </div>
            <div className="dr">
              <div className="dg">
                <canvas data-fig="rl2"></canvas>
              </div>
              <div>
                <h4>Hidden verifiers</h4>
                <p>Programmatic checks the model never sees. Reward comes from what is true.</p>
              </div>
            </div>
            <div className="dr">
              <div className="dg">
                <canvas data-fig="rl3"></canvas>
              </div>
              <div>
                <h4>A sealed benchmark</h4>
                <p>A held-out set that is never trained on. If the score moves there, it is real.</p>
              </div>
            </div>
            <div className="dr">
              <div className="dg">
                <canvas data-fig="rl4"></canvas>
              </div>
              <div>
                <h4>Reward hacking checks</h4>
                <p>Every environment is attacked on purpose before it is trusted.</p>
              </div>
            </div>
          </div>
        </details>
        <div className="eb-foot rv">
          <div className="tags">
            <span className="tag">GRPO</span>
            <span className="tag">PPO</span>
            <span className="tag">RLVR</span>
            <span className="tag">Reward design</span>
            <span className="tag">Verifiers</span>
            <span className="tag">PyTorch</span>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
