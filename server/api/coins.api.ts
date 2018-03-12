// express
import {NextFunction, Response, Request, Router} from 'express';
import { Pool, Client } from 'pg';

export class CoinsApi {
  public static create(router: Router, pool: Pool) {
    // DELETE
    router.delete('/coins/:id([0-9a-f]{24})', (req: Request, res: Response, next: NextFunction) => {
      new CoinsApi().delete(req, res, next);
    });
    router.delete('/missingCoins', (req: Request, res: Response, next: NextFunction) => {
      new CoinsApi().deleteMissingSocial(req, res, next, pool);
    });

    // GET
    router.get('/coins', (req: Request, res: Response, next: NextFunction) => {
      new CoinsApi().list(req, res, next, pool);
    });
    router.get('/coins/:id([0-9a-f]{24})', (req: Request, res: Response, next: NextFunction) => {
      new CoinsApi().get(req, res, next);
    });
    router.get('/missingCoins', (req: Request, res: Response, next: NextFunction) => {
      new CoinsApi().missingSocialCoins(req, res, next, pool);
    });

    // POST
    router.post('/coins', (req: Request, res: Response, next: NextFunction) => {
      new CoinsApi().create(req, res, next);
    });
    router.post('/missingCoins', (req: Request, res: Response, next: NextFunction) => {
      new CoinsApi().createSubreddit(req, res, next, pool);
    });

    // PUT
    router.put('/coins/:id([0-9a-f]{24})', (req: Request, res: Response, next: NextFunction) => {
      new CoinsApi().update(req, res, next);
    });

  }

  public create(req: Request, res: Response, next: NextFunction) {
  }

  public createSubreddit(req: Request, res: Response, next: NextFunction, pool: Pool) {
    const idCoinCryptoCompare: string = req.body.IdCoinCryptoCompare;
    const redditName: string = req.body.Reddit_name;
    const Twitter_link: string = req.body.Twitter_link;
    const Facebook_link: string = req.body.Facebook_link;

    const values = [idCoinCryptoCompare, redditName, Twitter_link, Facebook_link];
    const squery = 'INSERT INTO social_infos_manual("IdCoinCryptoCompare", "Reddit_name", "Twitter_link", "Facebook_link") ' +
      'VALUES($1,$2,$3,$4) ' +
      'ON CONFLICT ("IdCoinCryptoCompare") ' +
      'DO UPDATE SET "Reddit_name" = $2, "Twitter_link" = $3, "Facebook_link" = $4 ' +
      'RETURNING * ;';

    pool.query(squery, values, (err, response) => {
      if (err) {
        res.json({error: 'Error in createSubreddit API'});
      } else {
        res.json(response.rows[0]);
      }
    });
  }

  public delete(req: Request, res: Response, next: NextFunction) {

  }

  public get (req: Request, res: Response, next: NextFunction) {
  }

