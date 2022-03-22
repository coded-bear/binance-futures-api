import { BinanceFAPI } from '../src';

describe('BinanceFAPI', () => {
  const binanceFAPI = new BinanceFAPI(process.env.API_KEY, process.env.API_SECRET);

  // *****************************
  // ******** M A R K E T ********
  // *****************************

  test('TestConnectivity - 200', async () => {
    const response = await binanceFAPI.testConnectivity();
    expect(response.status).toBe(200);
  });

  test('CheckServerTime - 200', async () => {
    const response = await binanceFAPI.checkServerTime();
    expect(response.status).toBe(200);
  });

  test('exchangeInfo - 200', async () => {
    const response = await binanceFAPI.exchangeInfo({
      symbols: JSON.stringify(['BTCUSDT', 'ETHUSDT']),
    });
    expect(response.status).toBe(200);
  });

  test('OrderBook - 200', async () => {
    const response = await binanceFAPI.orderBook({
      symbol: 'BTCUSDT',
      limit: 10,
    });
    expect(response.status).toBe(200);
  });

  test('RecentTrades - 200', async () => {
    const response = await binanceFAPI.recentTrades({
      symbol: 'BTCUSDT',
      limit: 10,
    });
    expect(response.status).toBe(200);
  });

  test('CompressedTrades - 200', async () => {
    const response = await binanceFAPI.compressedTrades({
      symbol: 'BTCUSDT',
      startTime: new Date().getTime(),
      endTime: new Date().getTime(),
      limit: 10,
    });
    expect(response.status).toBe(200);
  });

  test('Klines - 200', async () => {
    const response = await binanceFAPI.klines({
      symbol: 'BTCUSDT',
      interval: '15m',
      startTime: new Date().getTime() - 24 * 60 * 60 * 1000,
      endTime: new Date().getTime(),
      limit: 10,
    });
    expect(response.status).toBe(200);
  });

  test('ContinuousKlines - 200', async () => {
    const response = await binanceFAPI.continuousKlines({
      pair: 'BTCUSDT',
      contractType: 'PERPETUAL',
      interval: '15m',
      startTime: new Date().getTime() - 24 * 60 * 60 * 1000,
      endTime: new Date().getTime(),
      limit: 10,
    });
    expect(response.status).toBe(200);
  });

  test('MarkPriceKlines - 200', async () => {
    const response = await binanceFAPI.markPriceKlines({
      symbol: 'BTCUSDT',
      interval: '15m',
      startTime: new Date().getTime() - 24 * 60 * 60 * 1000,
      endTime: new Date().getTime(),
      limit: 10,
    });
    expect(response.status).toBe(200);
  });

  test('MarkPrice - 200', async () => {
    const response = await binanceFAPI.markPrice({
      symbol: 'BTCUSDT',
    });
    expect(response.status).toBe(200);
  });

  test('FundingRateHistory - 200', async () => {
    const response = await binanceFAPI.fundingRateHistory({
      symbol: 'BTCUSDT',
      startTime: new Date().getTime() - 24 * 60 * 60 * 1000,
      endTime: new Date().getTime(),
      limit: 10,
    });
    expect(response.status).toBe(200);
  });

  test('Get24hTickerPrice - 200', async () => {
    const response = await binanceFAPI.get24hTickerPrice({
      symbol: 'BTCUSDT',
    });
    expect(response.status).toBe(200);
  });

  test('SymbolPriceTicker - 200', async () => {
    const response = await binanceFAPI.symbolPriceTicker({
      symbol: 'BTCUSDT',
    });
    expect(response.status).toBe(200);
  });

  test('SymbolOrderBookTicker - 200', async () => {
    const response = await binanceFAPI.symbolOrderBookTicker({
      symbol: 'BTCUSDT',
    });
    expect(response.status).toBe(200);
  });

  test('OpenInterest - 200', async () => {
    const response = await binanceFAPI.openInterest({
      symbol: 'BTCUSDT',
    });
    expect(response.status).toBe(200);
  });

  test('OpenInterestStatistics - 200', async () => {
    const response = await binanceFAPI.openInterestStatistics({
      symbol: 'BTCUSDT',
      period: '1h',
      startTime: new Date().getTime() - 24 * 60 * 60 * 1000,
      endTime: new Date().getTime(),
      limit: 10,
    });
    expect(response.status).toBe(200);
  });

  test('TopLongShortAccountRatio - 200', async () => {
    const response = await binanceFAPI.topLongShortAccountRatio({
      symbol: 'BTCUSDT',
      period: '1h',
      startTime: new Date().getTime() - 24 * 60 * 60 * 1000,
      endTime: new Date().getTime(),
      limit: 10,
    });
    expect(response.status).toBe(200);
  });

  test('TopLongShortPositionRatio - 200', async () => {
    const response = await binanceFAPI.topLongShortPositionRatio({
      symbol: 'BTCUSDT',
      period: '1h',
      startTime: new Date().getTime() - 24 * 60 * 60 * 1000,
      endTime: new Date().getTime(),
      limit: 10,
    });
    expect(response.status).toBe(200);
  });

  test('GlobalLongShortAccountRatio - 200', async () => {
    const response = await binanceFAPI.globalLongShortAccountRatio({
      symbol: 'BTCUSDT',
      period: '1h',
      startTime: new Date().getTime() - 24 * 60 * 60 * 1000,
      endTime: new Date().getTime(),
      limit: 10,
    });
    expect(response.status).toBe(200);
  });

  test('TopTraderLongShortRatio - 200', async () => {
    const response = await binanceFAPI.topTraderLongShortRatio({
      symbol: 'BTCUSDT',
      period: '1h',
      startTime: new Date().getTime() - 24 * 60 * 60 * 1000,
      endTime: new Date().getTime(),
      limit: 10,
    });
    expect(response.status).toBe(200);
  });

  test('CompositeIndexSymbolInfo - 200', async () => {
    const response = await binanceFAPI.compositeIndexSymbolInfo({
      symbol: 'DEFIUSDT',
    });
    expect(response.status).toBe(200);
  });

  test('MultiAssetsModeAssetIndex - 200', async () => {
    const response = await binanceFAPI.multiAssetsModeAssetIndex({
      symbol: 'BTCUSD',
    });
    expect(response.status).toBe(200);
  });

  // *****************************
  // ******* A C C O U N T *******
  // *****************************

  test('AccountInfo - 200', async () => {
    const response = await binanceFAPI.accountInfo();
    expect(response.status).toBe(200);
  });

  test('GetIncomeHistory - 200', async () => {
    const response = await binanceFAPI.getIncomeHistory();
    expect(response.status).toBe(200);
  });

  test('PositionInfo - 200', async () => {
    const response = await binanceFAPI.positionInfo();
    expect(response.status).toBe(200);
  });

  test('AccountTradeList - 200', async () => {
    const response = await binanceFAPI.accountTradeList({
      symbol: 'BTCUSDT',
    });
    expect(response.status).toBe(200);
  });

  test('AccountBalance - 200', async () => {
    const response = await binanceFAPI.accountBalance();
    expect(response.status).toBe(200);
  });

  test('LeverageBrackets - 200', async () => {
    const response = await binanceFAPI.leverageBrackets();
    expect(response.status).toBe(200);
  });

  test('PositionADLQuantile - 200', async () => {
    const response = await binanceFAPI.positionADLQuantile();
    expect(response.status).toBe(200);
  });

  test('UserCommissionRate - 200', async () => {
    const response = await binanceFAPI.userCommissionRate({
      symbol: 'BTCUSDT',
    });
    expect(response.status).toBe(200);
  });

  test('GetCurrentMultiAssetsMode - 200', async () => {
    const response = await binanceFAPI.getCurrentMultiAssetsMode();
    expect(response.status).toBe(200);
  });

  // test('ChangeMultiAssetsMode - 200', async () => {
  //   const response = await binanceFAPI.changeMultiAssetsMode({
  //     multiAssetsMargin: false,
  //   });
  //   expect(response.status).toBe(200);
  // });

  // *****************************
  // ********* O R D E R *********
  // *****************************

  // test('NewOrder - 200', async () => {
  //   const response = await binanceFAPI.newOrder({
  //     symbol: 'BTCUSDT',
  //     side: '',
  //     positionSide: 'BOTH',
  //     type: '',
  //     timeInForce: '',
  //     quantity: 1,
  //     reduceOnly: '',
  //     price: 100,
  //     newClientOrderId: 1192355366,
  //     stopPrice: 100,
  //     closePosition: true,
  //     activationPrice: '',
  //     callbackRate: 1,
  //     workingType: 'CONTRACT_PRICE',
  //     newOrderRespType: 'ACK',
  //   });
  //   expect(response.status).toBe(200);
  // });

  // test('PlaceMultipleOrders - 200', async () => {
  //   const response = await binanceFAPI.placeMultipleOrders({
  //     batchOrders: '',
  //   });
  //   expect(response.status).toBe(200);
  // });

  test('QueryOrder - 200', async () => {
    const response = await binanceFAPI.queryOrder({
      symbol: 'BTCUSDT',
    });
    expect(response.status).toBe(200);
  });

  // test('CancelOrder - 200', async () => {
  //   const response = await binanceFAPI.cancelOrder({
  //     symbol: 'BTCUSDT',
  //   });
  //   expect(response.status).toBe(200);
  // });

  // test('CancelAllOpenOrders - 200', async () => {
  //   const response = await binanceFAPI.cancelAllOpenOrders({
  //     symbol: 'BTCUSDT',
  //   });
  //   expect(response.status).toBe(200);
  // });

  // test('AutoCancelAllOpenOrders - 200', async () => {
  //   const response = await binanceFAPI.autoCancelAllOpenOrders({
  //     symbol: 'BTCUSDT',
  //     countdownTime: 1000,
  //   });
  //   expect(response.status).toBe(200);
  // });

  // test('CancelMultipleOrders - 200', async () => {
  //   const response = await binanceFAPI.cancelMultipleOrders({
  //     symbol: 'BTCUSDT',
  //   });
  //   expect(response.status).toBe(200);
  // });

  test('GetCurrentAllOpenOrders - 200', async () => {
    const response = await binanceFAPI.getCurrentAllOpenOrders({
      symbol: 'BTCUSDT',
    });
    expect(response.status).toBe(200);
  });

  test('QueryCurrentOpenOrder - 200', async () => {
    const response = await binanceFAPI.queryCurrentOpenOrder({
      symbol: 'BTCUSDT',
    });
    expect(response.status).toBe(200);
  });

  test('AllOrders - 200', async () => {
    const response = await binanceFAPI.allOrders({
      symbol: 'BTCUSDT',
      startTime: new Date().getTime() - 24 * 60 * 60 * 1000,
      endTime: new Date().getTime(),
      limit: 10,
    });
    expect(response.status).toBe(200);
  });

  test('GetForceOrders - 200', async () => {
    const response = await binanceFAPI.getForceOrders({
      symbol: 'BTCUSDT',
      autoCloseType: 'LIQUIDATION',
      startTime: new Date().getTime() - 24 * 60 * 60 * 1000,
      endTime: new Date().getTime(),
      limit: 10,
    });
    expect(response.status).toBe(200);
  });

  // *****************************
  // ********* T R A D E *********
  // *****************************

  test('ChangeMarginType - 200', async () => {
    const response = await binanceFAPI.changeMarginType({
      symbol: 'BTCUSDT',
      marginType: 'ISOLATED',
    });
    expect(response.status).toBe(200);
  });

  test('ChangeInitialLeverage - 200', async () => {
    const response = await binanceFAPI.changeInitialLeverage({
      symbol: 'BTCUSDT',
      leverage: 20,
    });
    expect(response.status).toBe(200);
  });

  // test('ModifyIsolatedPositionMargin - 200', async () => {
  //   const response = await binanceFAPI.modifyIsolatedPositionMargin({
  //     symbol: 'BTCUSDT',
  //     positionSide: 'BOTH',
  //     amount: 100,
  //     type: 1,
  //   });
  //   expect(response.status).toBe(200);
  // });

  test('GetdPositionMarginChangeHistory - 200', async () => {
    const response = await binanceFAPI.getdPositionMarginChangeHistory({
      symbol: 'BTCUSDT',
      type: 1,
      startTime: new Date().getTime() - 24 * 60 * 60 * 1000,
      endTime: new Date().getTime(),
      limit: 10,
    });
    expect(response.status).toBe(200);
  });

  test('ChangePositionMode - 200', async () => {
    const response = await binanceFAPI.changePositionMode({
      dualSidePosition: false,
    });
    expect(response.status).toBe(200);
  });

  test('GetCurrentPositionMode - 200', async () => {
    const response = await binanceFAPI.getCurrentPositionMode();
    expect(response.status).toBe(200);
  });

  test('GetTradingStatus - 200', async () => {
    const response = await binanceFAPI.getTradingStatus({
      symbol: 'BTCUSDT',
    });
    expect(response.status).toBe(200);
  });

  // *****************************
  // *** D A T A * S T R E A M ***
  // *****************************

  test('CreateNewListenKey - 200', async () => {
    const response = await binanceFAPI.createNewListenKey();
    expect(response.status).toBe(200);
  });

  test('RenewNewListenKey - 200', async () => {
    const response = await binanceFAPI.renewNewListenKey();
    expect(response.status).toBe(200);
  });

  test('DeleteNewListenKey - 200', async () => {
    const response = await binanceFAPI.deleteNewListenKey();
    expect(response.status).toBe(200);
  });
});
