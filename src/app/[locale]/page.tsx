import Header from '@/components/layout/header/Header';
import Content from '@/components/layout/content/Content';
import { Suspense } from 'react';
import DashboardSkeleton from '@/components/skeletons/dashboard-skeleton/DashboardSkeleton';
import DashboardWrapper from '@/components/dashboard-wrapper/DashboardWrapper';

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
