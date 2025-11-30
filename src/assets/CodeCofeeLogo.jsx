

const CodeCoffeeCircularNeon = () => (
  <svg
    width="180"
    height="180"
    viewBox="0 0 240 240"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* Clip path circular */}
      <clipPath id="circleClip">
        <circle cx="120" cy="120" r="120" />
      </clipPath>

      {/* Glow neon */}
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Fondo negro dentro del círculo */}
    <g clipPath="url(#circleClip)">
      <rect width="240" height="240" fill="black" />
    </g>

    {/* Círculo violeta neón externo */}
    <circle
      cx="120"
      cy="120"
      r="115"
      stroke="#7a00ff"
      strokeWidth="10"
      fill="none"
      filter="url(#glow)"
    />

    {/* Texto superior CODE */}
    <text
      x="120"
      y="60"
      textAnchor="middle"
      fontSize="30"
      fontWeight="bold"
      fill="#ff8800"
      filter="url(#glow)"
      style={{ fontFamily: "Arial" }}
    >
      CODE
    </text>

    {/* Texto inferior COFFEE */}
    <text
      x="120"
      y="205"
      textAnchor="middle"
      fontSize="30"
      fontWeight="bold"
      fill="#ff8800"
      filter="url(#glow)"
      style={{ fontFamily: "Arial" }}
    >
      COFFEE
    </text>

    {/* Flechas < > */}
    <path
      d="M70 120 L95 105 L95 135 Z"
      fill="#ff4400"
      filter="url(#glow)"
    />
    <path
      d="M170 120 L145 105 L145 135 Z"
      fill="#ff4400"
      filter="url(#glow)"
    />

    {/* Vapor azul neón */}
    <path
      d="M120 65 C108 80 108 100 120 110 
         C132 120 132 140 120 150"
      stroke="#00aaff"
      strokeWidth="5"
      fill="none"
      strokeLinecap="round"
      filter="url(#glow)"
    />

    <path
      d="M135 75 C130 82 130 95 135 105"
      stroke="#00aaff"
      strokeWidth="5"
      fill="none"
      strokeLinecap="round"
      filter="url(#glow)"
    />

    {/* Granos de café interior blanco/negro */}
    <ellipse
      cx="115"
      cy="160"
      rx="25"
      ry="32"
      fill="black"
      stroke="#ffb400"
      strokeWidth="4"
      filter="url(#glow)"
    />

    <ellipse
      cx="150"
      cy="165"
      rx="20"
      ry="27"
      fill="black"
      stroke="#ffb400"
      strokeWidth="4"
      filter="url(#glow)"
    />

    {/* Línea del grano */}
    <path
      d="M105 140 C118 160 118 185 105 205"
      stroke="#ffb400"
      strokeWidth="4"
      fill="none"
      filter="url(#glow)"
    />
  </svg>
);

export default CodeCoffeeCircularNeon;
