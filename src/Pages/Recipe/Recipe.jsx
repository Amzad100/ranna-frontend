import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaClock, FaFolderOpen, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe }) => {
    const { _id, ingredients, chef_img, time, category_name, chef_name, recipe_description, recipe_title, recipe_img, cooking_method, rating } = recipe;
    const [favorited, setFavorite] = useState(false)
    const handleFavorite = () => {
        toast("Added Favorite!");
        setFavorite(true);
    }
    return (
        <div>
            <Col className='h-6'>
                <Card>
                    <Card.Img height={250} variant="top" src={recipe_img} />
                    <Card.Body>
                        <Card.Text>{recipe_title}</Card.Text>
                        <div>
                            <Rating
                                placeholderRating={rating}
                                readonly
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                            >
                            </Rating>
                        </div>
                        <div>
                            <h4>Ingredients</h4>
                            <ol>
                                <li>{ingredients[0]}</li>
                                <li>{ingredients[1]}</li>
                                <li>{ingredients[2]}</li>
                                <li>{ingredients[3]}</li>
                                <li>{ingredients[4]}</li>
                            </ol>
                        </div>

                        <Card.Text className='text-muted'>{cooking_method}</Card.Text>
                        <Card.Text className='text-muted'>{recipe_description}</Card.Text>
                        <div className='d-flex align-items-center'>
                            <img className="rounded-circle mb-2" width="40" height="40" src={chef_img} alt="profile" />
                            <p className='ms-2'><small className='text-muted'>By </small> {chef_name}</p>
                        </div>
                        <div className='row'>
                            <div className='col border p-2 text-center'>
                                <small className="text-muted"> <FaFolderOpen></FaFolderOpen> {category_name}</small>
                            </div>
                            <div className='col border p-2 text-center'>
                                <small className="text-muted"> <FaClock></FaClock> {time}</small>
                            </div>
                        </div>
                    </Card.Body>
                    <Button onClick={handleFavorite} disabled={favorited}><ToastContainer></ToastContainer>Favorite</Button>
                </Card>
            </Col>
        </div>
    );
};

export default Recipe;