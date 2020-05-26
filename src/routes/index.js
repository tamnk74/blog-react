import React from 'react';

import {HomePage} from '../features/Home';
import {
  PostPage,
  MyPostPage,
  PostDetail,
  NewPostPage,
  EditPostPage,
  PostPageAdmin,
} from '../containers/PostPage';
import {
  CategoryPage
} from '../containers/CategoryPage';
import { 
  SignIn, 
  SignUp,
  ProfilePage,
} from '../containers/AuthPage';
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
    path: '/me/posts/:id/edit',
    isPrivate: true,
    component: EditPostPage,
  },
  {
    path: '/me/posts/:slug',
    component: PostDetail,
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
    path: '/categories',
    exact: true,
    component: CategoryPage,
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
    path: '/profile',
    component: ProfilePage
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