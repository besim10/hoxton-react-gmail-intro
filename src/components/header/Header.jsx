import LeftMenu from "./LeftMenu"
import Search from "./Search"
import './Header.css'

function Header(){
    return (
        <header className="header">
        <LeftMenu />

        <Search />
      </header>
    )
}
export default Header