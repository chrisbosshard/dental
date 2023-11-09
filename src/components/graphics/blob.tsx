// IMPORT COMPONENTS
import clsx from "clsx";

type Props = {
  className?: string;
  colorStart?: string;
  colorEnd?: string;
};

export const Blob = (props: Props) => {
  // PROPS

  const className = props.className || "";
  const colorStart = props.colorStart || "#fef9c3";
  const colorEnd = props.colorEnd || "#fef08a";
  const cls = clsx(className);

  return (
    <svg
      viewBox="0 0 500 500"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      id="blobSvg"
      className={className}
    >
      <g>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: colorStart }}></stop>
            <stop offset="100%" style={{ stopColor: colorEnd }}></stop>
          </linearGradient>
        </defs>
        <path className="blob" fill="url(#gradient)">
          <animate
            attributeName="d"
            dur="20000ms"
            repeatCount="indefinite"
            values="M423,297.5Q380,345,345,390Q310,435,248.5,439.5Q187,444,125.5,414.5Q64,385,38.5,317.5Q13,250,47,189Q81,128,132,86.5Q183,45,241.5,71Q300,97,365,108Q430,119,448,184.5Q466,250,423,297.5Z;
      M435.5,306.5Q405,363,363,415.5Q321,468,248.5,472.5Q176,477,142.5,415Q109,353,55.5,301.5Q2,250,51.5,196Q101,142,150.5,119.5Q200,97,260,65Q320,33,370,79.5Q420,126,443,188Q466,250,435.5,306.5Z;
      M448,304.5Q400,359,351.5,385.5Q303,412,250,413Q197,414,133.5,397.5Q70,381,49,315.5Q28,250,60.5,193Q93,136,137,87Q181,38,245,53Q309,68,376,89Q443,110,469.5,180Q496,250,448,304.5Z;
      M423,297.5Q380,345,345,390Q310,435,248.5,439.5Q187,444,125.5,414.5Q64,385,38.5,317.5Q13,250,47,189Q81,128,132,86.5Q183,45,241.5,71Q300,97,365,108Q430,119,448,184.5Q466,250,423,297.5Z"
          ></animate>
        </path>
      </g>
    </svg>
  );
};
