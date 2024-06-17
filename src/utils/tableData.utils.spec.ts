import { transactionData, transactions as baseTransactions } from '@/mock/data';
import tableDataUtils from './tableData.utils';
import { TableAction } from '@/models/tableAction.enum';
import { DateFilter } from '@/models/dateFilter.enum';
import { TableDataProps } from '@/models/tableDataProps.interface';
import { PaymentMethod } from '@/models/paymentMethod.enum';

describe('TableDataUtils', () => {
  it('given: all transactions | when i change dateFilter to today | then i get some transactions (3)', () => {
    const payload: TableDataProps = {
      action: TableAction.CHANGE_DATE,
      payload: { dateFilter: DateFilter.TODAY, transactions: baseTransactions },
    };

    const { transactions, totalSales } = tableDataUtils(transactionData, {
      ...payload,
    });

    expect(transactions.length).toEqual(3);
    expect(totalSales).toEqual(75000);
  });

  it('given: all transactions | when i change dateFilter to WEEK | then i will get some transactions (6)', () => {
    const payload: TableDataProps = {
      action: TableAction.CHANGE_DATE,
      payload: { dateFilter: DateFilter.WEEK, transactions: baseTransactions },
    };

    const { transactions, totalSales } = tableDataUtils(transactionData, {
      ...payload,
    });

    expect(transactions.length).toEqual(6);
    expect(totalSales).toEqual(150000);
  });

  it('given: all transactions | when i change dateFilter to WEEK | then i get some transactions (16)', () => {
    const payload: TableDataProps = {
      action: TableAction.CHANGE_DATE,
      payload: {
        dateFilter: DateFilter.MONTH,
        transactions: baseTransactions,
        monthName: 'June',
      },
    };

    const { transactions, monthName, totalSales } = tableDataUtils(
      transactionData,
      { ...payload }
    );

    expect(transactions.length).toEqual(16);
    expect(monthName).toEqual('June');
    expect(totalSales).toEqual(400000);
  });

  it('given: all transactions | when i change paymentMethod to DATAPHONE | then i get some transactions (2)', () => {
    const payload: TableDataProps = {
      action: TableAction.CHANGE_PAYMENT_TYPE,
      payload: {
        paymentMethods: [PaymentMethod.DATAPHONE],
        transactions: baseTransactions,
      },
    };

    const { transactions, totalSales } = tableDataUtils(transactionData, {
      ...payload,
    });

    expect(transactions.length).toEqual(2);
    expect(totalSales).toEqual(50000);
  });

  it('given: all transactions | when i change paymentMethod to LINK | then i get some transactions (1)', () => {
    const payload: TableDataProps = {
      action: TableAction.CHANGE_PAYMENT_TYPE,
      payload: {
        paymentMethods: [PaymentMethod.LINK],
        transactions: baseTransactions,
      },
    };

    const { transactions, totalSales } = tableDataUtils(transactionData, {
      ...payload,
    });

    expect(transactions.length).toEqual(1);
    expect(totalSales).toEqual(25000);
  });
});
