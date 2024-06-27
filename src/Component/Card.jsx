import { FaQuoteLeft,FaQuoteRight} from "react-icons/fa";

const Card = (props) => {
  let  review=props.review;
  return (
 <div className="flex justify-center flex-col items-center text-center relative ">
  
        <div className=" bg-purple-600 rounded-full h-[100px] w-[100px] absolute -top-[4.5em] left-[1.5em]" >
     <img className="rounded-full object-cover z-50 h-[100px] w-[100px] absolute left-[-10px] top-2 " src="https://rekhta.pc.cdn.bitgravity.com/Images/Shayar/shahryar.png"/>
        </div>
        <div className=" text-center mt-10 tracking-wider" >
            <h1 className="text-xl font-bold">
                {review.category}
            </h1>
            <h5 className=" uppercase text-xs mt-1 text-purple-400">
            {/*review.job8*/}
            </h5>

            <div className=" text-purple-400 p-2 px-10"><FaQuoteLeft/></div>
        </div>
        <div className=" my-2 mx-5 text-wrap w-2/3 flex">
            <p>{review.shayari}</p>
        </div>
        <div className=" text-purple-400 p-2 px-10"><FaQuoteRight /></div>
       
    </div>
   
  )
}

export default Card