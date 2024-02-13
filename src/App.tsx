import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import _ from "lodash";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import * as Styled from "./App.styled";
import { RootDispatch } from "./data/redux/store";
import AppLayout from "./components/AppLayout/AppLayout";
import { clearAppoitnmentState, setStore, setUser } from "./data/redux/appointmentSlice";
import demo_groomingShop from './assets/jsons/grooming_shop.json';
import demo_user from './assets/jsons/user.json';
import { firebaseConfig } from "./config/firebaseConfig";

function App() {
   const dispatch = useDispatch<RootDispatch>();
   const navigate = useNavigate();

   useEffect(()=> {    
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
      
      getStoreInfo();
      dispatch(setUser(demo_user));
      
      window.addEventListener('popstate', ()=> {
         const sessionID = sessionStorage.getItem('sID');
         const storeId = localStorage.getItem('storeId');
         if(!sessionID && storeId) {
            dispatch(clearAppoitnmentState());
            navigate('/', { replace: true });
         }
      })
   }, [])
   

   const getStoreInfo = () => {
      if(demo_groomingShop) {
         const storeId = btoa(demo_groomingShop._id);
         dispatch(setStore(demo_groomingShop));
         localStorage.setItem('storeId', storeId);
      }
   }

   return (
      <Styled.AppContainer className="App">
         <AppLayout>
            <Outlet />
         </AppLayout>
      </Styled.AppContainer>
   );
}

export default App;
