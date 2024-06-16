import { Dispatch, createContext, useEffect, useReducer } from 'react';
import tableDataReducer, {
  TableDataReducerProps,
} from '../_hooks/tableData.reducer';
import { transactionData } from '@/_mock/data';
import { TableData } from '@/_models/tableData.interface';
import { TableAction } from '@/_models/tableAction.enum';

export const TableDataContext = createContext<TableData>(transactionData);

export const TableDataDispatchContext = createContext<
  Dispatch<TableDataReducerProps>
>(() => undefined);

type ProviderProps = {
  children: React.ReactNode;
  initialState: Partial<TableData>;
};

const TableDataProvider = ({ children, initialState }: ProviderProps) => {
  const [state, dispatch] = useReducer(tableDataReducer, {
    ...transactionData,
    ...initialState,
  });

  useEffect(() => {
    dispatch({ action: TableAction.RESTORE_FILTERS, payload: state });
  }, [initialState]);

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
