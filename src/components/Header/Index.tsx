import { NavLink } from 'react-router-dom';
import * as C from './Styles'

export const Header = () => {
  return (
    <C.headerMain>
      <nav>
        <C.navBarContainer>
          <li>
          <C.navBarLink to="/" end> Pokedex </C.navBarLink>
          </li>
          <li>
          <C.navBarLink to="money" > Conversor </C.navBarLink>
        </li>
        </C.navBarContainer>
      </nav>
    </C.headerMain>
  )
}