import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const responseJson = await response.json();
    setData(responseJson);
    console.log(responseJson);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div class="grid justify-items-center  bg-gray-200">
      <h1 class="w-full text-3xl text-center text-slate-50 p-2 bg-gray-600">React App</h1>
      {loading ? (
        <p>Něco se děje</p>
      ) : (
        <div class="grid w-4/5 pt-4">
          {data ? (
            <div class="grid grid-cols-3 gap-y-5">
              {data.map((item) => (
                <div class="h-28 w-80 grid content-between outline outline-2 outline-slate-500" key={item.id}>
                  <p class="grid items-center pl-2 h-14 bg-gray-400">{item.title}</p>
                  <p class="pl-2">{item.userId}</p>
                  <p class="pl-2 pb-1">{item.id}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>Nic tu není</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
