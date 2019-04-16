import React from "react";

import HomePage from '../components/pages/HomePage';
import PostPage from '../components/pages/PostPage';
import NewPostPAge from '../components/pages/NewPostPage';
import { SignIn, SignUp } from '../components/auth';
import PostPageAdmin from '../components/admin/posts/PostPageAdmin';
import PageNotFound from '../components/pages/PageNotFound';


const routes = [
    {
        path: "/",
        exact: true,
        component: HomePage
    },
    {
        path: "/posts/create",
        isPrivate: true,
        component: NewPostPAge,
    },
    {
        path: "/posts",
        exact: true,
        component: PostPage,
        routes: [
        ]
    },
    {
        path: "/login",
        component: SignIn
    },
    {
      path: "/sign-up",
      component: SignUp
    },
    {
      path: "/admin/posts",
      exact: true,
      component: PostPageAdmin
    },
    {
      path: "",
      component: PageNotFound
    }

];

export default routes;