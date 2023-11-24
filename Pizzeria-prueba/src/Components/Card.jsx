import { useContext } from 'react'
import { ListGroup, Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import PizzaContext from '../Context/PizzaContext'

const Cards = () => {
  const { pizzas, addPizza } = useContext(PizzaContext)
  const navigate = useNavigate()

    return (
        <div>
            {pizzas?.map((pizza) => {
                <div key={pizza.id} >
                    <Card>
                        <Card.Img variant='top' src={pizza.img} alt={pizza.name} />
                        <Card.Body>
                            <Card.Title className='text-capitalize'>
                                {pizza.name}
                            </Card.Title>
                            <ListGroup>
                                <p>Ingredientes:</p>
                                {pizza.ingredients.map((ingredient, i) => (
                                    <ListGroup.Item className='text-capitalize border-0'>
                                        🍕
                                        {ingredient}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                        <Card.Footer>
                            <h2>${pizza.price.toLocaleString('es-CL')}</h2>
                            <div>
                                <Button
                                    onClick={() => navigate(`/pizza/${pizza.id}`)}
                                >
                                    Ver Más 👀
                                </Button>
                                <Button
                                    onClick={() => addPizza(pizza)}
                                >
                                    Añadir 🛒
                                </Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </div>
            })}

        </div>
    )
}

export default Cards