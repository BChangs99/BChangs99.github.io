import ReactGA from 'react-ga4';

export function handleResumeOnClick() {
   // Log the click event to GA
   ReactGA.event({
     category: 'Resume',
     action: 'Clicked',
     label: 'Resume',
   });
 }