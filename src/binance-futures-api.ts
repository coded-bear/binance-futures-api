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

  private _createURLParams(obj): string {
    let str = '';
    for (const key in obj) {
      if (str !== '') str += '&';
      str += key + '=' + encodeURIComponent(obj[key]);
    }
    return str;
  }

  private _createSignatureParams(params?) {
    const timestamp: number = new Date().getTime();
    const querystring: string = this._createURLParams({ ...params, timestamp });
    const signature = createHmac('sha256', this.apisecret).update(querystring).digest('hex');
    return { ...params, timestamp, signature };
  }

  // *****************************
  // ******** M A R K E T ********
  // *****************************

  public async testConnectivity() {
    return request({ url: routes.PING });
  }

  public async checkServerTime() {
    return request({ url: routes.SERVER_TIME });
  }

  public async exchangeInfo(params: intf.SymbolSymbolsParams) {
    return request({ url: routes.EXCHANGE_INFO, params });
  }

  public async orderBook(params: intf.SymbolLimitParams) {
    return request({ url: routes.DEPTH, params });
  }

  public async recentTrades(params: intf.SymbolLimitParams) {
    return request({ url: routes.TRADES, params });
  }

  public async compressedTrades(params: intf.SymbolLimitTimeFromIdParams) {
    return request({ url: routes.AGG_TRADES, params });
  }

  public async klines(params: intf.KlinesParams) {
    return request({ url: routes.KLINES, params });
  }

  public async continuousKlines(params: intf.ContinuousKlinesParams) {
    return request({ url: routes.CONTINUOUS_KLINES, params });
  }

  public async markPriceKlines(params: intf.KlinesParams) {
    return request({ url: routes.MARK_PRICE_KLINES, params });
  }

  public async markPrice(params: intf.OptionalSymbolParams) {
    return request({ url: routes.PREMIUM_INDEX, params });
  }

  public async fundingRateHistory(params: intf.SymbolLimitTimeParams) {
    return request({ url: routes.FUNDING_RATE, params });
  }

  public async get24hTickerPrice(params: intf.OptionalSymbolParams) {
    return request({ url: routes.TICKER_24H, params });
  }

  public async symbolPriceTicker(params: intf.OptionalSymbolParams) {
    return request({ url: routes.TICKER_PRICE, params });
  }

  public async symbolOrderBookTicker(params: intf.OptionalSymbolParams) {
    return request({ url: routes.TICKER_ORDER_BOOK, params });
  }

  public async openInterest(params: intf.OptionalSymbolParams) {
    return request({ url: routes.OPEN_INTEREST, params });
  }

  public async openInterestStatistics(params: intf.SymbolLimitTimePeriodParams) {
    return request({ url: routes.OPEN_INTEREST_HIST, params });
  }

  public async topLongShortAccountRatio(params: intf.SymbolLimitTimePeriodParams) {
    return request({ url: routes.TOP_LONG_SHORT_ACCOUNT_RATIO, params });
  }

  public async topLongShortPositionRatio(params: intf.SymbolLimitTimePeriodParams) {
    return request({ url: routes.TOP_LONG_SHORT_POSITION_RATIO, params });
  }

  public async globalLongShortAccountRatio(params: intf.SymbolLimitTimePeriodParams) {
    return request({ url: routes.GLOBAL_LONG_SHORT_ACCOUNT_RATIO, params });
  }

  public async topTraderLongShortRatio(params: intf.SymbolLimitTimePeriodParams) {
    return request({ url: routes.TAKER_LONG_SHORT_RATIO, params });
  }

  public async compositeIndexSymbolInfo(params: intf.OptionalSymbolParams) {
    return request({ url: routes.INDEX_INFO, params });
  }

  public async multiAssetsModeAssetIndex(params: intf.OptionalSymbolParams) {
    return request({ url: routes.ASSET_INDEX, params });
  }

  // *****************************
  // ******* A C C O U N T *******
  // *****************************

  public async accountInfo() {
    const params = this._createSignatureParams();
    return request({ url: routes.ACCOUNT, params }, this.apikey);
  }

  public async getIncomeHistory(data?: intf.IncomeHistoryParams) {
    const params = this._createSignatureParams(data);
    return request({ url: routes.INCOME, params }, this.apikey);
  }

  public async positionInfo(data?: intf.OptionalSymbolParams) {
    const params = this._createSignatureParams(data);
    return request({ url: routes.POSITION_RISK, params }, this.apikey);
  }

  public async accountTradeList(data: intf.SymbolLimitTimeFromIdParams) {
    const params = this._createSignatureParams(data);
    return request({ url: routes.USER_TRADES, params }, this.apikey);
  }

  public async accountBalance() {
    const params = this._createSignatureParams();
    return request({ url: routes.BALANCE, params }, this.apikey);
  }

  public async leverageBrackets(data?: intf.OptionalSymbolParams) {
    const params = this._createSignatureParams(data);
    return request({ url: routes.LEVERAGE_BRACKETS, params }, this.apikey);
  }

  public async positionADLQuantile(data?: intf.OptionalSymbolParams) {
    const params = this._createSignatureParams(data);
    return request({ url: routes.ADL_QUANTILE, params }, this.apikey);
  }

  public async userCommissionRate(data: intf.SymbolParams) {
    const params = this._createSignatureParams(data);
    return request({ url: routes.COMMISSION_RATE, params }, this.apikey);
  }

  public async getCurrentMultiAssetsMode() {
    const params = this._createSignatureParams();
    return request({ url: routes.MULTIASSETS_MARGIN, params }, this.apikey);
  }

  public async changeMultiAssetsMode(data: intf.MultiAssetsMarginParams) {
    const params = this._createSignatureParams(data);
    return request({ method: 'post', url: routes.MULTIASSETS_MARGIN, params }, this.apikey);
  }

  // *****************************
  // ********* O R D E R *********
  // *****************************

  public async newOrder(data: intf.NewOrderParams) {
    const params = this._createSignatureParams(data);
    return request({ method: 'post', url: routes.ORDER, params }, this.apikey);
  }

  public async placeMultipleOrders(data: intf.BatchOrdersParams) {
    const params = this._createSignatureParams(data);
    return request({ method: 'post', url: routes.BATCH_ORDERS, params }, this.apikey);
  }

  public async queryOrder(data: intf.SymbolOptionalOrdersIdParams) {
    const params = this._createSignatureParams(data);
    return request({ url: routes.ORDER, params }, this.apikey);
  }

  public async cancelOrder(data: intf.SymbolOptionalOrdersIdParams) {
    const params = this._createSignatureParams(data);
    return request({ method: 'delete', url: routes.ORDER, params }, this.apikey);
  }

  public async cancelAllOpenOrders(data: intf.SymbolParams) {
    const params = this._createSignatureParams(data);
    return request({ method: 'delete', url: routes.ALL_OPEN_ORDERS, params }, this.apikey);
  }

  public async autoCancelAllOpenOrders(data: intf.SymbolCountdownTimeParams) {
    const params = this._createSignatureParams(data);
    return request({ method: 'post', url: routes.COUNTDOWN_CANCEL_ALL, params }, this.apikey);
  }

  public async cancelMultipleOrders(data: intf.SymbolOrdersIdListParams) {
    const params = this._createSignatureParams(data);
    return request({ method: 'delete', url: routes.BATCH_ORDERS, params }, this.apikey);
  }

  public async getCurrentAllOpenOrders(data?: intf.OptionalSymbolParams) {
    const params = this._createSignatureParams(data);
    return request({ url: routes.OPEN_ORDERS, params }, this.apikey);
  }

  public async queryCurrentOpenOrder(data: intf.SymbolOptionalOrdersIdParams) {
    const params = this._createSignatureParams(data);
    return request({ url: routes.OPEN_ORDER, params }, this.apikey);
  }

  public async allOrders(data: intf.SymbolLimitTimeOptionalOrderIdParams) {
    const params = this._createSignatureParams(data);
    return request({ url: routes.ALL_ORDERS, params }, this.apikey);
  }

  public async getForceOrders(data?: intf.ForceOrdersParams) {
    const params = this._createSignatureParams(data);
    return request({ url: routes.FORCE_ORDERS, params }, this.apikey);
  }

  // *****************************
  // ********* T R A D E *********
  // *****************************

  public async changeMarginType(data: intf.SymbolMarginTypeParams) {
    const params = this._createSignatureParams(data);
    return request({ method: 'post', url: routes.MARGIN_TYPE, params }, this.apikey);
  }

  public async changeInitialLeverage(data: intf.SymbolLeverageParams) {
    const params = this._createSignatureParams(data);
    return request({ method: 'post', url: routes.LEVERAGE, params }, this.apikey);
  }

  public async modifyIsolatedPositionMargin(data: intf.PositionMarginParams) {
    const params = this._createSignatureParams(data);
    return request({ method: 'post', url: routes.POSITION_MARGIN, params }, this.apikey);
  }

  public async getPositionMarginChangeHistory(data: intf.SymbolLimitTimeTypeParams) {
    const params = this._createSignatureParams(data);
    return request({ url: routes.POSITION_MARGIN_HIST, params }, this.apikey);
  }

  public async changePositionMode(data: intf.DualSidePositionParams) {
    const params = this._createSignatureParams(data);
    return request({ method: 'post', url: routes.POSITION_SIDE, params }, this.apikey);
  }

  public async getCurrentPositionMode() {
    const params = this._createSignatureParams();
    return request({ url: routes.POSITION_SIDE, params }, this.apikey);
  }

  public async getTradingStatus(data?: intf.OptionalSymbolParams) {
    const params = this._createSignatureParams(data);
    return request({ url: routes.TRADING_STATUS, params }, this.apikey);
  }

  // *****************************
  // *** D A T A * S T R E A M ***
  // *****************************

  public async createNewListenKey() {
    return request({ method: 'post', url: routes.LISTEN_KEY }, this.apikey);
  }

  public async renewNewListenKey() {
    return request({ method: 'put', url: routes.LISTEN_KEY }, this.apikey);
  }

  public async deleteNewListenKey() {
    return request({ method: 'delete', url: routes.LISTEN_KEY }, this.apikey);
  }
}
