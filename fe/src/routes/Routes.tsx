import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import People from '../pages/People';
import PeopleDetails from '../pages/PeopleDetails';
import Planet from '../pages/Planet';

const Routes = () => {
    const routes = [
        {
            path: '/',
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/people',
                    element: <People />,
                },
                {
                    path: '/people/:id',
                    element: <PeopleDetails />,
                },
                {
                    path: '/planets',
                    element: <Planet />,
                },
            ],
        },
    ];

    // Combine and conditionally include routes based on authentication status
    const router = createBrowserRouter([...routes]);

    return <RouterProvider router={router} />;
};

export default Routes;
