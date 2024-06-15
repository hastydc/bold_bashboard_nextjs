import { TransactionData } from '@/_models/transactionData.interface';

const useDashboardApi = () => {
  const getData = async (): Promise<TransactionData> => {
    const response = await fetch(`${process.env.API_URL}/transaction-data`);
    const transactionData: TransactionData = await response.json();

    return transactionData;
  };

  return { getData };
};

export default useDashboardApi;
