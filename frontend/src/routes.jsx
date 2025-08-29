import { createBrowserRouter } from 'react-router'
// import Layout from '@/layouts/Layout'
import LandingPage from '@/presentation/views/Landing'
import React from 'react'
import authMiddleware, { redirectMiddleware } from './middleware/AuthMiddleware'
import { ProgressBarIndicator } from './middleware/ProgressBarIndicator'

const routesConfig = {
  future: {
    unstable_middleware: true
  }
}

//#region Pages
//#region Login
const Login = React.lazy(() => import('@/presentation/views/Login'))
//#endregion Login
//#region Register
const Register = React.lazy(() => import('@/presentation/views/Registrasi'))
//#endregion Register
//#region Layout
const Layout = React.lazy(() => import('@/layouts/Layout'))
//#endregion Layout
//#region Dashboard
const Dashboard = React.lazy(() => import('@/presentation/views/app/Dashboard'))
//#endregion Dashboard
//#region UI Kits
const FormLayout = React.lazy(() =>
  import('@/presentation/views/app/ui-kits/FormLayout')
)
const Datatable = React.lazy(() =>
  import('@/presentation/views/app/ui-kits/Datatable')
)
//#endregion UI Kits
//#region Not Found
const NotFound = React.lazy(() => import('@/presentation/views/NotFound'))
//#endregion Not Found
//#region Book
const ListBooks = React.lazy(() => import('@/presentation/views/books/ListBook'))
const DetailBook = React.lazy(() => import('@/presentation/views/books/DetailBook'))
const DataBooks = React.lazy(() => import('@/presentation/views/app/books/DataBooks'))
//#endregion Book
//#region Detail Book
const DataDetailBook = React.lazy(() => import('@/presentation/views/app/detailBook/DataDetailBook'))
//#endregion Detail Book
//#region User
const DataUser = React.lazy(() => import('@/presentation/views/app/users/DataUser'))
//#endregion User
//#region Profile
const DataProfile = React.lazy(() => import('@/presentation/views/app/profile/DataProfile'))
//#endregion Profile
//#region Category
const DataCategory = React.lazy(() => import('@/presentation/views/app/category/DataCategory'))
//#endregion Category
//#region Genre
const DataGenre = React.lazy(() => import('@/presentation/views/app/genre/DataGenre'))
//#endregion Genre
//#region Borrowing
const DataBorrowing = React.lazy(() => import('@/presentation/views/app/borrowing/DataBorrowings'))
//#endregion Borrowing
//#region Review
const DataReview = React.lazy(() => import('@/presentation/views/app/review/DataReview'))
//#endregion Review
//#region Profile 
const ProfileUser = React.lazy(() => import('@/presentation/views/app/profile/ProfileUser'))
//#endregion Profile
//#endregion Pages
const routes = createBrowserRouter(
  [
    {
      path: "/",
      Component: LandingPage,
    },
    {
      path: "/login",
      Component: Login,
      loader: redirectMiddleware,
    },
    {
      path: "/register",
      Component: Register,
      loader: redirectMiddleware,
    },
    //#region App
    {
      path: "/app",
      Component: Layout,
      loader: authMiddleware,
      unstable_middleware: [ProgressBarIndicator],
      children: [
        {
          index: true,
          Component: Dashboard,
        },
        {
          path: "/app/uikit",
          children: [
            {
              path: "formlayout",
              Component: FormLayout,
            },
            {
              path: "datatable",
              Component: Datatable,
            },
          ],
        },
        {
          path: "/app/admin/",
          children: [
            {
              path: "books",
              Component: DataBooks,
            },
          ],
        },
        {
          path: "/app/books",
          Component: DataBooks,
        },
        {
          path: "/app/users",
          Component: DataUser,
        },
        {
          path: "/app/profiles",
          Component: DataProfile,
        },
        {
          path: "/app/borrows",
          Component: DataBorrowing,
        },
        {
          path: "/app/categories",
          Component: DataCategory,
        },
        {
          path: "/app/genres",
          Component: DataGenre,
        },
        {
          path: "/app/detailbook/:id",
          Component: DataDetailBook,
        },
        {
          path: "/app/reviews",
          Component: DataReview,
        },
        {
          path: "/app/profile",
          Component: ProfileUser,
        },
      ],
    },
    //#endregion App
    //#region Books
    {
      path: "/books",
      Component: ListBooks,
    },
    {
      path: "/books/:id",
      Component: DetailBook,
    },

    //#endregion Books
    //#region Not Found
    {
      path: "*",
      Component: NotFound,
    },
  ],
  routesConfig
);

export default routes
