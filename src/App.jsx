import reviews from "./data";
import Heading from "./Component/Heading";
import Testomonial from "./Component/Testomonial";

const App = () => {
  return (
    <div className=" bg-slate-400">
      <div className="flex m-auto p-5 h-screen flex-col justify-center items-center w-screen">
        <div>
          <Heading />
        </div>
        <div>
          <Testomonial reviews={reviews} />
        </div>
      </div>{" "}
    </div>
  );
};

export default App;
