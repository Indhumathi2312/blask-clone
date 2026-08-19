export default function Tag({ text, variant = 'base', className = '' }) {
  return (
    <div
      data-wf--tag--variant={variant}
      className={`label-master ${variant === 'depth' ? 'w-variant-3dcbab84-0b89-15c0-0305-ed72757207a9' : ''} ${className}`}
    >
      <div className="label-small">{text}</div>
    </div>
  );
}
