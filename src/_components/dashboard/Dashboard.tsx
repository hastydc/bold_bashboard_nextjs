import { TransactionData } from '@/models/transactionData.interface';
import PriceCard from '../designSystem/priceCard/PriceCard';
import Style from './dashboard.module.scss';
import { TransactionDate } from '@/models/transactionDate.enum';
import { PaymentMethod } from '@/models/paymentMethod.enum';
import DateSelector from '../designSystem/dateSelector/DateSelector';
import PaymentMethodSelector from '../designSystem/paymentMethodSelector/PaymentMethodSelector';

const Dashboard = () => {
  const transactionData: TransactionData = {
    transactions: [],
    totalSales: 325485,
    dateFilter: TransactionDate.TODAY,
    paymentMethods: [PaymentMethod.DATAPHONE, PaymentMethod.LINK],
    monthName: 'Junio',
  };

  return (
    <>
      <div className={Style.dashboard}>
        <section className={Style.header}>
          <div className={Style.card}>
            <PriceCard {...transactionData} />
          </div>

          <div className={Style.actions}>
            <div className={Style.dateSelector}>
              <DateSelector {...transactionData} />
            </div>

            <div className={Style.paymentSelector}>
              <PaymentMethodSelector {...transactionData} />
            </div>
          </div>
        </section>

        <section className={Style.table}></section>
      </div>
    </>
  );
};

export default Dashboard;
