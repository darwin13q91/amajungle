type LeafProps = {
  className?: string;
  color?: string;
  style?: React.CSSProperties;
  rx?: number;
  ry?: number;
};

const LeafDecor = ({
  className = "",
  color = "#146eb4",
  style = {},
  rx = 32,
  ry = 16,
}: LeafProps) => (
  <svg
    className={`section-leaf ${className}`}
    viewBox="0 0 64 64"
    fill="none"
    style={style}
  >
    <ellipse cx="32" cy="32" rx={rx} ry={ry} fill={color} />
  </svg>
);

export default LeafDecor;