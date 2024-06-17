import { Dispatch, createContext, useEffect, useReducer } from 'react';
import { transactionData } from '@/mock/data';
import { TableData } from '@/models/tableData.interface';
import { TableAction } from '@/models/tableAction.enum';
import { TableDataProps } from '@/models/tableDataProps.interface';
import tableDataUtils from '@/utils/tableData.utils';

export const TableDataContext = createContext<TableData>(transactionData);

export const TableDataDispatchContext = createContext<Dispatch<TableDataProps>>(
  () => undefined
);

type ProviderProps = {
  children: React.ReactNode;
  initialState: Partial<TableData>;
};

const TableDataProvider = ({ children, initialState }: ProviderProps) => {
  const [state, dispatch] = useReducer(tableDataUtils, {
    ...transactionData,
    ...initialState,
  });

  useEffect(() => {
    dispatch({
      action: TableAction.RESTORE_FILTERS,
      payload: { ...transactionData, ...initialState },
    });
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
