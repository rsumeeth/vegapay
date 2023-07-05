import Header from "./components/Header";
import CardSale from "./components/CardSale";
import SideMenu from "./components/SideMenu";

const Dashboard = () => {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100%",
      }}
    >
      <div
        style={{
          width: "auto",
          flex: "0 0 auto",
        }}
      >
        <SideMenu />
      </div>
      <div
        style={{
          flex: "1 1 auto",
        }}
      >
        <Header />
        <CardSale />
      </div>
    </div>
  );
};

export default Dashboard;
