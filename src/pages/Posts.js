import React from 'react';
import {Link, Route} from 'react-router-dom';
import {Post} from 'pages'

const Posts = ({match}) => {
    return(
        <div>
            <h2>Post List</h2>
            <ul>
                <li><Link to = {`${match.url}/1`}>Post1</Link></li>
                <li><Link to = {`${match.url}/2`}>Post2</Link></li>
                <li><Link to = {`${match.url}/3`}>Post3</Link></li>
                <li><Link to = {`${match.url}/4`}>Post4</Link></li>
            </ul>
            <Route exact path={match.url} render={()=>(<h3>Please select any Post</h3>)}/>
            <Route path={`${match.url}/:id`} component={Post} />
        </div>
    ) 
}

export default Posts;