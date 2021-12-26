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

type WrapperProps = LayoutProps &
  ColorProps &
  SpaceProps &
  FlexboxProps &
  BorderProps &
  HTMLAttributes<HTMLDivElement> & {
    as?: string
  }

const WrapperElement: React.FC<WrapperProps> = styled.div(color, layout, space, flexbox, border)

const Wrapper: React.FC<WrapperProps> = ({ children, ...props }) => (
  <WrapperElement {...props}>{children}</WrapperElement>
)

export { Wrapper }
