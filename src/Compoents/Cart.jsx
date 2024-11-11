import React, { useEffect, useState } from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';

function Cart() {
    const base_url = "https://dummyjson.com/products";
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]); // State for cart management
    const [index, setIndex] = useState(0); // State to track active carousel index

    // Fetch product data from API
    const fetchData = async () => {
        try {
            const response = await fetch(base_url);
            const data = await response.json();
            setProducts(data.products);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Handle carousel item selection
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    // Handle Add to Cart functionality
    // const handleAddToCart = (product) => {
    //     setCart((prevCart) => [...prevCart, product]);
    // };

    return (
        <div className='container mt-5'>
            <h1 className="text-center mb-4">Product List</h1>
            <div className="row">
                {
                products.map((item) => (
                    <div className='col-md-4 mb-4' key={item.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.thumbnail} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                               
                            </Card.Body>
                        </Card>
                    </div>
                ))
                }
            </div>

            <h2 className="text-center mt-5 text-primary">Product Carousel</h2>
            <Carousel activeIndex={index} onSelect={handleSelect} className="mt-4">
                {
                products.slice(0, 5).map((item) => ( 
                    <Carousel.Item key={item.id}>
                      <center>
                        <img
                            className="d-block  w-25 "

                            src={item.thumbnail}
                            
                        />
                        </center>
                        <Carousel.Caption>
                           
                            
                        </Carousel.Caption>
                        <h3 className='text-center fs-5 text-danger'>{item.title}</h3>
                        <p className='text-center fst-italic'>{item.description.slice(0,190)}</p>
                    </Carousel.Item>
                ))
                }
            </Carousel>

        </div>
    );
}

export default Cart;
