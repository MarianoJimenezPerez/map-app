import { Outlet } from "react-router-dom";
import Header from "../components/UI/Header/Header";

const PublicLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default PublicLayout;
