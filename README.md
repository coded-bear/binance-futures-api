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

#### Test connectivity

```ts
await binanceFAPI.testConnectivity();
```

#### Check server time

```ts
await binanceFAPI.checkServerTime();
```

#### Exchange info

```ts
await binanceFAPI.exchangeInfo({ symbols: JSON.stringify(['BTCUSDT', 'ETHUSDT']) });
```

#### Order Book

```ts
await binanceFAPI.orderBook({ symbol: 'BTCUSDT' });
```

#### Recent trades

```ts
await binanceFAPI.recentTrades({
  symbol: 'BTCUSDT',
  limit: 10,
});
```

#### Compressed trades

```ts
await binanceFAPI.compressedTrades({
  symbol: 'BTCUSDT',
  startTime: new Date().getTime(),
  endTime: new Date().getTime(),
  limit: 10,
});
```

#### Klines

```ts
await binanceFAPI.klines({
  symbol: 'BTCUSDT',
  interval: '15m',
  startTime: new Date().getTime() - 24 * 60 * 60 * 1000,
  endTime: new Date().getTime(),
  limit: 10,
});
```

#### Continuous klines

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

#### Mark price klines

```ts
await binanceFAPI.markPriceKlines({
  symbol: 'BTCUSDT',
  interval: '15m',
  startTime: new Date().getTime() - 24 * 60 * 60 * 1000,
  endTime: new Date().getTime(),
  limit: 10,
});
```

#### Mark price

```ts
await binanceFAPI.markPrice({ symbol: 'BTCUSDT' });
```

#### Funding rate history

```ts
await binanceFAPI.fundingRateHistory({
  symbol: 'BTCUSDT',
  startTime: new Date().getTime() - 24 * 60 * 60 * 1000,
  endTime: new Date().getTime(),
  limit: 10,
});
```

#### Get 24h ticker price

```ts
await binanceFAPI.get24hTickerPrice({ symbol: 'BTCUSDT' });
```

#### Symbol price ticker

```ts
await binanceFAPI.symbolPriceTicker({ symbol: 'BTCUSDT' });
```

#### Symbol order book ticker

```ts
await binanceFAPI.symbolOrderBookTicker({ symbol: 'BTCUSDT' });
```

#### Open interest

```ts
await binanceFAPI.openInterest({ symbol: 'BTCUSDT' });
```

#### Open interest statistics

```ts
await binanceFAPI.openInterestStatistics({
  symbol: 'BTCUSDT',
  period: '1h',
  limit: 10,
});
```

#### Top long short account ratio

```ts
await binanceFAPI.topLongShortAccountRatio({
  symbol: 'BTCUSDT',
  period: '1h',
  limit: 10,
});
```

#### Top long short position ratio

```ts
await binanceFAPI.topLongShortPositionRatio({
  symbol: 'BTCUSDT',
  period: '1h',
  limit: 10,
});
```

#### Global long short account ratio

```ts
await binanceFAPI.globalLongShortAccountRatio({
  symbol: 'BTCUSDT',
  period: '1h',
  limit: 10,
});
```

#### Top trader long short ratio

```ts
await binanceFAPI.topTraderLongShortRatio({
  symbol: 'BTCUSDT',
  period: '1h',
  limit: 10,
});
```

#### Composite index symbol info

```ts
await binanceFAPI.compositeIndexSymbolInfo({ symbol: 'DEFIUSDT' });
```

#### Multi-Assets mode asset index

```ts
await binanceFAPI.multiAssetsModeAssetIndex({ symbol: 'BTCUSD' });
```

### Account

#### Account info

```ts
await binanceFAPI.accountInfo();
```

#### Get income history

```ts
await binanceFAPI.getIncomeHistory();
```

#### Position info

```ts
await binanceFAPI.positionInfo();
```

#### Account trade list

```ts
await binanceFAPI.accountTradeList();
```

#### Account balance

```ts
await binanceFAPI.accountBalance();
```

#### Leverage brackets

```ts
await binanceFAPI.leverageBrackets();
```

#### Position ADL quantile

```ts
await binanceFAPI.positionADLQuantile();
```

#### User commission rate

```ts
await binanceFAPI.userCommissionRate({ symbol: 'BTCUSDT' });
```

#### Get current Multi-Assets mode

```ts
await binanceFAPI.getCurrentMultiAssetsMode();
```

#### Change Multi-Assets mode

```ts
await binanceFAPI.changeMultiAssetsMode({ multiAssetsMargin: false });
```

### Order

#### New order

```ts
await binanceFAPI.newOrder({
  symbol: 'BTCUSDT',
  side: 'BUY',
  positionSide: 'BOTH',
  type: 'MARKET',
  quantity: 1,
});
```

#### Place multiple orders

```ts
await binanceFAPI.placeMultipleOrders({ batchOrders: [] });
```

#### Query order

```ts
await binanceFAPI.queryOrder({ symbol: 'BTCUSDT' });
```

#### Cancel order

```ts
await binanceFAPI.cancelOrder({ symbol: 'BTCUSDT' });
```

#### Cancel all open orders

```ts
await binanceFAPI.cancelAllOpenOrders({ symbol: 'BTCUSDT' });
```

#### Auto cancel all open orders

```ts
await binanceFAPI.autoCancelAllOpenOrders({ symbol: 'BTCUSDT' });
```

#### Cancel multiple orders

```ts
await binanceFAPI.cancelMultipleOrders({ symbol: 'BTCUSDT' });
```

#### Get current all open orders

```ts
await binanceFAPI.getCurrentAllOpenOrders({ symbol: 'BTCUSDT' });
```

#### Query current open order

```ts
await binanceFAPI.queryCurrentOpenOrder({ symbol: 'BTCUSDT' });
```

#### All orders

```ts
await binanceFAPI.allOrders({
  symbol: 'BTCUSDT',
  limit: 10,
});
```

#### Get force orders

```ts
await binanceFAPI.getForceOrders({
  symbol: 'BTCUSDT',
  limit: 10,
});
```

### Trade

#### Change margin type

```ts
await binanceFAPI.changeMarginType({
  symbol: 'BTCUSDT',
  marginType: 'ISOLATED',
});
```

#### Change initial leverage

```ts
await binanceFAPI.changeInitialLeverage({
  symbol: 'BTCUSDT',
  leverage: 20,
});
```

#### Modify isolated position margin

```ts
await binanceFAPI.modifyIsolatedPositionMargin({
  symbol: 'BTCUSDT',
  positionSide: 'BOTH',
  amount: 100,
});
```

#### Get position margin change history

```ts
await binanceFAPI.getPositionMarginChangeHistory({
  symbol: 'BTCUSDT',
  limit: 10,
});
```

#### Change position mode

```ts
await binanceFAPI.changePositionMode({ dualSidePosition: false });
```

#### Get current position mode

```ts
await binanceFAPI.getCurrentPositionMode();
```

#### Get trading status

```ts
await binanceFAPI.getTradingStatus({ symbol: 'BTCUSDT' });
```

### Data stream

#### Create new listen key

```ts
await binanceFAPI.createNewListenKey();
```

#### Renew new listen key

```ts
await binanceFAPI.renewNewListenKey();
```

#### Delete new listen key

```ts
await binanceFAPI.deleteNewListenKey();
```

Full data for methods according to Binance API
