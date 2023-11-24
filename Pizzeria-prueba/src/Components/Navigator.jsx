import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Pizza from '../Img/pizza.png'

const Navigator = () => {
    return (
        <div>

            <Navbar className="bg-body-tertiary" expand='lg'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={Pizza}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        <h2>Pizzeria Mamma Mia!</h2>
                    </Navbar.Brand>
                </Container>
            </Navbar>

        </div>
    )
}

export default Navigator