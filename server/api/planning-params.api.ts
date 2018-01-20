// express
import {NextFunction, Response, Request, Router} from 'express';

export class PlanningParamsApi {
  public static create(router: Router) {
    // DELETE
    router.delete('/planning-params/:id([0-9a-f]{24})', (req: Request, res: Response, next: NextFunction) => {
      new PlanningParamsApi().delete(req, res, next);
    });

    // GET
    router.get('/planning-params', (req: Request, res: Response, next: NextFunction) => {
      new PlanningParamsApi().list(req, res, next);
    });
    router.get('/planning-params/:id([0-9a-f]{24})', (req: Request, res: Response, next: NextFunction) => {
      new PlanningParamsApi().get(req, res, next);
    });

    // POST
    router.post('/planning-params', (req: Request, res: Response, next: NextFunction) => {
      new PlanningParamsApi().create(req, res, next);
    });

    // PUT
    router.put('/planning-params/:id([0-9a-f]{24})', (req: Request, res: Response, next: NextFunction) => {
      new PlanningParamsApi().update(req, res, next);
    });
  }

  public create(req: Request, res: Response, next: NextFunction) {
  }

  public delete(req: Request, res: Response, next: NextFunction) {

  }

  public get (req: Request, res: Response, next: NextFunction) {
  }

  public list(req: Request, res: Response, next: NextFunction) {
  }

  public update(req: Request, res: Response, next: NextFunction) {
  }
}
