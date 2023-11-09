import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Planet from '../pages/Planet';

const Routes = () => {
    const routes = [
        {
            path: '/',
            // element: <ProtectedRoute />,
            children: [
                {
                    path: '/',
                    element: <div >hello</div>,
                },
                {
                    path: '/planets/:id',
                    element: <Planet />,
                },
            ],
        },
    ];

    // Combine and conditionally include routes based on authentication status
    const router = createBrowserRouter([
        ...routes,
    ]);

    return <RouterProvider router={router} />;
};

export default Routes;
