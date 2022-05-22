import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h6>How will you improve the performance of a react application?</h6>
                <li>Using the production build </li>
                <p></p>
                <p>Profiling the components with the devtools</p>
                <p>Virtualizing long lists using react window</p>
                <p>Using fragment to avoid adding extra nodes to DOM</p>
                <p>Optimizing app loading time with code splitting</p>
            </div>
        </div>
    );
};

export default Blogs;