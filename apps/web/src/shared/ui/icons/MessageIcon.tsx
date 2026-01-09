import { motion } from 'motion/react';
import { FC } from 'react';

import { IconProps } from '@/shared/ui/Icon';

type MessageIconProps = IconProps;

const MessageIcon: FC<MessageIconProps> = ({ options }) => {
  const { elementsColor, variant = 'outlined' } = options ?? {};
  const isFilled = variant === 'fill';
  const { primaryColor, secondaryColor } = elementsColor ?? {};

  return (
    <motion.svg
      fill="none"
      height="24"
      initial={false}
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* FILLED ICON */}
      <motion.g
        animate={{
          opacity: isFilled ? 1 : 0,
          scale: isFilled ? 1 : 0.92,
        }}
        transition={{
          damping: 32,
          stiffness: 450,
          type: 'spring',
        }}
      >
        <path
          d="M1.5 8.67004V17.25C1.5 18.0457 1.81607 18.8088 2.37868 19.3714C2.94129 19.934 3.70435 20.25 4.5 20.25H19.5C20.2956 20.25 21.0587 19.934 21.6213 19.3714C22.1839 18.8088 22.5 18.0457 22.5 17.25V8.67004L13.572 14.163C13.0992 14.4539 12.5551 14.6079 12 14.6079C11.4449 14.6079 10.9008 14.4539 10.428 14.163L1.5 8.67004Z"
          fill={primaryColor}
        />
        <path
          d="M22.5 6.908V6.75C22.5 5.95435 22.1839 5.19129 21.6213 4.62868C21.0587 4.06607 20.2956 3.75 19.5 3.75H4.5C3.70435 3.75 2.94129 4.06607 2.37868 4.62868C1.81607 5.19129 1.5 5.95435 1.5 6.75V6.908L11.214 12.886C11.4504 13.0314 11.7225 13.1084 12 13.1084C12.2775 13.1084 12.5496 13.0314 12.786 12.886L22.5 6.908Z"
          fill={primaryColor}
        />
      </motion.g>

      {/* OUTLINE ICON */}
      <motion.path
        animate={{ opacity: isFilled ? 0 : 1 }}
        d="M21.75 6.75V17.25C21.75 17.8467 21.5129 18.419 21.091 18.841C20.669 19.2629 20.0967 19.5 19.5 19.5H4.5C3.90326 19.5 3.33097 19.2629 2.90901 18.841C2.48705 18.419 2.25 17.8467 2.25 17.25V6.75M21.75 6.75C21.75 6.15326 21.5129 5.58097 21.091 5.15901C20.669 4.73705 20.0967 4.5 19.5 4.5H4.5C3.90326 4.5 3.33097 4.73705 2.90901 5.15901C2.48705 5.58097 2.25 6.15326 2.25 6.75M21.75 6.75V6.993C21.75 7.37715 21.6517 7.75491 21.4644 8.0903C21.2771 8.42569 21.0071 8.70754 20.68 8.909L13.18 13.524C12.8252 13.7425 12.4167 13.8582 12 13.8582C11.5833 13.8582 11.1748 13.7425 10.82 13.524L3.32 8.91C2.99292 8.70854 2.72287 8.42669 2.53557 8.0913C2.34827 7.75591 2.24996 7.37815 2.25 6.994V6.75"
        stroke={secondaryColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        transition={{ duration: 0.15 }}
      />
    </motion.svg>
  );
};

export default MessageIcon;
