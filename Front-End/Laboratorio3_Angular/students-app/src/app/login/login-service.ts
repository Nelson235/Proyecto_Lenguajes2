import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';


const endpoint2 = 'http://localhost:8080/api/';
const endpoint = 'https://localhost:7117/api/';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) {



    }

    getUsers(): Observable<any> {

        return this.http.get(endpoint + 'User/GetUsers', httpOptions)

    }

    getUser(email: any): Observable<any> {
        return this.http.get(endpoint + 'User/GetUserEmail/' + email, httpOptions)
            .pipe(
                catchError(this.handleError('getUserEmail'))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };


    }


}
