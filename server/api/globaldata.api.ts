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
    squery = 'select * from global_data';
    pool.query(squery, (err, resp) => {
      try {
        res.json(resp['rows']);
      } catch (error) {
        console.log(error);
      }
    });
  }
}
