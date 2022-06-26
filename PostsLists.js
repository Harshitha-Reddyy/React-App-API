import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";


const PostsLists = () => {
  const [postsList, setPostsList] = useState([]);
  useEffect(() => {
    const postsLists = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const jsonData = await response.json();

      setPostsList(jsonData);
    };
    postsLists();
  }, []);

  console.log(postsList);

  return (
    <>
      <h2>JSON API Data</h2>
      <div className="container">
        {postsList.map((values) => {
          return (
            <>
              <div key={values.id} className="box">
                <div className="content">
                  <p>{values.id}</p>
                  <h5>{values.title}</h5>

                  <p>{values.body}</p>
                  <Link
                    to={{
                      pathname: `/${values.id}`,
                      state: { stateParam: true }
                    }}
                  >
                    {" "}
                    Comments
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default PostsLists;