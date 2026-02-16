import { FC, HTMLAttributes, PropsWithChildren } from 'react';

import styles from './Section.module.scss';

type SectionProps = HTMLAttributes<HTMLElement> & PropsWithChildren;

// TODO delete if not used
const Section: FC<SectionProps> = ({ children, ...props }) => {
  return <section {...props}>{children}</section>;
};

export default Section;
