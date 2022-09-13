import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Users from "./components/Users";
import { useEffect } from "react";
import { userAction } from "./redux/actions/userActions";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, users, error } = userList;

  useEffect(() => {
    dispatch(userAction);
  }, [dispatch]);
  return (
    <div className="App">
      <h1>REDUX THUNK</h1>
      {loading ? (
        <h1>loading............</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <Users users={users} />
      )}
    </div>
  );
}

export default App;
