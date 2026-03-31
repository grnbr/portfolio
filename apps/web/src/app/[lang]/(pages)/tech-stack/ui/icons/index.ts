import {
  AppItemsId,
  DevTechItemsId,
  OsItemsId,
} from '@/shared/dictionaries/constants/techItems';
import NextJSLogo from '@/shared/ui/icon/icons/tech-stack/NextJSLogo';
import { IconComponent } from '@/shared/ui/icon/iconTypes';

type TechStackIcons = {
  apps?: Partial<Record<AppItemsId, IconComponent>>;
  dev?: Partial<Record<DevTechItemsId, IconComponent>>;
  os?: Partial<Record<OsItemsId, IconComponent>>;
};

export const TECH_STACK_TSX_ICONS: TechStackIcons = {
  dev: {
    nextjs: NextJSLogo,
  },
} as const;
