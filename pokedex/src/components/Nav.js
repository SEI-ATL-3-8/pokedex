import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <Link to="/pokemon">All Pokemon</Link>
      {' | '}
      <Link to="/favorites">Your Favorite Pokemon</Link>
    </nav>
  )
}

export default Nav