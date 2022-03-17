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
    return await request({ url: routes.PING });
  }

  public async checkServerTime() {
    return await request({ url: routes.SERVER_TIME });
  }

  public async exchangeInfo(params: intf.SymbolSymbolsParams) {
    return await request({ url: routes.EXCHANGE_INFO, params });
  }

  public async orderBook(params: intf.SymbolLimitParams) {
    return await request({ url: routes.DEPTH, params });
  }

  public async recentTrades(params: intf.SymbolLimitParams) {
    return await request({ url: routes.TRADES, params });
  }

  public async compressedTrades(params: intf.SymbolLimitTimeFromIdParams) {
    return await request({ url: routes.AGG_TRADES, params });
  }

  public async klines(params: intf.KlinesParams) {
    return await request({ url: routes.KLINES, params });
  }

  public async continuousKlines(params: intf.ContinuousKlinesParams) {
    return await request({ url: routes.CONTINUOUS_KLINES, params });
  }

  public async markPriceKlines(params: intf.KlinesParams) {
    return await request({ url: routes.MARK_PRICE_KLINES, params });
  }

  public async markPrice(params: intf.OptionalSymbolParams) {
    return await request({ url: routes.PREMIUM_INDEX, params });
  }

  public async fundingRateHistory(params: intf.SymbolLimitTimeParams) {
    return await request({ url: routes.FUNDING_RATE, params });
  }

  public async get24hTickerPrice(params: intf.OptionalSymbolParams) {
    return await request({ url: routes.TICKER_24H, params });
  }

  public async symbolPriceTicker(params: intf.OptionalSymbolParams) {
    return await request({ url: routes.TICKER_PRICE, params });
  }

  public async symbolOrderBookTicker(params: intf.OptionalSymbolParams) {
    return await request({ url: routes.TICKER_ORDER_BOOK, params });
  }

  public async openInterest(params: intf.OptionalSymbolParams) {
    return await request({ url: routes.OPEN_INTEREST, params });
  }

  public async openInterestStatistics(params: intf.SymbolLimitTimePeriodParams) {
    return await request({ url: routes.OPEN_INTEREST_HIST, params });
  }

  public async topLongShortAccountRatio(params: intf.SymbolLimitTimePeriodParams) {
    return await request({ url: routes.TOP_LONG_SHORT_ACCOUNT_RATIO, params });
  }

  public async topLongShortPositionRatio(params: intf.SymbolLimitTimePeriodParams) {
    return await request({ url: routes.TOP_LONG_SHORT_POSITION_RATIO, params });
  }

  public async globalLongShortAccountRatio(params: intf.SymbolLimitTimePeriodParams) {
    return await request({ url: routes.GLOBAL_LONG_SHORT_ACCOUNT_RATIO, params });
  }

  public async topTraderLongShortRatio(params: intf.SymbolLimitTimePeriodParams) {
    return await request({ url: routes.TAKER_LONG_SHORT_RATIO, params });
  }

  public async compositeIndexSymbolInfo(params: intf.OptionalSymbolParams) {
    return await request({ url: routes.INDEX_INFO, params });
  }

  public async multiAssetsModeAssetIndex(params: intf.OptionalSymbolParams) {
    return await request({ url: routes.ASSET_INDEX, params });
  }

  // *****************************
  // ******* A C C O U N T *******
  // *****************************

  public async accountInfo() {
    const params = this._createSignatureParams();
    return await request({ url: routes.ACCOUNT, params }, this.apikey);
  }

  public async getIncomeHistory(data?: intf.IncomeHistoryParams) {
    const params = this._createSignatureParams(data);
    return await request({ url: routes.INCOME, params }, this.apikey);
  }

  public async positionInfo(data?: intf.OptionalSymbolParams) {
    const params = this._createSignatureParams(data);
    return await request({ url: routes.POSITION_RISK, params }, this.apikey);
  }

  public async accountTradeList(data: intf.SymbolLimitTimeFromIdParams) {
    const params = this._createSignatureParams(data);
    return await request({ url: routes.USER_TRADES, params }, this.apikey);
  }

  public async accountBalance() {
    const params = this._createSignatureParams();
    return await request({ url: routes.BALANCE, params }, this.apikey);
  }

  public async leverageBrackets(data?: intf.OptionalSymbolParams) {
    const params = this._createSignatureParams(data);
    return await request({ url: routes.LEVERAGE_BRACKETS, params }, this.apikey);
  }

  public async positionADLQuantile(data?: intf.OptionalSymbolParams) {
    const params = this._createSignatureParams(data);
    return await request({ url: routes.ADL_QUANTILE, params }, this.apikey);
  }

  public async userCommissionRate(data: intf.SymbolParams) {
    const params = this._createSignatureParams(data);
    return await request({ url: routes.COMMISSION_RATE, params }, this.apikey);
  }

  public async getCurrentMultiAssetsMode() {
    const params = this._createSignatureParams();
    return await request({ url: routes.MULTIASSETS_MARGIN, params }, this.apikey);
  }

  public async changeMultiAssetsMode(data: intf.MultiAssetsMarginParams) {
    const params = this._createSignatureParams(data);
    return await request({ method: 'post', url: routes.MULTIASSETS_MARGIN, params }, this.apikey);
  }

  // *****************************
  // ********* O R D E R *********
  // *****************************

  // *****************************
  // ********* T R A D E *********
  // *****************************
}
