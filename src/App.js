import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UserList from "./Components/UserList/UserList";
import {useState, useEffect} from "react";
import {ContextProvider} from "./Components/Context";
import axios from "axios";
import UserDetails from "./Components/UserDetails/UserDetails";
function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then(function (response) {
        setUsers(response.data.results);
      })
      .catch(function (error) {
        console.log("error occurred when getting data ", error);
      });
  }, []);

  return (
    <>
      <ContextProvider>
        <Router>
          <Routes>
            <Route path="/users/:id" element={<UserDetails />} />
            <Route path="/" exact element={<UserList users={users} />} />
          </Routes>
        </Router>
      </ContextProvider>
    </>
  );
}

export default App;
