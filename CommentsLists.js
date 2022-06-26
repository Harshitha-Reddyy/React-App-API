import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./App.css";


const CommentsLists = () => {
  const [commentsList, setCommentsList] = useState([]);
  let { postId } = useParams();
  console.log(postId);
  useEffect(() => {
    const commentsLists = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments`
      );
      const jsonData = await response.json();

      setCommentsList(jsonData.filter((data) => data.postId === parseInt(postId)));
    };
    commentsLists();
  }, []);

  console.log(commentsList);

  return (
    <>
      <h2>JSON API Data</h2>
      <div className="container">
        {commentsList.map((values) => {
          return (
            <>
              <div key={values.id} className="box">
                <div className="content">
                  <p>{values.postId}</p>
                  <h5>{values.name}</h5>
                  <p>{values.body}</p>

                  <p>{values.email}</p>
                  
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default CommentsLists;