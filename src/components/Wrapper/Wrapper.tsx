import { ReactElement } from 'react'
import styled from 'styled-components'
import { color, layout, LayoutProps, ColorProps } from 'styled-system'

type WrapperProps = LayoutProps &
  ColorProps & {
    as?: ReactElement
  }

const WrapperElement: React.FC<WrapperProps> = styled.div(color, layout)

const Wrapper: React.FC<WrapperProps> = ({ children, ...props }) => (
  <WrapperElement {...props}>{children}</WrapperElement>
)

export { Wrapper }
