import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server: string = "http://ec2-52-208-98-0.eu-west-1.compute.amazonaws.com:8000/";
    public ApiUrl: string = "api/";
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}