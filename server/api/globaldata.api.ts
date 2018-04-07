// express
import {NextFunction, Response, Request, Router} from 'express';
import { Pool, Client } from 'pg';

export class GlobaldataApi {
  public static create(router: Router, pool: Pool) {
    // GET
    router.get('/globaldata', (req: Request, res: Response, next: NextFunction) => {
      new GlobaldataApi().list(req, res, next, pool);
    });
  }

  // Get global data
  public list (req: Request, res: Response, next: NextFunction, pool: Pool) {
    let squery: String = '';
    squery = 'select gd.total_market_cap_usd, gd.total_24h_volume_usd, gd.bitcoin_percentage_of_market_cap, gd.timestamp as global_data_timestamp,\n';
    squery += 'kpi_gd.global_market_cap_24h_pctchange, kpi_gd.timestamp as kpi_global_data_timestamp,\n';
    squery += 'kpi_gdv.volume_mean_last_1h_vs_30d, kpi_gdv.volume_mean_last_3h_30d, kpi_gdv.volume_mean_last_6h_30d, kpi_gdv.volume_mean_last_12h_30d, kpi_gdv.volume_mean_last_24h_30d, kpi_gdv.volume_mean_last_3d_30d, kpi_gdv.volume_mean_last_7d_30d, kpi_gdv.timestamp as kpi_global_data_volumes_timestamp\n';
    squery += 'from global_data gd, kpi_global_data kpi_gd, kpi_global_data_volumes kpi_gdv\n';
    pool.query(squery, (err, resp) => {
      try {
        res.json(resp['rows']);
      } catch (error) {
        console.log(error);
      }
    });
  }
}
