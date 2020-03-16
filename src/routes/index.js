import React from 'react';

import {HomePage} from '../containers/HomePage';
import { PostPage } from '../containers/PostPage';
import { MyPostPage } from '../containers/PostPage/MyPostPage';
import { PostDetail } from '../containers/PostPage/PostDetail';
import NewPostPage from '../containers/PostPage/NewPostPage';
import { SignIn, SignUp } from '../containers/AuthPage';
import PostPageAdmin from '../containers/PostPage/PostPageAdmin';
import NotFoundPage from '../containers/NotFoundPage';

const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '/posts/create',
    isPrivate: true,
    component: NewPostPage,
  },
  {
    path: '/posts',
    exact: true,
    component: PostPage,
    routes: [
    ]
  },
  {
    path: '/me/posts',
    exact: true,
    isPrivate: true,
    component: MyPostPage,
    routes: [
    ]
  },
  {
    path: '/posts/:slug',
    component: PostDetail,
    routes: [
    ]
  },
  {
    path: '/login',
    component: SignIn
  },
  {
    path: '/sign-up',
    component: SignUp
  },
  {
    path: '/admin/posts',
    exact: true,
    isPrivate: true,
    component: PostPageAdmin
  },
  {
    path: '',
    component: NotFoundPage
  }

];

export default routes;