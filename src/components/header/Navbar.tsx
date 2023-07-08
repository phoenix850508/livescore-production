import brandIcon from 'icons/brandIcon.svg'
import searchIcon from 'icons/searchIcon.svg'
import solidBellIcon from 'icons/solidBellIcon.svg'
import basketballIcon from 'icons/basketballIcon.svg'
import baseballIcon from 'icons/baseballIcon.svg'
import stlyes from './Navbar.module.scss'

export default function Navbar() {
  return(
    <header>
      <NavbarTop />
      <NavbarBottom />
    </header>
  )
}

function NavbarTop() {
  return (
      <nav className={stlyes.navbarTop}>
        <div className={stlyes.navbarBrand}>
          <img src={brandIcon} alt="brandIcon.svg" />
          <h1 className={stlyes.brandTitle}>Livescore</h1>
        </div>
        <div className={stlyes.navbarSearchBox}>
          <img className={stlyes.searchIcon} src={searchIcon} alt="searchIcon.svg" />
          <input className={stlyes.searchInput} type="text" placeholder='Search' />
        </div>
        <div className={stlyes.navbarFavorites}>
          <span className={stlyes.favorites}>Favorites</span>
          <img src={solidBellIcon} alt="solidBellIcon.svg" />
        </div>
      </nav>
  )
}

function NavbarBottom() {
  return (
    <nav className={stlyes.navbarBottom}>
      <ul className={stlyes.navbarIconList}>
        <li>
          <img className={stlyes.sportsIcon} src={basketballIcon} alt="basketballIcon.svg" />
          <span>Basketball</span>
        </li>
        <li>
          <img className={stlyes.sportsIcon} src={baseballIcon} alt="baseballIcon.svg" />
          <span>Baseball</span>
        </li>
      </ul>
    </nav>
  )
}

