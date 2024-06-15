import { TableData } from '@/_models/tableData.interface';
import { TransactionAction } from '@/_models/transactionAction.enum';

export type TransactionDataReducerProps = {
  action: TransactionAction;
  payload: Partial<TableData>;
};

const transactionDataReducer = (
  state: any,
  { action, payload }: TransactionDataReducerProps
) => {
  let response = state;

  if (action === TransactionAction.CHANGE_DATE) {
    response = { ...state, dateFilter: payload.dateFilter };
  }

  return response;
};

export default transactionDataReducer;
