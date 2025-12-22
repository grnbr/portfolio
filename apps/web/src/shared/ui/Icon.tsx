import { FC } from 'react';

import styles from './Icon.module.scss';

export type IconProps = {
  className?: string;
  options?: {
    elementsColor?: {
      fill?: string;
      stroke?: string;
    };
    height?: string;
    size?: string;
    width?: string;
  };
};

const Icon: FC<IconProps> = () => {
  return <div>first</div>;
};

export default Icon;
