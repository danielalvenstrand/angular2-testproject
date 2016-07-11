import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Rx';
import { INote } from '../shared/note/note';
import { Configuration } from '../app/app.constants';

@Injectable()
export class NoteService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http, private _configuration: Configuration) {

        this.actionUrl = _configuration.ServerWithApiUrl + 'note';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        //this.headers.append('Accept', 'application/json');
    }

    public GetAll = (): Observable<INote[]> => {
        return this._http.get(this.actionUrl)
            .map((response: Response) => <INote[]>response.json())
            .catch(this.handleError);
    }

    /*public GetSingle = (id: number): Observable<INote> => {
        return this._http.get(this.actionUrl + id)
            .map((response: Response) => <INote>response.json())
            .catch(this.handleError);
    }*/

    public Add = (subject: string, text: string): Observable<INote> => {
        let toAdd = JSON.stringify({ subject: subject, text: text });
        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <INote>response.json())
            .catch(this.handleError);
    }

    public Update = (note: INote): Observable<INote> => {
        return this._http.put(this.actionUrl + "/" + note.id, JSON.stringify({ subject: note.subject, text: note.text }), { headers: this.headers })
            .map((response: Response) => <INote>response.json())
            .catch(this.handleError);
    }

    public Delete = (note: INote): Observable<Response> => {
        return this._http.delete(this.actionUrl + "/" + note.id)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}