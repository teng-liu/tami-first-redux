import {FETCH_POSTS, NEW_POST, FETCH_DEFINES} from './types';


export const fetchPosts = () => dispatch => {
    // dispatch the data to reducer
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => dispatch({
        type: FETCH_POSTS,
        payload: posts
    })
    );   
};

export const fetchDefinitions = () => dispatch => {
    console.log('fetching definitions');
    fetch('http://localhost:8888/definitions')
    .then(res => res.json())
    .then(defines => dispatch({
        type: FETCH_DEFINES,
        payload: defines
    })
    );

    
}

export const createPost = postData => dispatch => {
    console.log('create action called');
    fetch('http://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        }));
 
};