import { motion } from 'motion/react';
import { FC } from 'react';

import { IconProps } from '@/shared/ui/icon/Icon';

type UserIconProps = IconProps;

const UserIcon: FC<UserIconProps> = ({ options }) => {
  const { primaryColor = 'black', secondaryColor = 'black' } =
    options?.elementsColor ?? {};
  const isFilled = options?.variant === 'fill';

  return (
    <motion.svg
      fill="none"
      height="24"
      initial={false}
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* FILLED PATH */}
      <motion.path
        animate={{
          opacity: isFilled ? 1 : 0,
          scale: isFilled ? 1 : 0.92,
        }}
        clipRule="evenodd"
        d="M7.5001 6C7.5001 4.80653 7.9742 3.66193 8.81812 2.81802C9.66203 1.97411 10.8066 1.5 12.0001 1.5C13.1936 1.5 14.3382 1.97411 15.1821 2.81802C16.026 3.66193 16.5001 4.80653 16.5001 6C16.5001 7.19347 16.026 8.33807 15.1821 9.18198C14.3382 10.0259 13.1936 10.5 12.0001 10.5C10.8066 10.5 9.66203 10.0259 8.81812 9.18198C7.9742 8.33807 7.5001 7.19347 7.5001 6ZM3.7511 20.105C3.78482 17.9395 4.66874 15.8741 6.21206 14.3546C7.75538 12.8351 9.83431 11.9834 12.0001 11.9834C14.1659 11.9834 16.2448 12.8351 17.7881 14.3546C19.3315 15.8741 20.2154 17.9395 20.2491 20.105C20.2517 20.2508 20.2117 20.3942 20.1341 20.5176C20.0565 20.641 19.9446 20.7392 19.8121 20.8C17.3613 21.9237 14.6963 22.5037 12.0001 22.5C9.2141 22.5 6.5671 21.892 4.1881 20.8C4.05558 20.7392 3.94367 20.641 3.86606 20.5176C3.78844 20.3942 3.74849 20.2508 3.7511 20.105Z"
        fill={primaryColor}
        fillRule="evenodd"
        initial={false}
        transition={{
          damping: 32,
          stiffness: 450,
          type: 'spring',
        }}
      />

      {/* OUTLINE PATH */}
      <motion.path
        animate={{ opacity: isFilled ? 0 : 1 }}
        d="M15.75 6C15.75 6.99456 15.3549 7.94839 14.6516 8.65165C13.9484 9.35491 12.9945 9.75 12 9.75C11.0054 9.75 10.0516 9.35491 9.34833 8.65165C8.64506 7.94839 8.24998 6.99456 8.24998 6C8.24998 5.00544 8.64506 4.05161 9.34833 3.34835C10.0516 2.64509 11.0054 2.25 12 2.25C12.9945 2.25 13.9484 2.64509 14.6516 3.34835C15.3549 4.05161 15.75 5.00544 15.75 6ZM4.50098 20.118C4.53311 18.1504 5.33731 16.2742 6.74015 14.894C8.14299 13.5139 10.0321 12.7405 12 12.7405C13.9679 12.7405 15.857 13.5139 17.2598 14.894C18.6626 16.2742 19.4668 18.1504 19.499 20.118C17.1464 21.1968 14.5881 21.7535 12 21.75C9.32398 21.75 6.78398 21.166 4.50098 20.118Z"
        initial={false}
        stroke={secondaryColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        transition={{ duration: 0.15 }}
      />
    </motion.svg>
  );
};

export default UserIcon;
