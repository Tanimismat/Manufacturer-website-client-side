import React from 'react';
import Header from '../Shared/Header';

const Blogs = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <h6>How will you improve the performance of a react application?</h6>
                <li>Using the production build </li>
                <p>Profiling the components with the devtools</p>
                <p>Virtualizing long lists using react window</p>
                <p>Using fragment to avoid adding extra nodes to DOM</p>
                <p>Optimizing app loading time with code splitting</p>
            </div>
            <div>
                <h5>What are the different ways to manage a state in a react application?</h5>

            </div>
        </div>
    );
};

export default Blogs;