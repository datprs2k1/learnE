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

const FlashCardForm = loadable(() => import('pages/index'), {
  cacheKey: () => 'FlashCardForm',
  resolveComponent: (components) => components.FlashCardForm,
});

const FlashCardView = loadable(() => import('pages/index'), {
  cacheKey: () => 'FlashCardView',
  resolveComponent: (components) => components.FlashCardView,
});

const FlashCardReview = loadable(() => import('pages/index'), {
  cacheKey: () => 'FlashCardReview',
  resolveComponent: (components) => components.FlashCardReview,
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
      {
        path: 'flashcard/:id',
        element: <FlashCardView />,
      },

      {
        path: 'flashcard/create',
        element: <FlashCardForm />,
      },
    ],
  },
  {
    path: 'flashcard/:id/review',
    element: <FlashCardReview />,
  },
]);

export default router;
