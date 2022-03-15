import { createHmac } from 'crypto';
import { request } from './api/utils';
import * as routes from './api/routes';

export class BinanceFAPI {
  private apikey: string;
  private apisecret: string;

  constructor(apikey?: string, apisecret?: string) {
    this.apikey = apikey;
    this.apisecret = apisecret;
  }

  private _getTimestamp() {
    return new Date().getTime();
  }

  private _createSignature() {
    const query_string = `timestamp=${this._getTimestamp()}`;
    return createHmac('sha256', this.apisecret)
      .update(query_string)
      .digest('hex');
  }

  // *****************************
  // ******* A C C O U N T *******
  // *****************************

  public async accountInfo() {
    const params = {
      timestamp: this._getTimestamp(),
      signature: this._createSignature(),
    };
    return await request({ url: routes.GET_ACCOUNT_INFO, params }, this.apikey);
  }
}
