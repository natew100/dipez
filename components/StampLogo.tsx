"use client";

export default function StampLogo({ size = "large" }: { size?: "large" | "small" }) {
  const dimensions = size === "large" ? "w-56 h-56 md:w-72 md:h-72" : "w-20 h-20";

  return (
    <div className={`${dimensions} relative`}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        style={{ filter: "url(#stamp-rough)" }}
      >
        <defs>
          <filter id="stamp-rough">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.035"
              numOctaves="5"
              seed="2"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="1.2"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>

        {/* Outer circle — thick, slightly rough */}
        <circle
          cx="100"
          cy="100"
          r="92"
          fill="none"
          stroke="#3D5A3A"
          strokeWidth="3.5"
          opacity="0.85"
        />

        {/* Inner circle — thinner */}
        <circle
          cx="100"
          cy="100"
          r="84"
          fill="none"
          stroke="#3D5A3A"
          strokeWidth="1.5"
          opacity="0.4"
        />

        {/* Top curved text — SNACKING MADE EASY */}
        <path
          id="topArc"
          d="M 28,100 A 72,72 0 0,1 172,100"
          fill="none"
        />
        <text
          fill="#3D5A3A"
          fontSize="8.5"
          fontFamily="var(--font-dm-sans), sans-serif"
          fontWeight="600"
          letterSpacing="3.5"
          opacity="0.85"
        >
          <textPath
            href="#topArc"
            startOffset="50%"
            textAnchor="middle"
          >
            SNACKING MADE EASY
          </textPath>
        </text>

        {/* Center text — DipEZ */}
        <text
          x="100"
          y="110"
          textAnchor="middle"
          fill="#3D5A3A"
          fontSize="42"
          fontFamily="var(--font-playfair), serif"
          fontWeight="700"
          letterSpacing="-0.5"
        >
          DipEZ
        </text>

        {/* Decorative lines flanking bottom text */}
        <line
          x1="42" y1="130" x2="70" y2="130"
          stroke="#3D5A3A" strokeWidth="1.5" opacity="0.6"
        />
        <line
          x1="130" y1="130" x2="158" y2="130"
          stroke="#3D5A3A" strokeWidth="1.5" opacity="0.6"
        />

        {/* Small diamond accents */}
        <rect
          x="38" y="128.5" width="3" height="3"
          fill="#3D5A3A" transform="rotate(45 39.5 130)" opacity="0.5"
        />
        <rect
          x="159" y="128.5" width="3" height="3"
          fill="#3D5A3A" transform="rotate(45 160.5 130)" opacity="0.5"
        />

        {/* Bottom curved text — DIP + CHIP DUOS */}
        <path
          id="bottomArc"
          d="M 32,118 A 70,70 0 0,0 168,118"
          fill="none"
        />
        <text
          fill="#3D5A3A"
          fontSize="8"
          fontFamily="var(--font-dm-sans), sans-serif"
          fontWeight="600"
          letterSpacing="3"
          opacity="0.85"
        >
          <textPath
            href="#bottomArc"
            startOffset="50%"
            textAnchor="middle"
          >
            DIP + CHIP DUOS
          </textPath>
        </text>
      </svg>
    </div>
  );
}
