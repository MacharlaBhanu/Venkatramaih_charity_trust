interface DecoProps {
  className?: string;
  flip?: boolean;
}

export function LeafBranch({ className = '', flip = false }: DecoProps) {
  return (
    <svg
      viewBox="0 0 200 300"
      fill="none"
      className={className}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      aria-hidden="true"
    >
      <path
        d="M40 300C40 200 60 120 120 60"
        stroke="#9DE6D0"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      {[...Array(7)].map((_, i) => {
        const t = i / 6;
        const x = 40 + t * 80;
        const y = 300 - t * 240;
        return (
          <g key={i} opacity={0.45}>
            <path
              d={`M${x} ${y} q -30 -12 -45 -35 q 30 -3 45 35Z`}
              fill="#9DE6D0"
            />
            <path
              d={`M${x} ${y} q 30 -12 45 -35 q -30 -3 -45 35Z`}
              fill="#6BCDB6"
            />
          </g>
        );
      })}
    </svg>
  );
}
