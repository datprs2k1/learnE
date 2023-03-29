import { createBrowserRouter } from 'react-router-dom';
import loadable from '@loadable/component';

const HomeLayout = loadable(() => import('layouts/index'), {
  cacheKey: () => 'HomeLayout',
  resolveComponent: (components) => components.HomeLayout,
});

const FlashCard = loadable(() => import('pages/index'), {
  cacheKey: () => 'FlashCard',
  resolveComponent: (components) => components.FlashCard,
});

const FlashCardList = loadable(() => import('pages/index'), {
  cacheKey: () => 'FlashCardList',
  resolveComponent: (components) => components.FlashCardList,
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
      {
        path: 'flashcard',
        element: <FlashCard />,
      },
    ],
  },
]);

export default router;
