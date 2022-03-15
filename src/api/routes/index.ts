const API_URL = 'https://fapi.binance.com';

// *****************************
// ******** M A R K E T ********
// *****************************

export const GET_PING = `${API_URL}/fapi/v1/ping`;
export const GET_SERVER_TIME = `${API_URL}/fapi/v1/time`;
export const GET_EXCHANGE_INFO = `${API_URL}/fapi/v1/exchangeInfo`;
export const GET_ORDER_BOOK = `${API_URL}/fapi/v1/depth`;
export const GET_RECENT_TRADES = `${API_URL}/fapi/v1/trades`;
export const GET_COMPRESSED_TRADES = `${API_URL}/fapi/v1/aggTrades`;
export const GET_KLINES = `${API_URL}/fapi/v1/klines`;
export const GET_CONTINUOUS_KLINES = `${API_URL}/fapi/v1/continuousKlines`;
export const GET_MARK_PRICE_KLINES = `${API_URL}/fapi/v1/markPriceKlines`;
export const GET_MARK_PRICE = `${API_URL}/fapi/v1/premiumIndex`;
export const GET_FUNDING_RATE_HIST = `${API_URL}/fapi/v1/fundingRate`;
export const GET_24H_TICKER_PRICE = `${API_URL}/fapi/v1/ticker/24hr`;
export const GET_PRICE_TICKER = `${API_URL}/fapi/v1/ticker/price`;
export const GET_ORDER_BOOK_TICKER = `${API_URL}/fapi/v1/ticker/bookTicker`;
export const GET_OPEN_INTEREST = `${API_URL}/fapi/v1/openInterest`;
export const GET_OPEN_INTEREST_HIST = `${API_URL}/futures/data/openInterestHist`;
export const GET_TOP_LONG_SHORT_ACC_RATIO = `${API_URL}/futures/data/topLongShortAccountRatio`;
export const GET_TOP_LONG_SHORT_POS_RATIO = `${API_URL}/futures/data/topLongShortPositionRatio`;
export const GET_GLOBAL_LONG_SHORT_ACC_RATIO = `${API_URL}/futures/data/globalLongShortAccountRatio`;
export const GET_TAKER_LONG_SHORT_RATIO = `${API_URL}/futures/data/takerlongshortRatio`;
export const GET_INDEX_INFO = `${API_URL}/fapi/v1/indexInfo`;
export const GET_ASSET_INDEX = `${API_URL}/fapi/v1/assetIndex`;

// *****************************
// ******* A C C O U N T *******
// *****************************

export const GET_ACCOUNT_INFO = `${API_URL}/fapi/v2/account`;
