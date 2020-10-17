import Axios from 'axios';
import React, { useEffect, useState } from 'react';

// import logo from './logo.svg';
// import './App.css';

function App() {
  // const [data, setData] = useState([{}]);
  const [data, setData] = useState([{
    "post-id": 1,
    "post-title": "Titleee",
    "post-author": "Authorrr",
    "post-body": "Bodyyy",
    "post-created-at": Date.now()
  }]);
  
  useEffect(() => {
    Axios
      .get(
        "https://hardyvalen-backend.azurewebsites.net/post/get-all", 
      )
      .then(res => {
        setData(res.data);
        return null;
      })
      .catch((e) => {
        console.log(JSON.stringify(e, null, 4));
      })
  }, []);

  return (
    <div className="App">
      Get data from Azure Database
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Author</td>
            <td>Body</td>
            <td>Created At</td>
          </tr>
        </thead>
        <tbody>
        {
          data.map((data, key) => {
            return (
              <tr key={key}>
                <td>{data["post-id"]}</td>
                <td>{data["post-title"]}</td>
                <td>{data["post-author"]}</td>
                <td>{data["post-body"]}</td>
                <td>{data["post-created-at"]}</td>
              </tr>
            )
          }
        )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
