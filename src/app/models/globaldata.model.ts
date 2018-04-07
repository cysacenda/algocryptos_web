export interface Globaldata {
  total_market_cap_usd: number;
  total_24h_volume_usd: number;
  bitcoin_percentage_of_market_cap: number;
  global_data_timestamp: Date;

  global_market_cap_24h_pctchange: number;
  kpi_global_data_timestamp: Date;

  volume_mean_last_1h_vs_30d: number;
  volume_mean_last_3h_30d: number;
  volume_mean_last_6h_30d: number;
  volume_mean_last_12h_30d: number;
  volume_mean_last_24h_30d: number;
  volume_mean_last_3d_30d: number;
  volume_mean_last_7d_30d: number;
  kpi_global_data_volumes_timestamp: Date;
}
