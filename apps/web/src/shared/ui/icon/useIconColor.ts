import { IconPropsOptions } from './iconTypes';

type UseIconColorProps = Partial<
  Pick<IconPropsOptions, 'elementsColor' | 'isInvertedDefaultColor'>
>;

const useIconColor = (props?: UseIconColorProps) => {
  const { elementsColor, isInvertedDefaultColor } = props ?? {};

  const primaryColor =
    elementsColor?.primaryColor ||
    (isInvertedDefaultColor
      ? 'var(--icon-primary-inverted)'
      : 'var(--icon-primary)');
  const secondaryColor =
    elementsColor?.secondaryColor ||
    (isInvertedDefaultColor
      ? 'var(--icon-primary-inverted)'
      : 'var(--icon-primary)');

  return { primaryColor, secondaryColor };
};

export default useIconColor;
