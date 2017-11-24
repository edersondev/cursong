import { Observable } from 'rxjs/Observable';
import {Response} from '@angular/http'

export class ErrorHandler {
  static handleError(error: Response | any){
    if(error instanceof Response){
      let errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`;
      return Observable.throw(errorMessage);
    }
    return Observable.throw(error.toString());
  }
}