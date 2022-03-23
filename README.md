# binance-futures-api

[![npm version](https://img.shields.io/npm/v/binance-futures-api)](https://www.npmjs.com/package/binance-futures-api) [![npm](https://img.shields.io/npm/l/binance-futures-api)](https://github.com/coded-bear/binance-futures-api/blob/main/LICENSE) [![npm](https://img.shields.io/bundlephobia/minzip/binance-futures-api)](https://www.npmjs.com/package/binance-futures-api)

Futures API for Binance market

## Installation

```
npm install --save binance-futures-api
```

## Getting started

```ts
import { BinanceFAPI } from 'binance-futures-api';

const binanceFAPI = new BinanceFAPI(API_KEY, API_SECRET);
```

Tip: For "Market" methods you don't need API_KEY and API_SECRET

## API

### Market

#### Test Connectivity

```ts
await binanceFAPI.testConnectivity();
```

#### Check Server Time

```ts
await binanceFAPI.checkServerTime();
```

#### Exchange Information

```ts
await binanceFAPI.exchangeInfo({ symbols: JSON.stringify(['BTCUSDT', 'ETHUSDT']) });
```

#### Order Book

```ts
await binanceFAPI.orderBook({ symbol: 'BTCUSDT' });
```

#### Recent Trades List

```ts
await binanceFAPI.recentTrades({
  symbol: 'BTCUSDT',
  limit: 10,
});
```

#### Compressed/Aggregate Trades List

```ts
await binanceFAPI.compressedTrades({
  symbol: 'BTCUSDT',
  startTime: new Date().getTime(),
  endTime: new Date().getTime(),
  limit: 10,
});
```

#### Kline/Candlestick Data

```ts
await binanceFAPI.klines({
  symbol: 'BTCUSDT',
  interval: '15m',
  startTime: new Date().getTime() - 24 * 60 * 60 * 1000,
  endTime: new Date().getTime(),
  limit: 10,
});
```

#### Continuous Contract Kline/Candlestick Data

```ts
await binanceFAPI.continuousKlines({
  pair: 'BTCUSDT',
  contractType: 'PERPETUAL',
  interval: '15m',
  startTime: new Date().getTime() - 24 * 60 * 60 * 1000,
  endTime: new Date().getTime(),
  limit: 10,
});
```

#### Mark Price Kline/Candlestick Data

```ts
await binanceFAPI.markPriceKlines({
  symbol: 'BTCUSDT',
  interval: '15m',
  startTime: new Date().getTime() - 24 * 60 * 60 * 1000,
  endTime: new Date().getTime(),
  limit: 10,
});
```

#### Mark Price

```ts
await binanceFAPI.markPrice({ symbol: 'BTCUSDT' });
```

#### Get Funding Rate History

```ts
await binanceFAPI.fundingRateHistory({
  symbol: 'BTCUSDT',
  startTime: new Date().getTime() - 24 * 60 * 60 * 1000,
  endTime: new Date().getTime(),
  limit: 10,
});
```

#### 24hr Ticker Price Change Statistics

```ts
await binanceFAPI.get24hTickerPrice({ symbol: 'BTCUSDT' });
```

#### Symbol Price Ticker

```ts
await binanceFAPI.symbolPriceTicker({ symbol: 'BTCUSDT' });
```

#### Symbol Order Book Ticker

```ts
await binanceFAPI.symbolOrderBookTicker({ symbol: 'BTCUSDT' });
```

#### Open Interest

```ts
await binanceFAPI.openInterest({ symbol: 'BTCUSDT' });
```

#### Open Interest Statistics

```ts
await binanceFAPI.openInterestStatistics({
  symbol: 'BTCUSDT',
  period: '1h',
  limit: 10,
});
```

#### Top Trader Long/Short Ratio (Accounts)

```ts
await binanceFAPI.topLongShortAccountRatio({
  symbol: 'BTCUSDT',
  period: '1h',
  limit: 10,
});
```

#### Top Trader Long/Short Ratio (Positions)

```ts
await binanceFAPI.topLongShortPositionRatio({
  symbol: 'BTCUSDT',
  period: '1h',
  limit: 10,
});
```

#### Long/Short Ratio

```ts
await binanceFAPI.globalLongShortAccountRatio({
  symbol: 'BTCUSDT',
  period: '1h',
  limit: 10,
});
```

#### Taker Buy/Sell Volume

```ts
await binanceFAPI.topTraderLongShortRatio({
  symbol: 'BTCUSDT',
  period: '1h',
  limit: 10,
});
```

#### Composite Index Symbol Information

```ts
await binanceFAPI.compositeIndexSymbolInfo({ symbol: 'DEFIUSDT' });
```

#### Multi-Assets Mode Asset Index

```ts
await binanceFAPI.multiAssetsModeAssetIndex({ symbol: 'BTCUSD' });
```

### Account

#### Account Information

```ts
await binanceFAPI.accountInfo();
```

#### Get Income History

```ts
await binanceFAPI.getIncomeHistory();
```

#### Position Information

```ts
await binanceFAPI.positionInfo();
```

#### Account Trade List

```ts
await binanceFAPI.accountTradeList();
```

#### Future Account Balance

```ts
await binanceFAPI.accountBalance();
```

#### Notional and Leverage Brackets (USER_DATA)

```ts
await binanceFAPI.leverageBrackets();
```

#### Position ADL Quantile Estimation (USER_DATA)

```ts
await binanceFAPI.positionADLQuantile();
```

#### User Commission Rate (USER_DATA)

```ts
await binanceFAPI.userCommissionRate({ symbol: 'BTCUSDT' });
```

#### Get Current Multi-Assets Mode

```ts
await binanceFAPI.getCurrentMultiAssetsMode();
```

#### Change Multi-Assets Mode

```ts
await binanceFAPI.changeMultiAssetsMode({ multiAssetsMargin: false });
```

### Order

#### New Order (TRADE)

```ts
await binanceFAPI.newOrder({
  symbol: 'BTCUSDT',
  side: 'BUY',
  positionSide: 'BOTH',
  type: 'MARKET',
  quantity: 1,
});
```

#### Place Multiple Orders (TRADE)

```ts
await binanceFAPI.placeMultipleOrders({ batchOrders: [] });
```

#### Query Order

```ts
await binanceFAPI.queryOrder({ symbol: 'BTCUSDT' });
```

#### Cancel Order

```ts
await binanceFAPI.cancelOrder({ symbol: 'BTCUSDT' });
```

#### Cancel All Open Orders

```ts
await binanceFAPI.cancelAllOpenOrders({ symbol: 'BTCUSDT' });
```

#### Auto-Cancel All Open Orders (TRADE)

```ts
await binanceFAPI.autoCancelAllOpenOrders({ symbol: 'BTCUSDT' });
```

#### Cancel Multiple Orders (TRADE)

```ts
await binanceFAPI.cancelMultipleOrders({ symbol: 'BTCUSDT' });
```

#### Current All Open Orders (USER_DATA)

```ts
await binanceFAPI.getCurrentAllOpenOrders({ symbol: 'BTCUSDT' });
```

#### Query Current Open Order (USER_DATA)

```ts
await binanceFAPI.queryCurrentOpenOrder({ symbol: 'BTCUSDT' });
```

#### All Orders

```ts
await binanceFAPI.allOrders({
  symbol: 'BTCUSDT',
  limit: 10,
});
```

#### User's Force Orders (USER_DATA)

```ts
await binanceFAPI.getForceOrders({
  symbol: 'BTCUSDT',
  limit: 10,
});
```

### Trade

#### Change Margin Type

```ts
await binanceFAPI.changeMarginType({
  symbol: 'BTCUSDT',
  marginType: 'ISOLATED',
});
```

#### Change Initial Leverage

```ts
await binanceFAPI.changeInitialLeverage({
  symbol: 'BTCUSDT',
  leverage: 20,
});
```

#### Modify Isolated Position Margin

```ts
await binanceFAPI.modifyIsolatedPositionMargin({
  symbol: 'BTCUSDT',
  positionSide: 'BOTH',
  amount: 100,
});
```

#### Get Position Margin Change History

```ts
await binanceFAPI.getPositionMarginChangeHistory({
  symbol: 'BTCUSDT',
  limit: 10,
});
```

#### Change Position Mode (TRADE)

```ts
await binanceFAPI.changePositionMode({ dualSidePosition: false });
```

#### Get Current Position Mode (USER_DATA)

```ts
await binanceFAPI.getCurrentPositionMode();
```

#### User API Trading Quantitative Rules Indicators (USER_DATA)

```ts
await binanceFAPI.getTradingStatus({ symbol: 'BTCUSDT' });
```

### Data Stream

#### Create Listen Key

```ts
await binanceFAPI.createListenKey();
```

#### Renew Listen Key

```ts
await binanceFAPI.renewListenKey();
```

#### Delete Listen Key

```ts
await binanceFAPI.deleteListenKey();
```

Full data for methods according to Binance API
