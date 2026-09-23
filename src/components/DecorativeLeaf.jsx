export default function DecorativeLeaf({ className = "" }) {
  return (
    <svg className={`leaf-drawing ${className}`} viewBox="0 0 220 180" aria-hidden="true">
      <path d="M20 154C65 112 107 66 189 20" />
      <path d="M58 118C44 91 50 60 79 48C91 72 87 98 58 118Z" />
      <path d="M103 82C99 53 115 28 145 24C151 52 137 74 103 82Z" />
      <path d="M119 98C143 75 168 74 191 88C171 109 145 111 119 98Z" />
    </svg>
  );
}