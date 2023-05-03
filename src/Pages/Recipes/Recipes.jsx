import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { Container, Row } from 'react-bootstrap';
import Recipe from '../Recipe/Recipe';

const Recipes = () => {
    const { id } = useParams();
    const recipes = useLoaderData();
    return (
        <div>
            <Header></Header>
            <Container>
                <h1>This is the recipes page: {recipes.length}</h1>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        recipes.map(recipe => <Recipe
                            key={recipe._id}
                            recipe={recipe}
                        >
                        </Recipe>)
                    }
                </Row>
            </Container>

            <Footer></Footer>
        </div>
    );
};

export default Recipes;