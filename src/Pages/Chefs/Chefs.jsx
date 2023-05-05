import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Chef from '../Chef/Chef';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://the-chef-recipe-server-amzad100.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <Container>
            <p className='text-center mt-5 text-primary'><small >Choose a Chef</small></p>
            <h1 className='text-center'>Chef Categories</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    chefs.map(chef => <Chef
                        key={chef.id}
                        chef={chef}
                    >
                    </Chef>)
                }
            </Row>
        </Container>
    );
};

export default Chefs;

// Thank you