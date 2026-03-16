import {
  AppItemsId,
  DevTechItemsId,
  OsItemsId
} from '@/shared/dictionaries/constants/techItems';
import NextJSLogo from '@/shared/ui/icon/icons/tech-stack/NextJSLogo';
import { Icon } from '@/shared/ui/icon/iconTypes';

type TechStackIcons = {
  apps?: Partial<Record<AppItemsId, Icon>>;
  dev?: Partial<Record<DevTechItemsId, Icon>>;
  os?: Partial<Record<OsItemsId, Icon>>;
};

export const TECH_STACK_TSX_ICONS: TechStackIcons = {
  dev: {
    nextjs: NextJSLogo,
  },
} as const;
