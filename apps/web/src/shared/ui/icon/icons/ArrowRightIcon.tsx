import { FC } from 'react';

import { IconProps } from '@/shared/ui/icon/Icon';

type ArrowRightIconProps = IconProps;

const ArrowRightIcon: FC<ArrowRightIconProps> = ({ className, options }) => {
  const { elementsColor } = options ?? {};
  const { primaryColor } = elementsColor ?? {};

  return (
    <svg
      className={className}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.1696 5C17.273 6.55556 19.1622 8.37278 20.7905 10.4057C20.9302 10.5801 21 10.79 21 11M15.1696 17C17.273 15.4444 19.1622 13.6272 20.7905 11.5943C20.9302 11.4199 21 11.21 21 11M21 11H3"
        stroke={primaryColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

export default ArrowRightIcon;
