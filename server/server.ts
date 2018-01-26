import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as morgan from 'morgan';
// api
import {CoinsApi} from './api/coins.api';
import errorHandler = require('errorhandler');
import { Pool, Client } from 'pg';
import {ParamsApi} from "./api/params.api";
import {ProcessesApi} from "./api/processes.api";

/**
 * The server.
 *
 * @class Server
 */
// https://stackoverflow.com/questions/10870048/spawning-child-processes-in-an-express-server
export class Server {

  /**
   * The express application.
   * @type {Application}
   */
  public app: express.Application;

  /**
   * The Database connexion
   */
  private dbAdress: string;

  /**
   * The Database connexion
   */
  public pool: Pool;

  /**
   * Bootstrap the application.
   * @static
   */
  public static bootstrap(dbAdress: string): Server {
    return new Server(dbAdress);
  }

  /**
   * @constructor
   */
  constructor(dbAdress: string) {
    this.dbAdress = dbAdress;

    // create expressjs application
    this.app = express();

    // configure application
    this.config();

    // connect to database
    this.openConnection(this.dbAdress);

    // add api
    this.api();
  }

  /**
   * REST API endpoints.
   */
  public api() {
    const router = express.Router();

    // configure CORS (Attention restriction à provenance http://localhost:4200
    const corsOptions: cors.CorsOptions = {
      allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token'],
      credentials: true,
      methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
      /*origin: 'http://localhost:4200',*/
      preflightContinue: false
    };
    router.use(cors(corsOptions));

    // root request
    router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.json({announcement: 'Welcome to our API.'});
      next();
    });

    // create API routes
    CoinsApi.create(router, this.pool);
    ParamsApi.create(router, this.pool);
    ProcessesApi.create(router, this.pool);

    // wire up the REST API
    this.app.use('/api', router);

    // enable CORS pre-flight
    router.options('*', cors(corsOptions));
  }

  /**
   * Configure application
   *
   * @class Server
   */
  public config() {
    // morgan middleware to log HTTP requests
    this.app.use(morgan('dev'));

    // use json form parser middlware
    this.app.use(bodyParser.json());

    // use query string parser middlware
    this.app.use(bodyParser.urlencoded({
      extended: true
    }));

    // catch 404 and forward to error handler
    this.app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
      err.status = 404;
      next(err);
    });

    // error handling
    this.app.use(errorHandler());

    /* this.app.use(function (req, res, next) {
      setTimeout(next, 1);
    }); */
  }

  private openConnection(connectionString: string) {
    // https://node-postgres.com/

    this.pool = new Pool({
      connectionString: connectionString,
    });

    this.pool.on('error', (err, client) => {
      console.error('Unexpected error on idle client', err);
    });

    /*this.pool.query('SELECT * from public.coins', (err, res) => {
      console.log(err, res);
      // this.pool.end();
    });*/
  }
}

