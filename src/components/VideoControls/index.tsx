// https://transform.tools/
// Source -> https://dryicons.com/free-icons/video-player

interface VideoControlProps {
  className?: string
  fill?: string
}

const DEFAULT_SVG_CLASS = "w-3 h-3"
const DEFAULT_SVG_FILL = "#ffff"

export function Pause({ className = DEFAULT_SVG_CLASS, fill = DEFAULT_SVG_FILL }: VideoControlProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}

    >
      <path
        d="M395 512a73.14 73.14 0 01-73.14-73.14V73.14a73.14 73.14 0 11146.29 0v365.72A73.14 73.14 0 01395 512zM117 512a73.14 73.14 0 01-73.14-73.14V73.14a73.14 73.14 0 11146.29 0v365.72A73.14 73.14 0 01117 512z"
        fill={fill}
      />
    </svg >
  )
}

export function Play({ className = DEFAULT_SVG_CLASS, fill = DEFAULT_SVG_FILL }: VideoControlProps) {
  return (
    <svg
      className={className}
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        d="M60.54 512c-17.06 0-30.43-13.86-30.43-31.56V31.55C30.12 13.86 43.48 0 60.55 0A32.94 32.94 0 0177 4.52L465.7 229c10.13 5.85 16.18 16 16.18 27s-6 21.2-16.18 27L77 507.48A32.92 32.92 0 0160.55 512z"
        fill={fill}
      />
    </svg>
  )
}

export function Backward({ className = DEFAULT_SVG_CLASS, fill = DEFAULT_SVG_FILL }: VideoControlProps) {
  return (
    <svg
      className={className}
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        d="M481.76 510.43c17 0 30.24-13.78 30.24-31.36V32.93c0-17.58-13.28-31.36-30.25-31.36a32.73 32.73 0 00-16.3 4.49L128.61 229.12c-10.07 5.81-16.08 15.88-16.08 26.88s6 21.07 16.08 26.87l336.84 223.07a32.72 32.72 0 0016.3 4.49z"
        fill={fill}
      />
      <path
        d="M61.94 499.51a61.94 61.94 0 0061.94-61.93V74.42A61.94 61.94 0 000 74.42v363.16a61.94 61.94 0 0061.94 61.93z"
        fill={fill}
      />
    </svg>
  )
}

export function Forward({ className = DEFAULT_SVG_CLASS, fill = DEFAULT_SVG_FILL }: VideoControlProps) {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
    >
      <path
        d="M30.24 510.43c-17 0-30.24-13.78-30.24-31.36V32.93C0 15.35 13.28 1.57 30.25 1.57a32.73 32.73 0 0116.3 4.49l336.84 223.06c10.07 5.81 16.08 15.86 16.08 26.88s-6 21.07-16.08 26.87L46.55 505.94a32.72 32.72 0 01-16.3 4.49z"
        fill={fill}
      />
      <path
        d="M450.06 499.51a61.94 61.94 0 01-61.94-61.93V74.42a61.94 61.94 0 01123.88 0v363.16a61.94 61.94 0 01-61.94 61.93z"
        fill={fill}
      />
    </svg>
  )
}