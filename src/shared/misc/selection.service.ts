/*
* <summary>
*    Uses jQuery.
*    This service takes an HTMLTextAreaElement.
*    When selecting text inside that element, the selection range is stored.
*    When wanting to surround the selection with a tag, call "surround".
*    This returns the new content of the element.
* </summary
*/

import { Injectable } from '@angular/core';

@Injectable()
export class SelectionService {
    private _selEment: HTMLTextAreaElement;
    private _selection: {start: number; end: number};
    private _inside: boolean;

    public set selEment(e : any) {
        this._selEment = <HTMLTextAreaElement>e;
        this.bind();
    }

    constructor() {
        this._inside = false;
    }

    private bind() {
        $(this._selEment).bind("mousedown",()=>{
            this._inside = true;
        });

        $('body').bind("mouseup",()=>{
            (this._inside && window.getSelection) ? this._selection = {
                start: (this._selEment).selectionStart,
                end :this._selEment.selectionEnd
            } : this._selection = null;
            this._inside = false;
        });
    }

    public surround(tag:string):string {
        let orig: string = this._selEment.value;
        if(this._selection) {
            let str: string = orig.substring(0,this._selection.start)
            +'<'+tag+'>'
            +orig.substring(this._selection.start,this._selection.end)
            +'</'+tag+'>'
            +orig.substring(this._selection.end,orig.length);
            return str;
        } else return orig;
    }

}