import React, { useState } from "react";
import Card from "./Card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonial = (props) => {
  let reviews = props.reviews;

  const [index, setIndex] = useState(0);

  function leftShift() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
    console.log(index);
  }

  function rightShift() {
    if (index >= reviews.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    console.log(index);
  }

  function surprise() {
    let randIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randIndex);
    console.log(index);
  }

  return (
    <div className="flex justify-center items-center text-center">
      <div className="bg-white rounded-sm flex flex-col items-center  w-[500px]">
        <Card review={reviews[index]} />
        <div className="text-purple-400 flex justify-between gap-4 p-3">
          <button onClick={leftShift} className="hover:text-purple-300">
            <FaChevronLeft />
          </button>
          <button onClick={rightShift}  className="hover:text-purple-300">
            <FaChevronRight />
          </button>
        </div>
        <div className="bg-purple-400 text-white font-semibold p-2 rounded-md mb-4 hover:bg-purple-300">
          <button onClick={surprise}>Surprise Me</button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
