import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { Button, Container, Row } from 'react-bootstrap';
import Recipe from '../Recipe/Recipe';

const Recipes = () => {
    const { id } = useParams();
    const recipes = useLoaderData();
    return (
        <div>
            <Header></Header>
            {/* <div className='container'>
                <div className="row mt-5 justify-content-between ">
                    <div className='col-12 col-md-6 col-lg-6'>
                        <img className='img-fluid' src={chef_img} alt="" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 mt-5 text-start">
                        <h2 className="fs-1 mt-5">One Step<br /> Closer To Your<br /> <span className="text-info">Dream Job</span></h2>
                        <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <Button className="btn-info">Get Started</Button>
                    </div>
                </div>
            </div> */}

            <Container>
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