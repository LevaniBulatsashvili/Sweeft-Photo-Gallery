import PageContainer from "./PageContainer";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div className="h-[100dvh] gap-2 flex flex-col bg-[#f1f1f1]">
      <Header />
      <PageContainer />
    </div>
  );
};

export default MainLayout;
