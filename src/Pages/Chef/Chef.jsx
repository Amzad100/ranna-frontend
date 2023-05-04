import React from 'react';
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';


const Chef = ({ chef }) => {
    const { id, chef_picture, chef_name, years_of_experience, number_of_recipes, likes } = chef;
    return (
        <div>
            <Col className='h-6'>
                <Card>
                    <Card.Img height={400} variant="top" src={chef_picture} />
                    <Card.Body>
                        <Card.Title>{chef_name}</Card.Title>
                        <Card.Text>Years Of Experience: {years_of_experience}</Card.Text>
                        <Card.Text>Number Of Recipes: {number_of_recipes}</Card.Text>
                        <Card.Text>Likes: <FaThumbsUp></FaThumbsUp> {likes}</Card.Text>
                        <Link to={`/chef/${id}`}><Button>View Recipes</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Chef;