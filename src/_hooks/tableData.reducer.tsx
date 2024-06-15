import { TableData } from '@/_models/tableData.interface';
import { TransactionAction } from '@/_models/transactionAction.enum';

export type TableDataReducerProps = {
  action: TransactionAction;
  payload: Partial<TableData>;
};

const tableDataReducer = (
  state: TableData,
  { action, payload }: TableDataReducerProps
) => {
  let response = state;

  if (action === TransactionAction.CHANGE_DATE) {
    response = { ...state, dateFilter: payload.dateFilter! };
  }

  if (action === TransactionAction.CHANGE_PAYMENT_TYPE) {
    response = { ...state };
  }

  return response;
};

export default tableDataReducer;
