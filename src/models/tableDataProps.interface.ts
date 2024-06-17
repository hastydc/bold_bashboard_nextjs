import { TableAction } from './tableAction.enum';
import { TableData } from './tableData.interface';

export interface TableDataProps {
  action: TableAction;
  payload: Partial<TableData>;
}
