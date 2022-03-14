import { Market } from '../src';

describe('Market', () => {
  test('TestConnectivity - 200 status code', async () => {
    const response = await Market.testConnectivity();
    expect(response.status).toBe(200);
  });

  test('CheckServerTime - 200 status code', async () => {
    const response = await Market.checkServerTime();
    expect(response.status).toBe(200);
  });

  test('exchangeInfo - 200 status code', async () => {
    const response = await Market.exchangeInfo({
      symbols: JSON.stringify(['BTCUSDT', 'ETHUSDT']),
    });
    expect(response.status).toBe(200);
  });

  test('OrderBook - 200 status code', async () => {
    const response = await Market.orderBook({
      symbol: 'BTCUSDT',
      limit: 10,
    });
    expect(response.status).toBe(200);
  });

  test('RecentTrades - 200 status code', async () => {
    const response = await Market.recentTrades({
      symbol: 'BTCUSDT',
      limit: 10,
    });
    expect(response.status).toBe(200);
  });

  test('CompressedTrades - 200 status code', async () => {
    const response = await Market.compressedTrades({
      symbol: 'BTCUSDT',
      startTime: new Date().getTime(),
      endTime: new Date().getTime(),
      limit: 10,
    });
    expect(response.status).toBe(200);
  });

  test('Klines - 200 status code', async () => {
    const response = await Market.klines({
      symbol: 'BTCUSDT',
      interval: '15m',
      startTime: new Date().getTime() - 24 * 60 * 60 * 1000,
      endTime: new Date().getTime(),
      limit: 10,
    });
    expect(response.status).toBe(200);
  });

  test('ContinuousKlines - 200 status code', async () => {
    const response = await Market.continuousKlines({
      pair: 'BTCUSDT',
      contractType: 'PERPETUAL',
      interval: '15m',
      startTime: new Date().getTime() - 24 * 60 * 60 * 1000,
      endTime: new Date().getTime(),
      limit: 10,
    });
    expect(response.status).toBe(200);
  });

  test('MarkPriceKlines - 200 status code', async () => {
    const response = await Market.markPriceKlines({
      symbol: 'BTCUSDT',
      interval: '15m',
      startTime: new Date().getTime() - 24 * 60 * 60 * 1000,
      endTime: new Date().getTime(),
      limit: 10,
    });
    expect(response.status).toBe(200);
  });

  test('MarkPrice - 200 status code', async () => {
    const response = await Market.markPrice({
      symbol: 'BTCUSDT',
    });
    expect(response.status).toBe(200);
  });

  test('FundingRateHistory - 200 status code', async () => {
    const response = await Market.fundingRateHistory({
      symbol: 'BTCUSDT',
      startTime: new Date().getTime() - 24 * 60 * 60 * 1000,
      endTime: new Date().getTime(),
      limit: 10,
    });
    expect(response.status).toBe(200);
  });

  test('Get24hTickerPrice - 200 status code', async () => {
    const response = await Market.get24hTickerPrice({
      symbol: 'BTCUSDT',
    });
    expect(response.status).toBe(200);
  });

  test('SymbolPriceTicker - 200 status code', async () => {
    const response = await Market.symbolPriceTicker({
      symbol: 'BTCUSDT',
    });
    expect(response.status).toBe(200);
  });

  test('SymbolOrderBookTicker - 200 status code', async () => {
    const response = await Market.symbolOrderBookTicker({
      symbol: 'BTCUSDT',
    });
    expect(response.status).toBe(200);
  });

  test('OpenInterest - 200 status code', async () => {
    const response = await Market.openInterest({
      symbol: 'BTCUSDT',
    });
    expect(response.status).toBe(200);
  });

  test('OpenInterestStatistics - 200 status code', async () => {
    const response = await Market.openInterestStatistics({
      symbol: 'BTCUSDT',
      period: '1h',
      startTime: new Date().getTime() - 24 * 60 * 60 * 1000,
      endTime: new Date().getTime(),
      limit: 10,
    });
    expect(response.status).toBe(200);
  });

  test('TopLongShortAccountRatio - 200 status code', async () => {
    const response = await Market.topLongShortAccountRatio({
      symbol: 'BTCUSDT',
      period: '1h',
      startTime: new Date().getTime() - 24 * 60 * 60 * 1000,
      endTime: new Date().getTime(),
      limit: 10,
    });
    expect(response.status).toBe(200);
  });

  test('TopLongShortPositionRatio - 200 status code', async () => {
    const response = await Market.topLongShortPositionRatio({
      symbol: 'BTCUSDT',
      period: '1h',
      startTime: new Date().getTime() - 24 * 60 * 60 * 1000,
      endTime: new Date().getTime(),
      limit: 10,
    });
    expect(response.status).toBe(200);
  });

  test('GlobalLongShortAccountRatio - 200 status code', async () => {
    const response = await Market.globalLongShortAccountRatio({
      symbol: 'BTCUSDT',
      period: '1h',
      startTime: new Date().getTime() - 24 * 60 * 60 * 1000,
      endTime: new Date().getTime(),
      limit: 10,
    });
    expect(response.status).toBe(200);
  });

  test('TopTraderLongShortRatio - 200 status code', async () => {
    const response = await Market.topTraderLongShortRatio({
      symbol: 'BTCUSDT',
      period: '1h',
      startTime: new Date().getTime() - 24 * 60 * 60 * 1000,
      endTime: new Date().getTime(),
      limit: 10,
    });
    expect(response.status).toBe(200);
  });

  test('CompositeIndexSymbolInfo - 200 status code', async () => {
    const response = await Market.compositeIndexSymbolInfo({
      symbol: 'DEFIUSDT',
    });
    expect(response.status).toBe(200);
  });

  test('MultiAssetsModeAssetIndex - 200 status code', async () => {
    const response = await Market.multiAssetsModeAssetIndex({
      symbol: 'BTCUSD',
    });
    expect(response.status).toBe(200);
  });
});
