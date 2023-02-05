import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Card, { CardBlue } from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <div className="bg-blue-500 md:bg-green-800 text-white p-10 mt-5 shadow-lg shadow-gray-400 w-1/2 mx-auto">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
          consequuntur dolorem dolor enim sapiente animi exercitationem deleniti
          culpa, ut tempora repellat, libero itaque, aspernatur porro quidem cum
          ipsa? Nobis, blanditiis.
        </p>
      </div>
    </div>
  );
}

export default App;
