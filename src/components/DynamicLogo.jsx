export default function DynamicLogo({ width = 200, height = 200, className }) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 200 200" 
      className={`animate-float ${className}`}
    >
      <path 
        d="M100 20L40 180H160L100 20Z" 
        fill="#0066CC" 
        stroke="#FFD700" 
        strokeWidth="4"
      />
      <text 
        x="50%" 
        y="50%" 
        fontSize="24" 
        fill="#FFFFFF"
        fontFamily="Arial"
        textAnchor="middle"
      >
        AQUAZONE
        <tspan x="50%" dy="24" fontSize="16">WATERPARK</tspan>
      </text>
    </svg>
  );
}
