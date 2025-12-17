import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { PreviewPage } from '../pages/PreviewPage';
import { BuilderPage } from '../pages/BuilderPage';
import { StylePage } from '../pages/StylePage';
import { StyleModal } from '../components/StyleModal';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/preview/S01" replace />,
  },
  {
    path: '/preview/:styleId',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PreviewPage />,
      },
      {
        path: 'style',
        element: <StyleModal />,
      },
    ],
  },
  {
    path: '/builder/:styleId',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <BuilderPage />,
      },
    ],
  },
  {
    path: '/router/:styleId',
    element: <StylePage />,
  },
  {
    path: '*',
    element: <Navigate to="/preview/S01" replace />,
  },
]);
