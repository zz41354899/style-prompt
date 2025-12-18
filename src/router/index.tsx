import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { PreviewPage } from '../pages/PreviewPage';
import { BuilderPage } from '../pages/BuilderPage';
import { StylePage } from '../pages/StylePage';
import { StyleModal } from '../components/StyleModal';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PreviewPage />,
      },
    ],
  },
  {
    path: '/builder',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <BuilderPage />,
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
    path: '/style/:styleId',
    element: <StylePage />,
  },
  {
    path: '/:styleId',
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
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);
