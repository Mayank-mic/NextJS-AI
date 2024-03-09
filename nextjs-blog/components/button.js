import Link from 'next/link';

const Button = ({ href, children, className }) => {
  return (
    <div className='{button ${className}}'>
    <Link href={href}>
      <button className={`button ${className}`}>{children}</button>
    </Link>
    </div>
  );
};

export default Button;