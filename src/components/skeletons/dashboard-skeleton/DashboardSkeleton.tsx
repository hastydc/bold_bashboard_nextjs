import Style from './dashboardSkeleton.module.scss';
import SkeletonLine from './skeleton-line/SkeletonLine';

const DashboardSkeleton = () => {
  return (
    <>
      <div className={Style.dashboardSkeleton}>
        <div className={Style.header}>
          <div className={Style.card}>
            <div className={Style.title}>
              <SkeletonLine />
            </div>

            <div className={Style.content}>
              <SkeletonLine />
            </div>
          </div>

          <div className={Style.actions}>
            <div className={Style.date}>
              <div className={Style.dateBox}>
                <SkeletonLine />
              </div>

              <div className={Style.dateBox}>
                <SkeletonLine />
              </div>

              <div className={Style.dateBox}>
                <SkeletonLine />
              </div>
            </div>

            <div className={Style.filter}>
              <SkeletonLine />
            </div>
          </div>
        </div>

        <div className={Style.table}>
          <div className={Style.title}>
            <SkeletonLine />
          </div>

          <div className={Style.content}>
            <SkeletonLine />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSkeleton;
