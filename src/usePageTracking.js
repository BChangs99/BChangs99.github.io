import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

const usePageTracking = () => { 
   const location = useLocation();

   useEffect(() => {
      ReactGA.initialize("UA-238977152-1");
      ReactGA.pageview(location.pathname + location.search);

      console.log("Event Pushed")
      console.log(location.pathname + location.search, "location pathname + search")
   }, [location]);
}

export default usePageTracking;
