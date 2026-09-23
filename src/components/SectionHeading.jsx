export default function SectionHeading({ eyebrow, title, children, light = false }) {
  return (
    <div className={`section-heading ${light ? "light" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}