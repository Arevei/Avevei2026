"use client";

import { useEffect, useRef } from "react";

export default function CalendarButton() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Google Calendar CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://calendar.google.com/calendar/scheduling-button-script.css";
    document.head.appendChild(link);

    // Load Google Calendar Script
    const script = document.createElement("script");
    script.src =
      "https://calendar.google.com/calendar/scheduling-button-script.js";
    script.async = true;

    script.onload = () => {
      // @ts-ignore
      if (window.calendar && ref.current) {
        // @ts-ignore
        window.calendar.schedulingButton.load({
          url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Ng-fRtiNtTsbeiq0Z6DTkEvGsKYwGcrTeAM1JpxIAg4QjcYwjYD3zwrPPPsm2veTlk_bMSFtz?gv=true",
          color: "#00E6C4",
          label: "Book an appointment",
          target: ref.current,
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  return <div ref={ref} className=" mx-auto"/>;
}
