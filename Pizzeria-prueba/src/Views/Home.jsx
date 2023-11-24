import { Container } from 'react-bootstrap'
import Cards from '../components/Card'

const Home = ({}) => {

  return (
    <>
      <header className='d-flex flex-column align-items-center text-white header'>
        <h1 className='mb-3 pt-5'>🍕 ¡Pizzería Mamma Mía!</h1>
        <h4 className='mb-3'>¡Tenemos las mejores pizzas que podrás econtrar!</h4>
        <hr style={{ border: '1px solid white', width: '70%' }} />
      </header>
      <Container>
        <Cards />
      </Container>
    </>
  )
}

export default Home





