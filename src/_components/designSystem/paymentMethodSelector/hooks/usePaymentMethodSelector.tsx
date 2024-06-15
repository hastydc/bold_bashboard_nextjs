import { PaymentBaseFilter, PaymentMethod } from '@/_models/paymentMethod.enum';
import { useState } from 'react';

const usePaymentMethodSelector = () => {
  const [showList, setShowList] = useState(false);
  const options = [PaymentMethod.DATAPHONE, PaymentMethod.LINK];
  const optionAll = PaymentBaseFilter.ALL;

  const toggleList = () => {
    setShowList(!showList);
  };

  const filter = () => {};

  return { showList, options, optionAll, toggleList, filter };
};

export default usePaymentMethodSelector;
