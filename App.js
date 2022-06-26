import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostsList from "./PostsLists";
import CommentsLists from "./CommentsLists";
export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/:postId">
            <CommentsLists />
          </Route>
          <Route path="/">
            <PostsList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}