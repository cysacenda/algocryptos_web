// express
import {NextFunction, Response, Request, Router} from 'express';
import { Pool, Client } from 'pg';

export class CoinsApi {
  public static create(router: Router, pool: Pool) {
    // DELETE
    router.delete('/coins/:id([0-9a-f]{24})', (req: Request, res: Response, next: NextFunction) => {
      new CoinsApi().delete(req, res, next);
    });

    // GET
    router.get('/coins', (req: Request, res: Response, next: NextFunction) => {
      new CoinsApi().list(req, res, next, pool);
    });
    router.get('/coins/:id([0-9a-f]{24})', (req: Request, res: Response, next: NextFunction) => {
      new CoinsApi().get(req, res, next);
    });

    // POST
    router.post('/coins', (req: Request, res: Response, next: NextFunction) => {
      new CoinsApi().create(req, res, next);
    });

    // PUT
    router.put('/coins/:id([0-9a-f]{24})', (req: Request, res: Response, next: NextFunction) => {
      new CoinsApi().update(req, res, next);
    });
  }

  public create(req: Request, res: Response, next: NextFunction) {
  }

  public delete(req: Request, res: Response, next: NextFunction) {

  }

  public get (req: Request, res: Response, next: NextFunction) {
  }

  public list(req: Request, res: Response, next: NextFunction, pool: Pool) {
    let squery: String = '';
    /*
    squery = 'select co."IdCryptoCompare", co."Name", co."Symbol", pr.price_usd, pr.market_cap_usd, pr.rank, pr.percent_change_1h, pr.percent_change_24h, pr.percent_change_7d\n';
    squery += 'from coins as co\n';
    squery += 'inner join prices as pr on (co."IdCryptoCompare" = pr."IdCryptoCompare")\n';
    */

    squery = 'select co."IdCryptoCompare", co."Name", co."Symbol", pr.price_usd, pr.market_cap_usd, pr.rank, pr.percent_change_1h, pr.percent_change_24h, pr.percent_change_7d, max(sr."Reddit_subscribers") as reddit_subscribers, max(sr.timestamp) as timestamp \n';
    squery += 'from coins as co\n';
    squery += 'inner join prices as pr on (co."IdCryptoCompare" = pr."IdCryptoCompare")\n';
    squery += 'left outer join social_stats_reddit sr on (sr."IdCoinCryptoCompare" = co."IdCryptoCompare")\n';
    squery += 'group by co."IdCryptoCompare", co."Name", co."Symbol", pr.price_usd, pr.market_cap_usd, pr.rank, pr.percent_change_1h, pr.percent_change_24h, pr.percent_change_7d\n';

    pool.query(squery, (err, resp) => {
      // console.log(err, resp);
      res.json(resp['rows']);
      next();
    });
  }

  public update(req: Request, res: Response, next: NextFunction) {
  }
}
