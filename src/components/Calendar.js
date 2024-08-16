import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { generateDate, months } from "../utils/calendar";
import isCurr from "../utils/isCurr";
import dayjs from "dayjs";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { activities } from "../utils/activities";

const Calendar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
 

  return (
    <div className="dark:text-neutral-100 w-full min-h-screen bg-100xblue flex flex-col items-center justify-center">
      <div className="text-center w-full">
        <h1 className="mb-3 text-neutral-700 dark:text-neutral-100 bg-clip-text text-center text-transparent md:mb-4 md:text-5xl">
          Calendar of Events.
        </h1>
      </div>

      <div className="flex w-1/2 mx-auto divide-x-2 gap-10 h-screen items-center -mt-24 ">
        <div className="w-96 h-96">
          <div className="flex justify-between">
            <h1 className="font-semibold">
              {months[today.month()]}, {today.year()}
            </h1>
            <div className="flex items-center gap-5">
              <GrFormPrevious
                className="w-5 h-5 cursor-pointer"
                onClick={() => setToday(today.month(today.month() - 1))}
              />
              <h1
                className=" cursor-pointer"
                onClick={() => {
                  setToday(currentDate);
                  setSelectDate(currentDate);
                }}
              >
                Today
              </h1>
              <GrFormNext
                className="w-5 h-5 cursor-pointer"
                onClick={() => setToday(today.month(today.month() + 1))}
              />
            </div>
          </div>

          <div className="w-full h-16 grid grid-cols-7 text-gray-700">
            {days.map((day, index) => (
              <h1 key={index} className="text-sm grid place-content-center">
                {day}
              </h1>
            ))}
          </div>

          <div className="w-full h-full grid grid-cols-7">
            {generateDate(today.month(), today.year()).map(
              ({ date, currentMonth, today }, index) => (
                <div
                  key={index}
                  className="border-t grid place-content-center text-sm"
                >
                  <h1
                    className={`h-10 w-10 grid place-content-center rounded-full hover:text-blue-500 transition-all cursor-pointer
        ${!currentMonth ? "text-gray-400" : ""}
        ${today ? "bg-blue-500 hover:text-white hover:bg-blue-700" : ""}
        ${activities.some((item) => item.date === date.toDate().toDateString())? "bg-green-500 hover:bg-green-700": ""}`}
                    onClick={() => {
                      setSelectDate(date);
                    }}
                  >
                    {date.date()}
                  </h1>
                </div>
              )
            )}
          </div>
        </div>

        <div className="ml-10 h-96 px-5 flex flex-col items-start">
          <h1 className="font-semibold">
            Activities for {selectDate.toDate().toDateString()}
          </h1>
          <p className="my-10 hover:text-blue-500">
            {activities
              .filter(
                (item) => item.date === selectDate.toDate().toDateString()
              )
              .map((item) =>
                item.activities.map((activity, index) => (
                  <span key={index} className="block">
                    {activity}
                    
                  </span>
                
                  
                ))
              )}

            {/* Show "No Activities" if no activities match the selected date */}
            {activities.filter(
              (item) => item.date === selectDate.toDate().toDateString()
            ).length === 0 && <span>No Activities</span>}
          </p>

          <p className="hover:text-blue-500">{activities
              .filter(
                (item) => item.date === selectDate.toDate().toDateString()
              ).map((item) => item.notes)}</p>




          



          
        </div>
      </div>
    </div>
  );
};

export default Calendar;
