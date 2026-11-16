export default function Wire() {
  return (
    <>
    <svg className="wire" id="wire" aria-hidden="true">
      <defs>
        <linearGradient id="wg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--acc)" />
          <stop offset="1" stopColor="var(--acc)" />
        </linearGradient>
      </defs>
      <path className="bgp" id="wbg" />
      <path className="fgp" id="wfg" />
      <g id="wnodes"></g>
      <circle className="hd" id="whd" r="3.5" />
    </svg>
    </>
  );
}
