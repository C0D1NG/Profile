import React from 'react';

const NotFound = () => {
    return (
        <div className="d-flex flex-column justify-content-center"
            style={{ width: '100vw', height: '100vh' }}>
            <h2 className="text-dark text-center">404 Not Found</h2>
            <h5 className="text-dark text-center">Page Not Found</h5>
            <p className="text-dark text-center">Check if the URL is Correct</p>
        </div>
    )
}

export default NotFound