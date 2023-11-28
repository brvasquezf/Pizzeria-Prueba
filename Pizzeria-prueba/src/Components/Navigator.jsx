import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import PizzaContext from '../Context/PizzaContext'
import { Navbar, Nav } from 'react-bootstrap'
const Navigator = () => {
    const getNavLinkClass = ({ isActive }) => (isActive ? 'active' : 'undefined')

  const { total } = useContext(PizzaContext)

  return (
    <Navbar className='d-flex justify-content-between navbar'>
      <Nav.Item className='mx-5'>
        <NavLink className={getNavLinkClass} to='/'>
          🍕 Home
        </NavLink>
      </Nav.Item>
      <Nav.Item className='mx-5'>
        <NavLink className={getNavLinkClass} to='/cart'>
          🛒 Cart: $ {(total.toLocaleString('es-CL'))}
        </NavLink>
      </Nav.Item>
    </Navbar>
    )
}

export default Navigator