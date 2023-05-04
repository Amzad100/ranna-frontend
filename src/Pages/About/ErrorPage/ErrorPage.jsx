import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <div className='mt-5'>
                <h1 className='fw-bold text-danger'>404</h1>
                <Link to="/"><Button >Back to Home page</Button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;