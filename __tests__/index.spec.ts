import { BinanceFAPI } from '../src';

describe('BinanceFAPI', () => {
  const binanceFAPI = new BinanceFAPI(
    process.env.API_KEY,
    process.env.API_SECRET,
  );

  test('AccountInfo - 200', async () => {
    const response = await binanceFAPI.accountInfo();
    expect(response.status).toBe(200);
  });
});
