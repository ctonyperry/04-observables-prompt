import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

@Injectable()
export class InfoWindowService{

constructor(private http: Http){}
    findTurret(turretNumber){
        return this.http.get('http://localhost:3000/api/turret/' + turretNumber);
    }

}