import { useId, SVGProps, CSSProperties } from "react";

export const SmileyColor = [
  "cyan",
  "green",
  "pink",
  "purple",
  "yellow",
] as const;
type SmileyColor = (typeof SmileyColor)[number];

export const SmileyDirection = ["up", "straight", "down"] as const;
type SmileyDirection = (typeof SmileyDirection)[number];

const transformProps: Record<
  SmileyDirection,
  {
    leftEye: SVGProps<SVGEllipseElement>;
    rightEye: SVGProps<SVGEllipseElement>;
    mouth: SVGProps<SVGPathElement>;
    gradient: SVGProps<SVGRadialGradientElement>;
  }
> = {
  up: {
    leftEye: {
      cx: "153",
      cy: "153.5",
      transform: "rotate(-30.5254 153 153.5)",
    },
    rightEye: {
      cx: "279.472",
      cy: "114.564",
      transform: "rotate(-30 279.472 114.564)",
    },
    mouth: {
      d: "M152 252.5C152 252.5 217.5 293.5 288 262.5C358.5 231.5 353.5 178.5 353.5 178.5",
    },
    gradient: {
      gradientTransform: "translate(242 151) rotate(116.565) scale(298.515)",
    },
  },
  straight: {
    leftEye: {
      cx: "192.36",
      cy: "155.5",
      transform: "rotate(-3.50362 192.36 155.5)",
    },
    rightEye: {
      cx: "312.72",
      cy: "153.435",
      transform: "rotate(-3.50362 312.72 153.435)",
    },
    mouth: {
      d: "M152 252.5C152 252.5 183.5 313.5 253 313.5C322.5 313.5 358 252.5 358 252.5",
    },
    gradient: {
      gradientTransform: "translate(273 209) rotate(170.947) scale(276.444)",
    },
  },
  down: {
    leftEye: {
      cx: "196.215",
      cy: "264.009",
      transform: "rotate(15 196.215 264.009)",
    },
    rightEye: {
      cx: "311.541",
      cy: "259.933",
      transform: "rotate(13.469 311.541 259.933)",
    },
    mouth: {
      d: "M323.5 349C323.5 349 266.5 401.5 194.5 384.5C122.5 367.5 114.5 316 114.5 316",
    },
    gradient: {
      gradientTransform: "translate(252 315.5) rotate(-115.925) scale(320.225)",
    },
  },
};

const gradients: Record<SmileyColor, { start: string; stop: string }> = {
  cyan: { start: "#A9FFB3", stop: "#00E5D1" },
  green: { start: "#CEFFA9", stop: "#03FF00" },
  pink: { start: "#FF9BCD", stop: "#FF3399" },
  purple: { start: "#FF7CFB", stop: "#915EFF" },
  yellow: { start: "#FCF9A6", stop: "#FFF733" },
};

export default function Smiley({
  color,
  direction = "straight",
  right = true,
  className = "",
  style = {},
}: {
  color: SmileyColor;
  direction?: SmileyDirection;
  right?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  const props = transformProps[direction];
  const gradient = gradients[color];
  const id = useId();

  return (
    <svg
      className={className}
      style={style}
      width="418"
      height="418"
      viewBox="0 0 418 418"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={right ? "" : "scale(-1,1)"}
    >
      <defs>
        <radialGradient
          id={id}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          {...props.gradient}
        >
          <stop stopColor={gradient.start} />
          <stop offset="1" stopColor={gradient.stop} />
        </radialGradient>
      </defs>

      <circle
        cx="209"
        cy="209"
        r="207"
        fill="#FF3399"
        stroke="black"
        strokeWidth="4"
      />
      <circle
        cx="209"
        cy="209"
        r="207"
        fill={`url(#${id})`}
        stroke="black"
        strokeWidth="4"
      />
      <ellipse {...props.leftEye} rx="17" ry="55.5" fill="#1D1D1D" />
      <ellipse {...props.rightEye} rx="17" ry="55.5" fill="#1D1D1D" />
      <path {...props.mouth} stroke="#1D1D1D" strokeWidth="5" />
    </svg>
  );
}
