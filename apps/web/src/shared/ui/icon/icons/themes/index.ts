import { Theme } from '@/shared/types/theme';

import { IconComponent } from '../../iconTypes';
import ComputerIcon from './ComputerIcon';
import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';

export const THEME_ICONS = {
  dark: MoonIcon,
  light: SunIcon,
  system: ComputerIcon,
} as const satisfies Record<Theme, IconComponent>;
