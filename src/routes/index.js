
import Home from '__ROOT/views/Home';
import Posts from '__ROOT/views/Posts';
// import Categories from '__ROOT/views/Categories';
import PostCreate from '../views/Posts/Create';
import { Login } from '__ROOT/views/Login';
import { SignUp } from '__ROOT/views/SignUp';
// import AdminPosts from '../views/admin/posts/Post';
import NotFound from '__ROOT/views/NotFound';


const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
      path: "/posts/create",
      isPrivate: true,
      component: PostCreate,
  },
  {
    path: "/posts",
    exact: true,
    component: Posts,
    routes: [
    ]
  },
  //   {
  //     path: "/categories",
  //     exact: true,
  //     component: Categories,
  //     routes: [
  //     ]
  // },
  {
      path: "/login",
      component: Login
  },
  {
    path: "/signup",
    component: SignUp
  },
  // {
  //   path: "/admin/posts",
  //   exact: true,
  //   component: AdminPosts
  // },
  {
    path: "",
    component: NotFound
  }

];

export default routes;