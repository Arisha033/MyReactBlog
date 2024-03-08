import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout";
import NoMatch from "./Components/NoMatch";
import { Home, Posts, Post, Author, Contact } from "./App";

import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="posts" element={<Posts />} />
      <Route path="posts/:postId" element={<Post />} />
      <Route path="author" element={<Author />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
