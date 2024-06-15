import { Dispatch, createContext, useReducer } from 'react';
import transactionDataReducer, {
  TransactionDataReducerProps,
} from './reducers/transactionData.reducer';
import { transactionData } from '@/_mock/data';
import { TransactionData } from '@/_models/transactionData.interface';

export const TransactionDataContext =
  createContext<TransactionData>(transactionData);

export const TransactionDataDispatchContext = createContext<
  Dispatch<TransactionDataReducerProps>
>(() => undefined);

type ProviderProps = {
  children: React.ReactNode;
};

const TransactionDataProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(transactionDataReducer, transactionData);

  return (
    <>
      <TransactionDataContext.Provider value={state}>
        <TransactionDataDispatchContext.Provider value={dispatch}>
          {children}
        </TransactionDataDispatchContext.Provider>
      </TransactionDataContext.Provider>
    </>
  );
};

export default TransactionDataProvider;
