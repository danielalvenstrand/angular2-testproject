import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { IPlace } from '../shared/place/place';
import { Configuration } from '../app/app.constants';

@Injectable()
export class ForfestService{
    private gpAPIUrl: string;
    private headers: Headers;
    private gpAPIKey: string;

    constructor(private _http: Http, private _configuration: Configuration) {
        this.headers = new Headers();
        this.headers.append('Content-Type', "application/json");
    }

    /*public Get = (): Observable<IPlace[]> => {
        return this._http.get("../../assets/json/places.json")
        .map((response: Response) => <IPlace[]>response.json())
        .catch(this.handleError);
    }*/

    public GetPlaceSearch = (location: string, radius: string, type: string): Observable<IPlace[]> => {
        let toAsk = JSON.stringify({ key: this._configuration.gpAPIKey, location: location, radius: radius, type: type });
        return this._http.post("http://localhost:8000/api/placesearch", toAsk, { headers: this.headers })
            .map((response: Response) => <IPlace[]>response.json().results)
            .catch(this.handleError);
    }

    /*public GetPlacePhotos = (photoreference: string, maxwidth: string): Observable<any> => {
        let toAsk = JSON.stringify({ key: this._configuration.gpAPIKey, photoreference: photoreference, maxwidth: maxwidth });
        return this._http.post("http://localhost:8000/api/placephotos", toAsk, { headers: this.headers })
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }*/

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}