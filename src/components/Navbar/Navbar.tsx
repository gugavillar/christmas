import styled from 'styled-components'
import { color, layout, flexbox, FlexboxProps, LayoutProps, ColorProps } from 'styled-system'

type NavbarContainerProps = ColorProps & LayoutProps & FlexboxProps

const NavbarElement: React.FC<NavbarContainerProps> = styled.nav(color, layout, flexbox)

const Navbar: React.FC<NavbarContainerProps> = ({ children, ...props }) => (
  <NavbarElement {...props}>{children}</NavbarElement>
)

export { Navbar }
