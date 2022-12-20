import { useState } from "react";
import axios from "axios";

import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [serverResponse, setServerResponse] = useState({
    isFetching: false,
    data: null, // will be string
  });

  async function callApi() {
    setServerResponse((prev) => ({
      ...prev,
      isFetching: true,
      data: null,
    }));

    try {
      const resp = await axios.get("/api/hello");
      setServerResponse((prev) => ({
        ...prev,
        data: JSON.stringify(resp.data),
      }));
    } catch (e) {
      setServerResponse((prev) => ({
        ...prev,
        data: e.message,
      }));
    } finally {
      setServerResponse((prev) => ({
        ...prev,
        isFetching: false,
      }));
    }
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => callApi()}>Click to do an API call</button>
      </div>

      <div>
        {serverResponse.isFetching && <p>fetching ⏳</p>}
        {serverResponse.data && <code>{serverResponse.data}</code>}
      </div>
    </div>
  );
}

export default App;
