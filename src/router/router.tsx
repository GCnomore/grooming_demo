import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import App from "../App";

const AppointmentPage = lazy(() => import("../pages/Appointment/Appointment/AppointmentPage"));
const ConfirmationPage = lazy(() => import("../pages/Appointment/Confirmation/ConfirmationPage"));
const CustomerInfoPage = lazy(() => import("../pages/Appointment/CustomerInfo/CustomerInfoPage"));
const PetInformationPage = lazy(() => import("../pages/Appointment/PetInformation/PetInformationPage"));
const DonePage = lazy(() => import("../pages/Appointment/Done/DonePage"));


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AppointmentPage />
          </Suspense>
        ),
        // TODO: load store data
        // loader:
      },
      {
        path: "/customer-info",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <CustomerInfoPage />
          </Suspense>
        ),
      },
      {
        path: "/service-detail/:count",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <PetInformationPage />
          </Suspense>
        ),
      },
      {
        path: "/service-detail",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <PetInformationPage />
          </Suspense>
        ),
      },
      {
        path: "/edit/customer-info",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <CustomerInfoPage />
          </Suspense>
        ),
      },
      {
        path: "/edit/service-detail/:count",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <PetInformationPage />
          </Suspense>
        ),
      },
      {
        path: "/edit/service-detail",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <PetInformationPage />
          </Suspense>
        ),
      },
      {
        path: "/confirm",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ConfirmationPage />
          </Suspense>
        ),
      },
      {
        path: "/done",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <DonePage />
          </Suspense>
        ),
      },
    ]
  },
], { basename: '/grooming_demo/grooming/'});

export default router;
