import { FC } from 'react';

import { IconProps } from '../iconTypes';
import useIconColor from '../useIconColor';

type ChevronDownIconProps = IconProps;

const ChevronDownIcon: FC<ChevronDownIconProps> = ({ options }) => {
  const { size = 24 } = options ?? {};
  const { primaryColor } = useIconColor();

  return (
    <svg
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 10.1393C9.06206 11.6012 10.3071 12.9106 11.7021 14.0335C11.8774 14.1745 12.1226 14.1745 12.2979 14.0335C13.6929 12.9106 14.9379 11.6012 16 10.1393"
        stroke={primaryColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

export default ChevronDownIcon;
