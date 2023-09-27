import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import {HomePage, ItemDetailPage, CheckoutPage } from '../pages';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const Navigation = () => {

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <HomePage />
        },

        {
            path: '/detail/:idProduct',
            element: <ItemDetailPage />,
        },

        {
            path:'/checkout',
            element: <CheckoutPage />
        },

        {
            path:'/editorial/:editorialId',
            element: <HomePage />
        },
    ])
    return (
        <RouterProvider router={routes}/>
    )
}

export default Navigation;