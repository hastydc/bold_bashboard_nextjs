import { Dispatch, createContext, useReducer } from 'react';
import tableDataReducer, {
  TableDataReducerProps,
} from '../_hooks/tableData.reducer';
import { transactionData } from '@/_mock/data';
import { TableData } from '@/_models/tableData.interface';

export const TableDataContext = createContext<TableData>(transactionData);

export const TableDataDispatchContext = createContext<
  Dispatch<TableDataReducerProps>
>(() => undefined);

type ProviderProps = {
  children: React.ReactNode;
};

const TableDataProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(tableDataReducer, transactionData);

  return (
    <>
      <TableDataContext.Provider value={state}>
        <TableDataDispatchContext.Provider value={dispatch}>
          {children}
        </TableDataDispatchContext.Provider>
      </TableDataContext.Provider>
    </>
  );
};

export default TableDataProvider;
