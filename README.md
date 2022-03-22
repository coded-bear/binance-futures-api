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

<b>Tip:</b>
For "Market" methods you don't need API_KEY and API_SECRET

## API

#### Test connectivity

```ts
await binanceFAPI.testConnectivity();
```

#### Check server time

```ts
await binanceFAPI.checkServerTime();
```

Full data for methods according to Binance API
