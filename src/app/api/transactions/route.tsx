import { transactionData } from '@/mock/data';

export async function GET() {
  return Response.json(transactionData.transactions);
}
