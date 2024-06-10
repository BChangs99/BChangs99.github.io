import ReactGA from "react-ga4";

export function handleResumeOnClick(category) {
  // Log the click event to GA
  ReactGA.event({
    category,
    action: "Clicked",
    label: "Resume",
  });

  console.log("logged event to GA");
}
