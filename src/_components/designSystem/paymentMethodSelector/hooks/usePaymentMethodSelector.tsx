import { PaymentMethod } from '@/_models/paymentMethod.enum';
import { TableAction } from '@/_models/tableAction.enum';
import { TableDataDispatchContext } from '@/_providers/tableData.provider';
import { useContext, useState } from 'react';

export type Selecteds = { [key: string]: boolean };

const usePaymentMethodSelector = () => {
  const [showList, setShowList] = useState(false);
  const [selecteds, setSelecteds] = useState<Selecteds>({});
  const tableDataDispatch = useContext(TableDataDispatchContext);
  const options = [PaymentMethod.DATAPHONE, PaymentMethod.LINK];
  const optionAll = PaymentMethod.ALL;

  const toggleList = () => {
    setShowList(!showList);
  };

  const filter = () => {
    tableDataDispatch({
      action: TableAction.CHANGE_PAYMENT_TYPE,
      payload: {
        paymentMethods: Object.keys(selecteds)
          .filter((key: string) => selecteds[key] && key !== PaymentMethod.ALL)
          .map((key: string) => key as PaymentMethod),
      },
    });
  };

  return {
    showList,
    options,
    optionAll,
    selecteds,
    setSelecteds,
    toggleList,
    filter,
  };
};

export default usePaymentMethodSelector;
