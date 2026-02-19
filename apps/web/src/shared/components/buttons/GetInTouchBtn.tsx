import { FC } from 'react';

import { Navigation } from '@/shared/constants/navigation';
import ButtonLink, { ButtonLinkProps } from '@/shared/ui/button/ButtonLink';
import Icon from '@/shared/ui/icon/Icon';
import SendIcon from '@/shared/ui/icon/icons/SendIcon';

type GetInTouchBtnProps = Omit<ButtonLinkProps, 'href'> & {
  hasIcon?: boolean;
  label: string;
};

const GetInTouchBtn: FC<GetInTouchBtnProps> = ({
  hasIcon,
  label,
  variant = 'primary',
  ...props
}) => {
  return (
    <ButtonLink {...props} href={Navigation.Contact.href} variant={variant}>
      {hasIcon && (
        <Icon
          options={{
            elementsColor: { primaryColor: 'var(--white)' },
          }}
        >
          <SendIcon />
        </Icon>
      )}
      {label}
    </ButtonLink>
  );
};

export default GetInTouchBtn;
