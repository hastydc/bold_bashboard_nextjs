import { PaymentMethod } from '@/_models/paymentMethod.enum';
import { TableAction } from '@/_models/tableAction.enum';
import { Transaction } from '@/_models/transaction.interface';
import {
  TableDataContext,
  TableDataDispatchContext,
} from '@/_providers/tableData.provider';
import { useContext, useEffect, useState } from 'react';

export type Selecteds = { [key: string]: boolean };

const usePaymentMethodSelector = (transactions: Transaction[]) => {
  const [showList, setShowList] = useState(false);
  const [selecteds, setSelecteds] = useState<Selecteds>({});
  const [disabled, setDisabled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const tableDataState = useContext(TableDataContext);
  const options = [PaymentMethod.DATAPHONE, PaymentMethod.LINK];
  const optionAll = PaymentMethod.ALL;
  const tableDataDispatch = useContext(TableDataDispatchContext);

  const toggleList = () => {
    setShowList(!showList);
  };

  const filter = () => {
    tableDataDispatch({
      action: TableAction.CHANGE_PAYMENT_TYPE,
      payload: {
        transactions,
        paymentMethods: Object.keys(selecteds)
          .filter((key: string) => selecteds[key] && key !== PaymentMethod.ALL)
          .map((key: string) => key as PaymentMethod),
      },
    });

    setShowList(false);
  };

  const updateDisabled = () => {
    setDisabled(
      !selecteds[PaymentMethod.DATAPHONE] && !selecteds[PaymentMethod.LINK]
    );
  };

  const updateSelecteds = (option: string) => {
    let response = { ...selecteds };
    let seeAll = false;
    const isAll = option === optionAll;
    const value = !selecteds[option];

    if (isAll) seeAll = !selecteds[optionAll];

    if (isAll && seeAll) {
      response = {
        [PaymentMethod.DATAPHONE]: true,
        [PaymentMethod.LINK]: true,
        [PaymentMethod.ALL]: true,
      };
    } else if (isAll && !seeAll) {
      response = {};
    } else if (!isAll) {
      response = { ...response, [option]: value };

      response[optionAll] =
        response[PaymentMethod.DATAPHONE] && response[PaymentMethod.LINK];
    }

    console.log(response);
    setSelecteds(response);
  };

  const restoreTableData = () => {
    let response = {};

    if (tableDataState.paymentMethods?.length === options.length) {
      response = { [optionAll]: true };
    }

    tableDataState.paymentMethods?.forEach((option: string) => {
      response = { ...response, [option]: true };
      setSelecteds(response);
    });

    setMounted(true);
  };

  useEffect(() => {
    updateDisabled();
  }, [selecteds]);

  useEffect(() => {
    if (mounted) return;

    restoreTableData();
  }, [tableDataState]);

  return {
    showList,
    options,
    optionAll,
    selecteds,
    disabled,
    updateSelecteds,
    toggleList,
    filter,
  };
};

export default usePaymentMethodSelector;
