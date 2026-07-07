import { Link } from 'react-router-dom';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'outline' | 'mint';

interface BaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

const variantClass: Record<Variant, string> = {
  primary: 'btn-primary',
  outline: 'btn-outline',
  mint: 'btn-mint',
};

interface ButtonAsButton
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  to?: undefined;
}

interface ButtonAsLink extends BaseProps {
  to: string;
  'aria-label'?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    children,
    className = '',
    icon,
    iconPosition = 'left',
  } = props;
  const classes = `${variantClass[variant]} ${className}`;
  const content = (
    <>
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </>
  );

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes} aria-label={props['aria-label']}>
        {content}
      </Link>
    );
  }

  const { variant: _v, icon: _i, iconPosition: _ip, className: _c, to: _t, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
