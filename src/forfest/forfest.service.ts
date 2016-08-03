import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Rx';
import { IPlace } from '../shared/place/place';

@Injectable()
export class ForfestService {

    constructor(private _http: Http) {
    }

    public Get = (): Observable<IPlace[]> => {
        return this._http.get("../../assets/json/places.json")
            .map((response: Response) => <IPlace[]>response.json())
            .catch(this.handleError);
    }


    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}