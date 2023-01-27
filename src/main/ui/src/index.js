import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Site from './Pages/Site';
import Sidebar from './components/Sidebar';
import PassengerTable from './Pages/PassengerTable';
import TicketDetails from './Pages/TicketDetails';
import Seatbooking from './components/Seatbooking';
import Invoice from './components/Invoice';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Site />
  },
  {
    path: 'login',
    element: <Login />
  },
  
  {
    path: 'signup',
    element: <Signup />
  },
  {
    path: 'ticket',
    element: <PassengerTable />
  },
  {
    path: 'invoice',
    element: <Invoice />
  },
  {
    path: 'ticketDetails',
    element: <TicketDetails />
  },
  {
    path: 'seatBooking',
    element: <Seatbooking />
  },
  {
    path: 'sidebar',
    element: <Sidebar />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
