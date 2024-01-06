import reviews from "./data"
import Heading from "./Component/Heading"
import Testomonial from "./Component/Testomonial"

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-400">
    <div >
      <Heading/>
    </div>
    <div>
      <Testomonial reviews={reviews}/>
    </div>
    </div>
  )
}

export default App