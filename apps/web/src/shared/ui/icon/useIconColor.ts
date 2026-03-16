import { IconPropsOptions } from "./iconTypes"

type UseIconColorProps = {
  color?: IconPropsOptions['elementsColor']
}

const useIconColor = (props?: UseIconColorProps) => {
  const { color } = props ?? {};

  const primaryColor = color?.primaryColor ?? 'var(--icon-primary)'
  const secondaryColor = color?.secondaryColor ?? 'var(--icon-primary)'

  return { primaryColor, secondaryColor }
}

export default useIconColor
