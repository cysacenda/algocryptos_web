export interface Coins {
  IdCryptoCompare: number;
  CoinName: String;
  Symbol: String;
  price_usd: number;
  market_cap_usd: number;
  rank: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  reddit_subscribers: number;
  timestamp_reddit_subscribers: Date;

  subscribers_1d_trend: number;
  subscribers_3d_trend: number;
  subscribers_7d_trend: number;
  subscribers_15d_trend: number;
  subscribers_30d_trend: number;
  subscribers_60d_trend: number;
  subscribers_90d_trend: number;
  timestamp_reddit_trend: Date;
}
