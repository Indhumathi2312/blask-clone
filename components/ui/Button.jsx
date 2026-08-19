import Link from 'next/link';

export default function Button({
  href = 'https://calendly.com/blask-agency/discovery',
  text = 'Book an intro call',
  variant = 'main', // 'main' or 'small' or 'secondary'
  target = '_blank',
  className = '',
}) {
  const isExternal = href.startsWith('http');
  const Component = isExternal ? 'a' : Link;

  const arrowSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" fill="none">
      <path d="M3.33337 8.00016H12.6667M12.6667 8.00016L8.00004 3.3335M12.6667 8.00016L8.00004 12.6668" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  if (variant === 'small') {
    return (
      <Component
        href={href}
        target={target}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={`cta-small w-inline-block ${className}`}
      >
        <div className="button-text-mask button-2">
          <div className="button-text">{text}</div>
        </div>
        <div className="button-bg"></div>
      </Component>
    );
  }

  return (
    <Component
      href={href}
      target={target}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`cta-main w-inline-block ${variant === 'secondary' ? 'w-variant-c69fc54f-c8c7-ba16-cab1-d159723763a9' : ''} ${className}`}
    >
      <div className="button-text-mask">
        <div className={`button-text ${variant === 'secondary' ? 'w-variant-c69fc54f-c8c7-ba16-cab1-d159723763a9' : ''}`}>
          {text}
        </div>
      </div>
      <div className="button-icon-wrap right">
        <div className="icon-button w-embed">{arrowSvg}</div>
        <div className="icon-button w-embed">{arrowSvg}</div>
      </div>
      <div className={`button-bg ${variant === 'secondary' ? 'w-variant-c69fc54f-c8c7-ba16-cab1-d159723763a9' : ''}`}></div>
    </Component>
  );
}
