export type Stat = { label: string; before: string; after: string };

export type Project = {
  slug: string;
  title: string;
  kind: string;
  tagline: string;
  emphasis: string;
  summary: string;
  status: string;
  year: string;
  role: string;
  stack: string[];
  links: { label: string; href: string; primary?: boolean }[];
  video: { src: string; poster: string; caption: string };
  statsLabel: string;
  stats: Stat[];
  gallery: { src: string; alt: string; caption: string }[];
  problem: string[];
  checks: [string, string][];
  pipeline: [string, string][];
  code: { label: string; text: string }[];
  realRun?: { label: string; rows: [string, string][]; note: string };
  decisions: [string, string][];
  limits: string[];
};

// Add a new project here, drop its assets in public/projects/<slug>/, and it appears on the
// home page and gets its own case study page at /work/<slug>/.
export const projects: Project[] = [
  {
    slug: 'evalloop',
    title: 'evalloop',
    kind: 'Open source · Agent evals',
    tagline: 'Tests for LLM agents that',
    emphasis: 'run every case more than once.',
    summary:
      'evalloop is a small open source toolkit I built for LLM agents. It records every model call and tool call, runs each case several times, checks the whole trace, and fails CI when behavior regresses.',
    status: 'Live',
    year: '2026',
    role: 'Designed and built end to end',
    stack: ['Python', 'Zero dependencies', 'pass@k and pass^k', 'GitHub Actions', 'Groq, OpenAI, Ollama'],
    links: [
      { label: 'Try the live demo', href: 'https://sumitparmartech.github.io/evalloop/', primary: true },
      { label: 'GitHub', href: 'https://github.com/sumitparmartech/evalloop' },
    ],
    video: {
      src: '/projects/evalloop/promo.mp4',
      poster: '/projects/evalloop/poster.jpg',
      caption: 'A 50 second walkthrough: run it five times, check every step, fix the agent, gate the merge.',
    },
    statsLabel: 'Demo support agent, simulated with planted bugs, 5 trials per case',
    stats: [
      { label: 'Pass rate', before: '33%', after: '100%' },
      { label: 'Reliability', before: '0%', after: '100%' },
      { label: 'p95 latency', before: '3.1s', after: '1.0s' },
      { label: 'Cost per run', before: '$0.0105', after: '$0.0026' },
    ],
    gallery: [
      {
        src: '/projects/evalloop/report-v1.png',
        alt: 'evalloop report for the first version of the support agent, showing 33 percent pass rate and the failing trace',
        caption: 'The report for v1: 33% pass rate, and the exact trial and step where it went wrong.',
      },
      {
        src: '/projects/evalloop/report-diff.png',
        alt: 'evalloop diff report showing zero regressed and six improved cases after the fix',
        caption: 'The diff after the fix: 0 regressed, 6 improved. This is what CI reads.',
      },
    ],
    problem: [
      'One green run proves very little for an LLM agent. The same case can pass once and fail the next time. A final answer can look right while the agent called the wrong tool, invented an amount, or followed an instruction hidden in a document.',
      'Most test setups check a single run and the last message. Behavior also changes after a prompt tweak or a model swap, and nobody notices until a user does.',
    ],
    checks: [
      ['Wrong tool, arguments or order', 'tool_called  tool_args  tool_order'],
      ['Hallucinated numbers', 'grounded()'],
      ['Prompt injection leaking a secret', 'no_secret_leak'],
      ['Loops and wasted steps', 'no_loop  max_steps'],
      ['Cost and latency creep', 'cost_under  latency_under'],
      ['Flaky behavior', 'pass^k reliability'],
    ],
    pipeline: [
      ['Trace', 'Every run records each model call, tool call and argument.'],
      ['Check', 'Checks run on the trace, not only on the final answer.'],
      ['Repeat', 'Each case runs k times with stable seeds.'],
      ['Diff', 'A run is compared against a saved baseline.'],
      ['Gate', 'CI exits with code 1 when any case got worse.'],
    ],
    code: [
      {
        label: 'Test your agent',
        text: `from evalloop import Case, run_suite, tool_args, grounded, no_loop

cases = [
    Case("refund_small", "Refund order #1042",
         [tool_args("issue_refund", order_id="1042"), grounded(), no_loop(2)]),
]
result = run_suite(my_agent, cases, trials=5)
print(result.pass_rate, result.reliability)`,
      },
      {
        label: 'Gate your pull requests',
        text: `evalloop run suite:cases --agent my_module:my_agent --trials 5 \\
  --baseline baseline.json --fail-on-regression --fail-under 0.95`,
      },
    ],
    realRun: {
      label: 'Real model run: Groq gpt-oss-120b, 3 trials per case',
      rows: [
        ['Pass rate', '94%'],
        ['Reliability (pass^3)', '83%'],
        ['Cases with a failed trial', '1 of 6'],
      ],
      note: 'The failing case skipped its knowledge base search in one of three trials. The final answer still sounded right, which is why a check on the trace caught it and a single run would not.',
    },
    decisions: [
      ['Trace first', 'Asserting on behavior needs the steps, so the tracer is the core and the checks are small functions over it.'],
      ['Zero dependencies', 'Standard library only. The report is a single HTML file with no JavaScript, safe to attach to a pull request.'],
      ['Reliability over accuracy', 'An agent that passes 80% of the time still looks fine on one run. Counting a case as reliable only when every trial passes shows what users feel.'],
      ['Keys never stored', 'In Python the key comes from an environment variable. In the browser demo it lives in memory only and goes only to the provider you chose.'],
    ],
    limits: [
      'The demo numbers come from a simulated agent with planted bugs. They show the method, not a benchmark.',
      'The real model run is one run on one free tier model. Results change between runs, so treat 94% and 83% as an example.',
      'Real models work through any OpenAI compatible endpoint. A native Anthropic adapter, parallel trials and an LLM judge check are on the roadmap.',
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
