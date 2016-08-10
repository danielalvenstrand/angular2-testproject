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

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}