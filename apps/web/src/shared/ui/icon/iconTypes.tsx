import { FC, SVGProps } from "react"

export type GenericIconOptionsProps = {
  opacity?: 'faded'
}

export type GenericIconProps = {
  className?: string,
  options?: GenericIconOptionsProps
}

export type IconPropsOptions = GenericIconOptionsProps & {
  elementsColor?: {
    primaryColor?: string;
    secondaryColor?: string;
  };
  height?: string;
  size?: string;
  variant?: 'fill' | 'outlined';
  width?: string;
}

export type IconProps = {
  className?: string;
  options?: IconPropsOptions;
};

export type Icon = FC | FC<IconProps> | FC<SVGProps<SVGElement>>

