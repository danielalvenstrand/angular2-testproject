import {Injectable} from '@angular/core';

@Injectable()
export class AppService {
    private _currentPage: number;

    isCurrentPage(value:number){
      return this._currentPage == value;
    }

    setCurrentPage(value:number){
      this._currentPage=value;
    }
}