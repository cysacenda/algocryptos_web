// express
import {NextFunction, Response, Request, Router} from 'express';
import { Pool, Client } from 'pg';

export class ProcessesApi {
  public static create(router: Router, pool: Pool) {
    // GET
    router.get('/processes', (req: Request, res: Response, next: NextFunction) => {
      new ProcessesApi().list(req, res, next, pool);
    });
  }

  public list(req: Request, res: Response, next: NextFunction, pool: Pool) {
    let squery: String = '';
    squery = 'select "IdProcess", "Name", "timestamp"\n';
    squery += 'from process_params\n';
    squery += 'order by timestamp\n';
    pool.query(squery, (err, resp) => {
      // console.log(err, resp);
      // console.log(squery);
      res.json(resp['rows']);
      next();
    });
  }
}
