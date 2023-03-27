import { createBrowserRouter } from 'react-router-dom';
import loadable from '@loadable/component';

const HomeLayout = loadable(() => import('layouts/index'), {
  cacheKey: () => 'HomeLayout',
  resolveComponent: (components) => components.HomeLayout,
});

const Test = loadable(() => import('pages/Test/Test'), {
  cacheKey: () => 'Test',
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: 'test',
        element: <Test />,
      },
    ],
  },
]);

export default router;
