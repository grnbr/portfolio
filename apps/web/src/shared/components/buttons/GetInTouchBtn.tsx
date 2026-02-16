import { FC } from 'react';

import ButtonLink, { ButtonLinkProps } from '@/shared/ui/button/ButtonLink';

type GetInTouchBtnProps = ButtonLinkProps;

const GetInTouchBtn: FC<GetInTouchBtnProps> = ({
  children,
  href,
  ...props
}) => {
  return (
    <ButtonLink href={href} {...props}>
      {children}
    </ButtonLink>
  );
};

export default GetInTouchBtn;
