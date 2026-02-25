import clsx from 'clsx';
import Link from 'next/link';
import { FC, HTMLAttributes } from 'react';

import type { ParagraphWithLinks as ParagraphWithLinksType } from '@/shared/types';

import styles from './ParagraphWithLinks.module.scss';

type ParagraphWithLinksProps = HTMLAttributes<HTMLElement> & {
  linkClassName?: string;
  paragraph: ParagraphWithLinksType;
};

const ParagraphWithLinks: FC<ParagraphWithLinksProps> = ({
  className,
  linkClassName,
  paragraph,
}) => {
  const innerHTML = Object.entries(paragraph.links).reduce<React.ReactNode[]>(
    (acc, [label, { href }]) => {
      return acc.flatMap((part) => {
        if (typeof part !== 'string') return part;

        const pieces = part.split(label);

        return pieces.flatMap((piece, index) => {
          if (index === pieces.length - 1) return piece;

          return [
            piece,
            <Link
              className={clsx(styles.link, linkClassName)}
              href={href}
              key={`${label}-${index}`}
              target="_blank"
            >
              {label}
            </Link>,
          ];
        });
      });
    },
    [paragraph.text],
  );

  return <p className={clsx(styles.paragraph, className)}>{innerHTML}</p>;
};

export default ParagraphWithLinks;
