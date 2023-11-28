import { useContext } from 'react'
import { ListGroup, Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import PizzaContext from '../Context/PizzaContext'

const Cards = () => {
  const { pizzas, addPizza } = useContext(PizzaContext)
  const navigate = useNavigate()

  return (
    <div className='row'>
    {pizzas?.map((pizza) => (
      <div key={pizza.id} className='col-md-3 mt-3'>
        <Card className='h-100'>
          <Card.Img variant='top' src={pizza.img} alt={pizza.name} />
          <Card.Body>
            <Card.Title className='text-capitalize'>{pizza.name}</Card.Title>
            <hr />

            <ListGroup variant='flush'>
              <b>Ingredientes:</b>
              {pizza.ingredients.map((ingredient, i) => (
                <ListGroup.Item
                  className='border-0 text-capitalize'
                  key={i}
                >
                  🍕{ingredient}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
          <Card.Footer>
            <h2 className='text-center'>$ {pizza.price.toLocaleString('es-CL')}</h2>
            <div className='d-flex justify-content-center gap-3'>
              <Button
                className='btn-primary'
                onClick={() => navigate(`/pizza/${pizza.id}`)}
              >
                Ver Más 👀
              </Button>
              <Button
                variant='danger'
                onClick={() => addPizza(pizza)}
              >
                Añadir 🛒
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </div>
    ))}
  </div>
  )
}

export default Cards