  public list(req: Request, res: Response, next: NextFunction, pool: Pool) {
    let squery: String = '';
    squery = 'select co."IdCryptoCompare", co."CoinName", co."Symbol", pr.price_usd, pr.market_cap_usd, pr.rank, replace(pr."Name", \' \', \'-\') as NameCMC, pr.percent_change_1h,\n';
    squery += 'pr.percent_change_24h, pr.percent_change_7d, sr."Reddit_subscribers" as reddit_subscribers, sr.timestamp as timestamp_reddit_subscribers,\n';
    squery += 'kp.subscribers_1d_trend, kp.subscribers_3d_trend, kp.subscribers_7d_trend, kp.subscribers_15d_trend, kp.subscribers_30d_trend, kp.subscribers_60d_trend,\n';
    squery += 'kp.subscribers_90d_trend, kp."timestamp" as timestamp_reddit_trend,\n';
    squery += 'CASE WHEN sm."Reddit_name" IS NULL THEN si."Reddit_name" ELSE sm."Reddit_name" END AS reddit_agr,\n';
    squery += 'kv.volume_mean_last_1h_vs_30d, kv.volume_mean_last_3h_30d, kv.volume_mean_last_6h_30d, kv.volume_mean_last_12h_30d, kv.volume_mean_last_24h_30d, kv.volume_mean_last_3d_30d, kv.volume_mean_last_7d_30d, kv.timestamp as timestamp_volumes,\n';
    squery += 'lohi.price_low_15d, lohi.date_low_15d, (pr.price_usd - lohi.price_low_15d) / lohi.price_low_15d as change_low_15d,\n';
    squery += 'lohi.price_high_15d, lohi.date_high_15d, (pr.price_usd - lohi.price_high_15d) / lohi.price_high_15d as change_high_15d,\n';
    squery += 'lohi.price_low_1m, lohi.date_low_1m, (pr.price_usd - lohi.price_low_1m) / lohi.price_low_1m as change_low_1m,\n';
    squery += 'lohi.price_high_1m, lohi.date_high_1m, (pr.price_usd - lohi.price_high_1m) / lohi.price_high_1m as change_high_1m,\n';
    squery += 'lohi.price_low_3m, lohi.date_low_3m, (pr.price_usd - lohi.price_low_3m) / lohi.price_low_3m as change_low_3m,\n';
    squery += 'lohi.price_high_3m, lohi.date_high_3m, (pr.price_usd - lohi.price_high_3m) / lohi.price_high_3m as change_high_3m,\n';
    squery += 'lohi.price_low_6m, lohi.date_low_6m, (pr.price_usd - lohi.price_low_6m) / lohi.price_low_6m as change_low_6m,\n';
    squery += 'lohi.price_high_6m, lohi.date_high_6m, (pr.price_usd - lohi.price_high_6m) / lohi.price_high_6m as change_high_6m,\n';
    squery += 'lohi.price_low_1y, lohi.date_low_1y, (pr.price_usd - lohi.price_low_1y) / lohi.price_low_1y as change_low_1y,\n';
    squery += 'lohi.price_high_1y, lohi.date_high_1y, (pr.price_usd - lohi.price_high_1y) / lohi.price_high_1y as change_high_1y,\n';
    squery += 'lohi.price_low_5y, lohi.date_low_5y, (pr.price_usd - lohi.price_low_5y) / lohi.price_low_5y as change_low_5y,\n';
    squery += 'lohi.price_high_5y, lohi.date_high_5y, (pr.price_usd - lohi.price_high_5y) / lohi.price_high_5y as change_high_5y\n';
    squery += 'from coins as co\n';
    squery += 'inner join prices as pr on (co."IdCryptoCompare" = pr."IdCryptoCompare")\n';
    squery += 'left outer join lower_higher_prices lohi on (lohi."IdCryptoCompare" = co."IdCryptoCompare")\n';
    squery += 'left outer join social_infos si on (si."IdCoinCryptoCompare" = co."IdCryptoCompare")\n';
    squery += 'left outer join social_infos_manual sm on (sm."IdCoinCryptoCompare" = co."IdCryptoCompare")\n';
    squery += 'left outer join social_stats_reddit sr on (sr."IdCoinCryptoCompare" = co."IdCryptoCompare")\n';
    squery += 'left outer join kpi_reddit_subscribers kp on (kp."IdCryptoCompare" = co."IdCryptoCompare")\n';
    squery += 'left outer join kpi_market_volumes kv on (kv."IdCoinCryptoCompare" = co."IdCryptoCompare")\n';
    squery += 'order by market_cap_usd desc\n';
    // console.log(squery);
    pool.query(squery, (err, resp) => {
      try {
        res.json(resp['rows']);
      } catch (error) {
        console.log(error);
      }
      next();
    });
  }

  public missingSocialCoins(req: Request, res: Response, next: NextFunction, pool: Pool) {
    let squery: String = '';
    squery += 'SELECT co."IdCryptoCompare", co."Symbol", co."Name", co."CoinName", \n';
    squery += 'si."Reddit_name", si."Facebook_link", si."Twitter_link", \n';
    squery += 'sim."Reddit_name" AS Reddit_name_manual, sim."Facebook_link" AS Facebook_link_manual, sim."Twitter_link" AS Twitter_link_manual FROM social_infos si\n';
    squery += 'INNER JOIN coins co ON si."IdCoinCryptoCompare" = co."IdCryptoCompare"\n';
    squery += 'LEFT JOIN social_infos_manual sim ON sim."IdCoinCryptoCompare" = co."IdCryptoCompare";';

    pool.query(squery, (err, resp) => {
      res.json(resp['rows']);
      next();
    });
  }

  public deleteMissingSocial(req: Request, res: Response, next: NextFunction, pool: Pool) {
    const idCoinCryptoCompare: string = req.body.IdCoinCryptoCompare;
    const values = [idCoinCryptoCompare];
    const squery = 'DELETE from social_infos_manual sim WHERE sim."IdCoinCryptoCompare" = $1;';

    pool.query(squery, values, (err, resp) => {
      if (err) {
        res.json({error: 'Error in deleteMissingSocial API'});
      } else {
        res.json({IdCoinCryptoCompare: idCoinCryptoCompare});
      }
    });
  }

  public update(req: Request, res: Response, next: NextFunction) {
  }
}
