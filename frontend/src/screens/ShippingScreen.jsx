import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import { saveShippingAddress } from '../slices/cartSlice';
import CheckoutSteps from '../components/CheckoutSteps';

const ShippingScreen = () => {
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    const [address, setAddress] = useState(shippingAddress?.address || '');
    const [city, setCity] = useState(shippingAddress?.city || '');
    const [postalCode, setPostalCode] = useState(shippingAddress?.postalCode || '');
    const [country, setCountry] = useState(shippingAddress?.country || '');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ address, city, postalCode, country }));
        navigate('/payment');
      };

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h1>Dostawa</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className='my-2' controlId='address'>
                    <Form.Label>Adres</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Wprowadź adres'
                        value={address}
                        required
                        onChange={(e) => setAddress(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='city'>
                    <Form.Label>Miasto</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Wprowadź miasto'
                        value={city}
                        required
                        onChange={(e) => setCity(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='postalCode'>
                    <Form.Label>Kod pocztowy</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Wprowadź kod pocztowy'
                        value={postalCode}
                        required
                        onChange={(e) => setPostalCode(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='country'>
                    <Form.Label>Państwo</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Wprowadź państwo'
                        value={country}
                        required
                        onChange={(e) => setCountry(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Kontynuuj
                </Button>
            </Form>
        </FormContainer>
        
    );
};

export default ShippingScreen;