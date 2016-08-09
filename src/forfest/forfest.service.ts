import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { IPlace } from '../shared/place/place';
import { Configuration } from '../app/app.constants';

declare var google: any;

@Injectable()
export class ForfestService{
    private gpAPIUrl: string;
    private headers: Headers;
    private gpAPIKey: string;

    constructor(private _http: Http, private _configuration: Configuration) {
        this.headers = new Headers();
        this.headers.append('Content-Type', "application/json");
    }

    /*public GetPlaceSearch = (location: string, radius: string, type: string): Observable<IPlace[]> => {
        let toAsk = JSON.stringify({ key: this._configuration.gpAPIKey, location: location, radius: radius, type: type });
        return this._http.post("http://localhost:8000/api/placesearch", toAsk, { headers: this.headers })
            .map((response: Response) => <IPlace[]>response.json().results)
            .catch(this.handleError);
    }*/

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    public initMap(): void {
        console.log("yep");
    }

}