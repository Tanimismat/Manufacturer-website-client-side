import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <Button variant="dark" disabled>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    <span>Loading...</span>
                </Button>
        </div>
    );
};

export default Loading;