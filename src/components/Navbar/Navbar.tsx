import styled from 'styled-components'
import { color, ColorProps, flexbox, FlexboxProps, layout, LayoutProps, space, SpaceProps } from 'styled-system'

type NavbarProps = ColorProps & LayoutProps & FlexboxProps & SpaceProps

const NavbarElement: React.FC<NavbarProps> = styled.nav(color, layout, flexbox, space)

const Navbar: React.FC<NavbarProps> = ({ children, ...props }) => <NavbarElement {...props}>{children}</NavbarElement>

export { Navbar }
