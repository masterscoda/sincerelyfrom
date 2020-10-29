import React, { Component, useState, useEffect } from 'react';
import {getPosts} from '../api/ghost';

function Blog() {
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getPosts()
      .then(items => {
        if(mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])


  return (
    <div>
        <h1>These are the blog posts:</h1>
        <ul>
       {list.map(item =>
         <li key={item.id}>{item.title}</li>
         )}
     </ul>
    </div>
  );
}

export default Blog;