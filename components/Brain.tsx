export default function Brain() {
  return (
    <>
    <section className="sec eb" id="brain" data-hud="02|FEATURED">
      <div className="wrap">
        <div className="sh rv" data-node>
          <span className="lbl">
            <b>03</b>
            {" · Featured project"}
          </span>
          <span className="ln"></span>
          <span className="lbl ebst">
            <i></i>
            In progress
          </span>
        </div>
        <h2 className="sp">
          {"Enterprise "}
          <span className="o">Brain</span>
        </h2>
        <p className="eb-lede rv">
          {"A company brain that connects mail, tasks and code, and answers like "}
          <em>someone who was in every conversation.</em>
          {" Then agents act on it."}
        </p>
        <div className="eb-demo rv">
          <canvas id="brainc"></canvas>
          <div className="eb-live mono">
            <b></b>
            HOW IT WORKS · ANIMATED
          </div>
        </div>
        <div className="eb-tabs" id="ebtabs">
          <button className="ebt on" data-s="0">
            <span className="mono">01</span>
            <b>Connect</b>
            <small>Gmail, ClickUp, GitHub and more tools over time.</small>
            <i>
              <em></em>
            </i>
          </button>
          <button className="ebt" data-s="1">
            <span className="mono">02</span>
            <b>Remember</b>
            <small>Everything becomes searchable memory.</small>
            <i>
              <em></em>
            </i>
          </button>
          <button className="ebt" data-s="2">
            <span className="mono">03</span>
            <b>Connect the dots</b>
            <small>A task leads to its mail and the PR that shipped it.</small>
            <i>
              <em></em>
            </i>
          </button>
          <button className="ebt" data-s="3">
            <span className="mono">04</span>
            <b>Act</b>
            <small>Answers with sources. Agents move the work via MCP.</small>
            <i>
              <em></em>
            </i>
          </button>
        </div>
        <div className="eb-cap" id="ebcap" aria-live="polite"></div>
        <div className="eb-two">
          <div className="eb-why rv">
            <span className="lbl">Key decisions</span>
            {" "}
            <div className="wy">
              <b>HydraDB as the base</b>
              <p>Evaluated against pgvector for this workload.</p>
            </div>
            <div className="wy">
              <b>A graph only where it pays</b>
              <p>Owners, decisions and dependencies get structure. The rest stays in vector memory.</p>
            </div>
            <div className="wy">
              <b>Time and permissions travel with the data</b>
              <p>Answers respect who can see what, and when it was true.</p>
            </div>
            <div className="tags">
              <span className="tag">Python</span>
              <span className="tag">FastAPI</span>
              <span className="tag">HydraDB</span>
              <span className="tag">Knowledge graph</span>
              <span className="tag">MCP</span>
            </div>
            <button className="ob2" data-open="knowledge-layer">
              {"Open the full trace "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
        <div className="lp" id="loop">
          <div className="lp-hd rv">
            <span className="lbl ebst">
              <i></i>
              Also at work
            </span>
            {" "}
            <h3>
              {"Autonomous dev loop. "}
              <span>Agents that ship, not just suggest.</span>
            </h3>
            <p>A task comes in. The agent plans, writes the code, runs the tests, fixes what broke, opens the PR and takes it all the way to GitHub. Tests must pass, and human approval is a setting per repo.</p>
          </div>
          <div className="rl-demo lp-demo rv">
            <canvas data-fig="devloop"></canvas>
            <div className="eb-live mono">
              <b></b>
              ONE TASK, END TO END · ANIMATED
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
