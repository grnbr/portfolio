import { FC, SVGProps } from 'react';

export type GenericIconOptionsProps = {
  opacity?: 'faded';
};

export type GenericIconProps = {
  className?: string;
  options?: GenericIconOptionsProps;
};

export type IconPropsOptions = GenericIconOptionsProps & {
  elementsColor?: {
    primaryColor?: false | string;
    secondaryColor?: false | string;
  };
  height?: string;
  isInvertedDefaultColor?: boolean;
  size?: number;
  variant?: 'fill' | 'outlined';
  width?: string;
};

export type IconProps = {
  className?: string;
  options?: IconPropsOptions;
};

export type IconComponent = FC | FC<IconProps> | FC<SVGProps<SVGElement>>;
