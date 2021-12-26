import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps
} from 'styled-system'

import { theme } from '../../styles/ProviderTheme'

type ButtonProps = LayoutProps &
  SpaceProps &
  ColorProps &
  BorderProps &
  FlexboxProps &
  HTMLAttributes<HTMLButtonElement>

const ButtonElement: React.FC<ButtonProps> = styled.button(space, layout, color, flexbox, border)

const Button: React.FC<ButtonProps> = ({ children, ...props }) => <ButtonElement {...props}>{children}</ButtonElement>

Button.defaultProps = {
  bg: theme.colors.red,
  border: 0,
  borderRadius: 8
}

export { Button }
