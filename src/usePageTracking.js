import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const usePageTracking = () => { 
   const location = useLocation();

   useEffect(() => {
      ReactGA.initialize("UA-238977152-1");
      ReactGA.pageview(location.pathname + location.search);
   }, [location]);
}

export default usePageTracking;
