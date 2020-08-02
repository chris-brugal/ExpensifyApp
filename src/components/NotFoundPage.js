import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () =>{
    //link is used internally in order to take adv of client side routing. its fast. not full reload
    return(
        <div>
         404: <Link to="/">Go home</Link>
        </div>
    );
}
export default NotFoundPage;