// express
import {NextFunction, Response, Request, Router} from 'express';
import { Pool, Client } from 'pg';

export class ProcessesApi {
  public static create(router: Router, pool: Pool) {
    // GET
    router.get('/processes', (req: Request, res: Response, next: NextFunction) => {
      new ProcessesApi().list(req, res, next, pool);
    });

    router.get('/processes/:status([A-Z]+)', (req: Request, res: Response, next: NextFunction) => {
      new ProcessesApi().get(req, res, next, pool);
    });
  }

  public list(req: Request, res: Response, next: NextFunction, pool: Pool) {
    let squery: String = '';
    squery = 'select process_id, process_name, status, timestamp\n';
    squery += 'from process_params\n';
    squery += 'order by timestamp\n';
    pool.query(squery, (err, resp) => {
      res.json(resp['rows']);
      next();
    });
  }

  public get(req: Request, res: Response, next: NextFunction, pool: Pool) {
    const PARAM_ID: String = 'status';
    if (req.params[PARAM_ID] === undefined) {
      res.sendStatus(404);
      next();
      return;
    }

    // get status (SUCCESS / ERROR)
    const status: string = req.params[PARAM_ID];

    let squery: String = '';
    squery = 'select pph.process_id, pph.process_name, pd.description, max(pph.timestamp) as timestamp\n';
    squery += 'from process_params_histo pph\n';
    squery += 'left outer join process_description pd on (pd.process_name = pph.process_name)\n';
    squery += 'where status = \'' + status + '\'\n';
    squery += 'group by process_id, pph.process_name, pd.description\n';
    squery += 'order by timestamp desc\n';
    squery += 'limit 12\n';
    // console.log(squery);
    pool.query(squery, (err, resp) => {
      res.json(resp['rows']);
      next();
    });
  }
}
