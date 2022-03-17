import { createHmac } from 'crypto';
import { request } from './api/utils';
import * as routes from './api/routes';
import * as intf from './interface';

export class BinanceFAPI {
  private apikey: string;
  private apisecret: string;

  constructor(apikey?: string, apisecret?: string) {
    this.apikey = apikey;
    this.apisecret = apisecret;
  }

  private _createURLParams(obj: Object): string {
    let str = '';
    for (let key in obj) {
      if (str !== '') str += '&';
      str += key + '=' + encodeURIComponent(obj[key]);
    }
    return str;
  }

  private _createSignatureParams(params?: Object): Object {
    const timestamp: number = new Date().getTime();
    const querystring: string = this._createURLParams({ ...params, timestamp });
    const signature = createHmac('sha256', this.apisecret).update(querystring).digest('hex');
    return { ...params, timestamp, signature };
  }

  // *****************************
  // ******** M A R K E T ********
  // *****************************

  public async testConnectivity() {
    return await request({ url: routes.GET_PING });
  }

  public async checkServerTime() {
    return await request({ url: routes.GET_SERVER_TIME });
  }

  public async exchangeInfo(params: intf.SymbolSymbolsParams) {
    return await request({ url: routes.GET_EXCHANGE_INFO, params });
  }

  public async orderBook(params: intf.SymbolLimitParams) {
    return await request({ url: routes.GET_ORDER_BOOK, params });
  }

  public async recentTrades(params: intf.SymbolLimitParams) {
    return await request({ url: routes.GET_RECENT_TRADES, params });
  }

  public async compressedTrades(params: intf.SymbolLimitTimeFromIdParams) {
    return await request({ url: routes.GET_COMPRESSED_TRADES, params });
  }

  public async klines(params: intf.KlinesParams) {
    return await request({ url: routes.GET_KLINES, params });
  }

  public async continuousKlines(params: intf.ContinuousKlinesParams) {
    return await request({ url: routes.GET_CONTINUOUS_KLINES, params });
  }

  public async markPriceKlines(params: intf.KlinesParams) {
    return await request({ url: routes.GET_MARK_PRICE_KLINES, params });
  }

  public async markPrice(params: intf.OptionalSymbolParams) {
    return await request({ url: routes.GET_MARK_PRICE, params });
  }

  public async fundingRateHistory(params: intf.SymbolLimitTimeParams) {
    return await request({ url: routes.GET_FUNDING_RATE_HIST, params });
  }

  public async get24hTickerPrice(params: intf.OptionalSymbolParams) {
    return await request({ url: routes.GET_24H_TICKER_PRICE, params });
  }

  public async symbolPriceTicker(params: intf.OptionalSymbolParams) {
    return await request({ url: routes.GET_PRICE_TICKER, params });
  }

  public async symbolOrderBookTicker(params: intf.OptionalSymbolParams) {
    return await request({ url: routes.GET_ORDER_BOOK_TICKER, params });
  }

  public async openInterest(params: intf.OptionalSymbolParams) {
    return await request({ url: routes.GET_OPEN_INTEREST, params });
  }

  public async openInterestStatistics(params: intf.SymbolLimitTimePeriodParams) {
    return await request({ url: routes.GET_OPEN_INTEREST_HIST, params });
  }

  public async topLongShortAccountRatio(params: intf.SymbolLimitTimePeriodParams) {
    return await request({
      url: routes.GET_TOP_LONG_SHORT_ACC_RATIO,
      params,
    });
  }

  public async topLongShortPositionRatio(params: intf.SymbolLimitTimePeriodParams) {
    return await request({
      url: routes.GET_TOP_LONG_SHORT_POS_RATIO,
      params,
    });
  }

  public async globalLongShortAccountRatio(params: intf.SymbolLimitTimePeriodParams) {
    return await request({
      url: routes.GET_GLOBAL_LONG_SHORT_ACC_RATIO,
      params,
    });
  }

  public async topTraderLongShortRatio(params: intf.SymbolLimitTimePeriodParams) {
    return await request({
      url: routes.GET_TAKER_LONG_SHORT_RATIO,
      params,
    });
  }

  public async compositeIndexSymbolInfo(params: intf.OptionalSymbolParams) {
    return await request({ url: routes.GET_INDEX_INFO, params });
  }

  public async multiAssetsModeAssetIndex(params: intf.OptionalSymbolParams) {
    return await request({ url: routes.GET_ASSET_INDEX, params });
  }

  // *****************************
  // ******* A C C O U N T *******
  // *****************************

  public async accountInfo() {
    const params = this._createSignatureParams();
    return await request({ url: routes.GET_ACCOUNT_INFO, params }, this.apikey);
  }

  public async getIncomeHistory(data?: intf.IncomeHistoryParams) {
    const params = this._createSignatureParams(data);
    return await request({ url: routes.GET_INCOME_HIST, params }, this.apikey);
  }

  public async positionInfo(data?: intf.OptionalSymbolParams) {
    const params = this._createSignatureParams(data);
    return await request({ url: routes.GET_POSITION_INFO, params }, this.apikey);
  }

  public async accountTradeList(data: intf.SymbolLimitTimeFromIdParams) {
    const params = this._createSignatureParams(data);
    return await request({ url: routes.GET_ACCOUNT_TRADE_LIST, params }, this.apikey);
  }

  public async accountBalance() {
    const params = this._createSignatureParams();
    return await request({ url: routes.GET_ACCOUNT_BALANCE, params }, this.apikey);
  }

  public async leverageBrackets(data?: intf.OptionalSymbolParams) {
    const params = this._createSignatureParams(data);
    return await request({ url: routes.GET_LEVERAGE_BRACKETS, params }, this.apikey);
  }

  public async positionADLQuantile(data?: intf.OptionalSymbolParams) {
    const params = this._createSignatureParams(data);
    return await request({ url: routes.GET_POSITION_ADL_QUANTILE, params }, this.apikey);
  }

  public async userCommissionRate(data: intf.SymbolParams) {
    const params = this._createSignatureParams(data);
    return await request({ url: routes.GET_USER_COMMISSION_RATE, params }, this.apikey);
  }

  public async getCurrentMultiAssetsMode() {
    const params = this._createSignatureParams();
    return await request({ url: routes.GET_MULTIASSETS_MODE, params }, this.apikey);
  }

  public async changeMultiAssetsMode(data: intf.MultiAssetsMarginParams) {
    const params = this._createSignatureParams(data);
    return await request(
      { method: 'post', url: routes.POST_MULTIASSETS_MODE, params },
      this.apikey,
    );
  }

  // *****************************
  // ********* O R D E R *********
  // *****************************

  // *****************************
  // ********* T R A D E *********
  // *****************************
}
