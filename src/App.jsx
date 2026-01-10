import React from "react";
import TopMenu from "./components/TopMenu";
import SideDrawer from "./components/SideDrawer";
import ArticlePage from "./pages/ArticlePage";
import "./styles/App.css";
import "./styles/TopMenu.css";

function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = () => setDrawerOpen((v) => !v);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <TopMenu onMenuClick={toggleDrawer} />
      <SideDrawer open={drawerOpen} onClose={closeDrawer} />

      <div className="app-root">
        <ArticlePage />
      </div>
    </>
  );
}

export default App;
