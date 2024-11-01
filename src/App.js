import { Provider } from "react-redux";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./exer7/pages/Home";
import Post from "./exer7/pages/Post";
import WritePost from "./exer7/pages/WritePost";
import EditPost from "./exer7/pages/EditPost";
import Layout from "./exer7/components/Layout";
import store from "./exer7/reduxComponents/store";
import DetailPost from "./exer7/pages/DetailPost";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/writepost" element={<WritePost />}></Route>
            <Route path="/post/" element={<Post />}></Route>
            <Route path="/detail-post/:id" element={<DetailPost />}></Route>
            <Route path="/edit-post/:id" element={<EditPost />}></Route>
          </Routes>
        </Layout>
      </Provider>
    </div>
  );
}

export default App;
