import {
  AppItemId,
  DevTechItemId,
  OsItemId,
} from '@/shared/dictionaries/types/techTypes';
import NextJSLogo from '@/shared/ui/icon/icons/tech-stack/NextJSLogo';
import { IconComponent } from '@/shared/ui/icon/iconTypes';

type TechStackIcons = {
  apps?: Partial<Record<AppItemId, IconComponent>>;
  dev?: Partial<Record<DevTechItemId, IconComponent>>;
  os?: Partial<Record<OsItemId, IconComponent>>;
};

export const TECH_STACK_TSX_ICONS: TechStackIcons = {
  dev: {
    nextjs: NextJSLogo,
  },
} as const;
