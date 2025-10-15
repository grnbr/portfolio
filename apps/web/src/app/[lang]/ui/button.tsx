import React from "react";
import Link, { LinkProps } from "next/link";
interface CommonProps {
  children: React.ReactNode;
  variant?: string;
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & CommonProps;
type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps &
  CommonProps;

export const Button = ({
  children,
  variant = "primary-btn",
  ...rest
}: ButtonProps) => {
  let className;

  switch (variant) {
    case "primary":
      className = "primary-btn";
      break;

    case "secondary":
      className = "secondary-btn";
      break;

    case "text":
      className = "text-btn";
      break;

    default:
      className = "primary-btn";
      break;
  }

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

export const ButtonLink = ({
  children,
  variant = "primary-btn",
  href,
  ...rest
}: ButtonLinkProps) => {
  let className;

  switch (variant) {
    case "primary":
      className = "primary-btn";
      break;

    case "secondary":
      className = "secondary-btn";
      break;

    case "text":
      className = "text-btn";
      break;

    default:
      className = "primary-btn";
      break;
  }

  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
};
