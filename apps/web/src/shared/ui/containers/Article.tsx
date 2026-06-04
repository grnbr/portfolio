import clsx from 'clsx';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';

import Container from '@/shared/ui/containers/Container';

import styles from './Container.module.scss';

type ArticleProps = PropsWithChildren<HTMLAttributes<HTMLElement>>;

const Article: FC<ArticleProps> = ({ children, className, ...props }) => {
  return (
    <Container
      as="article"
      className={clsx(styles.container, styles.article, className)}
      {...props}
    >
      {children}
    </Container>
  );
};

export default Article;
