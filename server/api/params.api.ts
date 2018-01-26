// express
import {NextFunction, Response, Request, Router} from 'express';
import { Pool, Client } from 'pg';

export class ParamsApi {
  public static create(router: Router, pool: Pool) {
    // GET
    router.get('/params/resetprocesses', (req: Request, res: Response, next: NextFunction) => {
      new ParamsApi().get(req, res, next, pool);
    });
  }

  public create(req: Request, res: Response, next: NextFunction) {
  }

  public delete(req: Request, res: Response, next: NextFunction) {

  }

  // Trick to allow unlock processes if needed
  public get (req: Request, res: Response, next: NextFunction, pool: Pool) {
    let squery: String = '';
    squery = 'delete from process_params';
    pool.query(squery, (err, resp) => {
      next();
    });
  }
}
