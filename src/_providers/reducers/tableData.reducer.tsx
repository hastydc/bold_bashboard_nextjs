import { TransactionAction } from '@/_models/transactionAction.enum';
import { TransactionData } from '@/_models/transactionData.interface';

export type TransactionDataReducerProps = {
  action: TransactionAction;
  payload: Partial<TransactionData>;
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
