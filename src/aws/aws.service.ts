import {Injectable} from '@angular/core';

@Injectable()
export class AwsService{
    AWS:any;
    constructor(){
        this.AWS = require('node_modules/aws-sdk/dist/aws-sdk.min.js');
        }
}