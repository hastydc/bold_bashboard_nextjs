import Header from '@/_components/layout/header/Header';
import Content from '@/_components/layout/content/Content';
import { Suspense } from 'react';
import DashboardSkeleton from '@/_components/skeletons/dashboard-skeleton/DashboardSkeleton';
import DashboardWrapper from '@/_components/dashboard-wrapper/DashboardWrapper';

const Home = async () => {
  return (
    <>
      <main>
        <Header />

        <Content>
          <Suspense fallback={<DashboardSkeleton />}>
            <DashboardWrapper />
          </Suspense>
        </Content>
      </main>
    </>
  );
};

export default Home;
