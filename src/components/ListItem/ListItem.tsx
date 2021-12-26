import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { color, ColorProps, compose, system, typography, TypographyProps } from 'styled-system'

import { theme } from '../../styles/ProviderTheme'

type ListItemProps = HTMLAttributes<HTMLAnchorElement> &
  TypographyProps &
  ColorProps & {
    href?: string
    textDecoration?: string
  }

const typo = compose(
  typography,
  system({
    textDecoration: {
      property: 'textDecoration'
    }
  })
)

const ListItemElement: React.FC<ListItemProps> = styled.a(typo, color)

const ListItem: React.FC<ListItemProps> = ({ children, ...props }) => (
  <ListItemElement {...props}>{children}</ListItemElement>
)

ListItem.defaultProps = {
  textDecoration: 'none',
  color: theme.colors.backlight,
  fontSize: 16,
  lineHeight: '24px'
}

export { ListItem }
