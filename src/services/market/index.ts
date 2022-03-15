import { request } from '../../api/utils';
import * as routes from '../../api/routes';
import {
  OptionalSymbolParams,
  SymbolSymbolsParams,
  SymbolLimitParams,
  SymbolLimitTimeParams,
  SymbolLimitTimePeriodParams,
  CompressedTradesParams,
  KlinesParams,
  ContinuousKlinesParams,
} from './interface';

export class Market {
  static async testConnectivity() {
    return await request({ url: routes.GET_PING });
  }

  static async checkServerTime() {
    return await request({ url: routes.GET_SERVER_TIME });
  }

  static async exchangeInfo(params: SymbolSymbolsParams) {
    return await request({ url: routes.GET_EXCHANGE_INFO, params });
  }

  static async orderBook(params: SymbolLimitParams) {
    return await request({ url: routes.GET_ORDER_BOOK, params });
  }

  static async recentTrades(params: SymbolLimitParams) {
    return await request({ url: routes.GET_RECENT_TRADES, params });
  }

  static async compressedTrades(params: CompressedTradesParams) {
    return await request({ url: routes.GET_COMPRESSED_TRADES, params });
  }

  static async klines(params: KlinesParams) {
    return await request({ url: routes.GET_KLINES, params });
  }

  static async continuousKlines(params: ContinuousKlinesParams) {
    return await request({ url: routes.GET_CONTINUOUS_KLINES, params });
  }

  static async markPriceKlines(params: KlinesParams) {
    return await request({ url: routes.GET_MARK_PRICE_KLINES, params });
  }

  static async markPrice(params: OptionalSymbolParams) {
    return await request({ url: routes.GET_MARK_PRICE, params });
  }

  static async fundingRateHistory(params: SymbolLimitTimeParams) {
    return await request({ url: routes.GET_FUNDING_RATE_HIST, params });
  }

  static async get24hTickerPrice(params: OptionalSymbolParams) {
    return await request({ url: routes.GET_24H_TICKER_PRICE, params });
  }

  static async symbolPriceTicker(params: OptionalSymbolParams) {
    return await request({ url: routes.GET_PRICE_TICKER, params });
  }

  static async symbolOrderBookTicker(params: OptionalSymbolParams) {
    return await request({ url: routes.GET_ORDER_BOOK_TICKER, params });
  }

  static async openInterest(params: OptionalSymbolParams) {
    return await request({ url: routes.GET_OPEN_INTEREST, params });
  }

  static async openInterestStatistics(params: SymbolLimitTimePeriodParams) {
    return await request({ url: routes.GET_OPEN_INTEREST_HIST, params });
  }

  static async topLongShortAccountRatio(params: SymbolLimitTimePeriodParams) {
    return await request({
      url: routes.GET_TOP_LONG_SHORT_ACC_RATIO,
      params,
    });
  }

  static async topLongShortPositionRatio(params: SymbolLimitTimePeriodParams) {
    return await request({
      url: routes.GET_TOP_LONG_SHORT_POS_RATIO,
      params,
    });
  }

  static async globalLongShortAccountRatio(
    params: SymbolLimitTimePeriodParams,
  ) {
    return await request({
      url: routes.GET_GLOBAL_LONG_SHORT_ACC_RATIO,
      params,
    });
  }

  static async topTraderLongShortRatio(params: SymbolLimitTimePeriodParams) {
    return await request({
      url: routes.GET_TAKER_LONG_SHORT_RATIO,
      params,
    });
  }

  static async compositeIndexSymbolInfo(params: OptionalSymbolParams) {
    return await request({ url: routes.GET_INDEX_INFO, params });
  }

  static async multiAssetsModeAssetIndex(params: OptionalSymbolParams) {
    return await request({ url: routes.GET_ASSET_INDEX, params });
  }
}
