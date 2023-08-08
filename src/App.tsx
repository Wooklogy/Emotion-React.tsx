import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './theme/index.css';
import PageRootIndex from './app/root';
import WookLayoutErrorBoundary from './component/layout/error.layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageRootIndex />,
    errorElement: <WookLayoutErrorBoundary />,
  },
]);

const App: React.FC = () => (
  <RouterProvider router={router} />
);

export default App;
