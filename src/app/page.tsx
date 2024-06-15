import Header from '@/_components/layout/header/Header';
import Content from '@/_components/layout/content/Content';
import Dashboard from '@/_components/dashboard/Dashboard';

const Home = () => {
  return (
    <>
      <main>
        <Header />

        <Content>
          <Dashboard />
        </Content>
      </main>
    </>
  );
};

export default Home;
