export interface Coins {
  IdCryptoCompare: number;
  CoinName: String;
  namecmc: String;
  Symbol: String;
  price_usd: number;
  market_cap_usd: number;
  rank: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  prices_ath_usd: number;
  percent_change_ath: number;
  ath_date: Date;
  reddit_subscribers: number;
  timestamp_reddit_subscribers: Date;
  reddit_agr: String;

  // Kpi Reddit
  subscribers_1d_trend: number;
  subscribers_3d_trend: number;
  subscribers_7d_trend: number;
  subscribers_15d_trend: number;
  subscribers_30d_trend: number;
  subscribers_60d_trend: number;
  subscribers_90d_trend: number;
  timestamp_reddit_trend: Date;

  // Kpi volumes
  volume_mean_last_1h_vs_30d: number;
  volume_mean_last_3h_30d: number;
  volume_mean_last_6h_30d: number;
  volume_mean_last_12h_30d: number;
  volume_mean_last_24h_30d: number;
  volume_mean_last_3d_30d: number;
  volume_mean_last_7d_30d: number;
  timestamp_volumes: Date;
}
