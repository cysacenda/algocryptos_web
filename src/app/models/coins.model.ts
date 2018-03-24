export interface Coins {
  id_cryptocompare: number;
  coin_name: String;
  namecmc: String;
  symbol: String;
  price_usd: number;
  market_cap_usd: number;
  crypto_rank: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;

  // Lows / highs
  price_low_15d: number;
  date_low_15d: Date;
  change_low_15d: number;
  price_low_1m: number;
  date_low_1m: Date;
  change_low_1m: number;
  price_low_3m: number;
  date_low_3m: Date;
  change_low_3m: number;
  price_low_6m: number;
  date_low_6m: Date;
  change_low_6m: number;
  price_low_1y: number;
  date_low_1y: Date;
  change_low_1y: number;
  price_low_5y: number;
  date_low_5y: Date;
  change_low_5y: number;
  price_high_15d: number;
  date_high_15d: Date;
  change_high_15d: number;
  price_high_1m: number;
  date_high_1m: Date;
  change_high_1m: number;
  price_high_3m: number;
  date_high_3m: Date;
  change_high_3m: number;
  price_high_6m: number;
  date_high_6m: Date;
  change_high_6m: number;
  price_high_1y: number;
  date_high_1y: Date;
  change_high_1y: number;
  price_high_5y: number;
  date_high_5y: Date;
  change_high_5y: number;

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
