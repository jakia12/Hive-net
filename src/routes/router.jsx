import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../components/layout/Layout";
import Chat from "../pages/Chat";
import CreateAgent from "../pages/CreateAgent";
import Home from "../pages/Home";
import NewUser from "../pages/NewUser";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/chat" element={<Chat />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/createAgent" element={<CreateAgent />} />
      </Route>
    </>
  )
);
