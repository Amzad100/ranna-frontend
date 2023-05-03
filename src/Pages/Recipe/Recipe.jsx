import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Recipe = ({ recipe }) => {
    const { _id, chef_img, time, category_name, chef_name, recipe_description, recipe_title, recipe_img, cooking_method, rating } = recipe;
    return (
        <div>
            <Col className='h-6'>
                <Card>
                    <Card.Img height={250} variant="top" src={recipe_img} />
                    <Card.Body>
                        <Card.Text>{recipe_title}</Card.Text>
                        <Card.Text className='text-muted'>{recipe_description}</Card.Text>
                        <div className='d-flex align-items-center'>
                            <img className="rounded-circle mb-2" width="40" height="40" src={chef_img} alt="profile" />
                            <p className='ms-2'><small className='text-muted'>By </small> {chef_name}</p>
                        </div>
                        <div className='row'>
                            <div className='col border p-2 text-center'>
                                <small className="text-muted">{category_name}</small>
                            </div> 
                            <div className='col border p-2 text-center'>
                                <small className="text-muted">{time}</small>
                            </div>
                        </div>
                    </Card.Body>
                    <Button>Favorite</Button>
                </Card>
            </Col>
        </div>
    );
};

export default Recipe;