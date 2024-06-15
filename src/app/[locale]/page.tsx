import Header from '@/_components/layout/header/Header';
import Content from '@/_components/layout/content/Content';
import Dashboard from '@/_components/dashboard/Dashboard';
import { Suspense } from 'react';
import DashboardSkeleton from '@/_components/skeletons/dashboard-skeleton/DashboardSkeleton';
import dynamic from 'next/dynamic';

const Home = () => {
  return (
    <>
      <main>
        <Header />

        <Content>
          <Suspense fallback={<DashboardSkeleton />}>
            <Dashboard />
          </Suspense>
        </Content>
      </main>
    </>
  );
};

export default Home;
