import { FC } from 'react';

import { NavigationMap } from '@/shared/dictionaries/constants/navigation';
import ButtonLink, { ButtonLinkProps } from '@/shared/ui/button/ButtonLink';
import Icon from '@/shared/ui/icon/Icon';
import SendIcon from '@/shared/ui/icon/icons/SendIcon';

type GetInTouchBtnProps = Omit<ButtonLinkProps, 'href'> & {
  hasIcon?: boolean;
  label: string;
};

const GetInTouchBtn: FC<GetInTouchBtnProps> = ({
  className,
  hasIcon = true,
  label,
  variant = 'primary',
  ...props
}) => {
  return (
    <ButtonLink
      {...props}
      className={className}
      href={NavigationMap.Contact.href}
      variant={variant}
    >
      {hasIcon && (
        <Icon>
          <SendIcon
            options={{
              elementsColor: { primaryColor: 'var(--white)' },
            }}
          />
        </Icon>
      )}
      {label}
    </ButtonLink>
  );
};

export default GetInTouchBtn;
