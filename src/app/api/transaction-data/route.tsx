import { transactionData } from '@/_mock/data';

export async function GET() {
  return Response.json(transactionData);
}
