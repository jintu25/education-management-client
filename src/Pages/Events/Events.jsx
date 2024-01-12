import { useContext, useEffect, useState } from "react";
import CoverBanner from "../../Shared/CoverBanner/CoverBanner";
import coverImg from "../../assets/images/banner/events2.webp";
import DetailsEvents from "./DetailsEvents";
import { ThemeContext } from "../../Providers/ThemeProvider";
const Events = () => {
  const { theme } = useContext(ThemeContext);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => {
        setUpcomingEvents(data);
      });
  }, []);
  return (
    <div className={`${theme}`}>
      <CoverBanner bannerImage={coverImg} heading={"Events"}></CoverBanner>
      <div className="max-w-screen-xl m-auto py-20">
        {upcomingEvents.map((detailsEvents) => (
          <DetailsEvents
            key={detailsEvents.key}
            detailsEvents={detailsEvents}
          ></DetailsEvents>
        ))}
      </div>
    </div>
  );
};

export default Events;
