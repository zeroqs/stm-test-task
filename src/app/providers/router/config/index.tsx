import { RouteProps } from 'react-router-dom'

import { ErrorPage, HomePage, UserPage } from '@/pages'

enum AppRoutes {
  HOME = 'home',
  USER = 'user',
  NOTFOUND = 'notFound',
}

const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.USER]: '/:userId',
  [AppRoutes.NOTFOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePage />,
  },
  [AppRoutes.USER]: {
    path: RoutePath.user,
    element: <UserPage />,
  },
  [AppRoutes.NOTFOUND]: {
    path: RoutePath.notFound,
    element: <ErrorPage />,
  },
}
