import { Request, Response } from 'express';

export abstract class BaseController {
  protected req: Request;

  protected res: Response;

  protected abstract handle(): Promise<void | any>;

  public execute(req: Request, res: Response): void {
    this.req = req;
    this.res = res;

    this.handle();
  }
}
