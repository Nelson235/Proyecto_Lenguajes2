import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';



const endpoint2 = 'http://localhost:8080/api/';
const endpoint =  'https://localhost:7117/api/';

const httpOptions ={
  headers: new HttpHeaders({

    'Content-Type':'application/json'
  })
};



@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http: HttpClient) { //aqui llama un cliente 


  }

  /*get(): Observable<any> {

    return this.http.get(endpoint+'Parking/GetParking',httpOptions)

  }*/

  get(): Observable<any> {

    return this.http.get(endpoint2+'Parking/GetParking',httpOptions)

  }



 /* delete(idParking: number): Observable<any> {
    return this.http.delete(endpoint+'Parking/DeleteParking/'+idParking,httpOptions)
    .pipe(
      catchError(this.handleError('DeleteParking'))
    );
  }*/

  delete(id: number): Observable<any> {
    return this.http.delete(endpoint2+'Parking/delete/'+id,httpOptions)
    .pipe(
      catchError(this.handleError('DeleteParking'))
    );
  }


 /* add(parking: any){
    return this.http.post(endpoint+'Parking/', parking, httpOptions)
  }*/

  add(parking: any){
    return this.http.post(endpoint2+'Parking/', parking, httpOptions)
  }


  

 /* getById(id:any): Observable<any> {
    return this.http.get(endpoint+'Parking/GetParking/'+id,httpOptions)
  }*/

  getById(id:any): Observable<any> {
    return this.http.get(endpoint2+'Parking/GetParking/'+id,httpOptions)
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
}


/////////////////////////USER////////////

get_User(): Observable<any> {

  return this.http.get(endpoint+'User/GetUsers',httpOptions)

}

get_User2(): Observable<any> {

  return this.http.get(endpoint2+'User/GetUsers',httpOptions)

}

delete_User(idUser: number): Observable<any> {
  return this.http.delete(endpoint+'User/DeleteUser/'+idUser,httpOptions)
  .pipe(
    catchError(this.handleError('DeleteUser'))
  );
}

delete_User2(idUser: number): Observable<any> {
  return this.http.delete(endpoint2+'User/DeleteUser/'+idUser,httpOptions)
  .pipe(
    catchError(this.handleError('DeleteUser'))
  );
}

add_User(user: any){
  return this.http.post(endpoint+'User/', user, httpOptions)
}

add_User2(user: any){
  return this.http.post(endpoint2+'User/', user, httpOptions)
}

getById_User(id:any): Observable<any> {
  return this.http.get(endpoint+'User/GetUser/'+id,httpOptions)
}

getById_User2(id:any): Observable<any> {
  return this.http.get(endpoint2+'User/GetUser/'+id,httpOptions)
}

/////////////////////////VEHICULE////////////

get_Vehicule(): Observable<any> {

  return this.http.get(endpoint2+'User/GetUsers',httpOptions)

}

delete_Vehicule(id_Vehicule: number): Observable<any> {
  return this.http.delete(endpoint2+'User/DeleteUser/'+id_Vehicule,httpOptions)
  .pipe(
    catchError(this.handleError('DeleteUser'))
  );
}

add_Vehicule(vehicule: any){
  return this.http.post(endpoint2+'User/', vehicule, httpOptions)
}

getById_Vehicule(id:any): Observable<any> {
  return this.http.get(endpoint2+'User/GetUser/'+id,httpOptions)
}

/////////////////////////VEHICULE TYPE ////////////

get_VehiculeType(): Observable<any> {

  return this.http.get(endpoint2+'User/GetUsers',httpOptions)

}

delete_VehiculeType(id_VehiculeType: number): Observable<any> {
  return this.http.delete(endpoint2+'User/DeleteUser/'+id_VehiculeType,httpOptions)
  .pipe(
    catchError(this.handleError('DeleteUser'))
  );
}

add_VehiculeType(vehiculeType: any){
  return this.http.post(endpoint2+'User/', vehiculeType, httpOptions)
}

getById_VehiculeType(id:any): Observable<any> {
  return this.http.get(endpoint2+'User/GetUser/'+id,httpOptions)
}

/////////////////////////RATE////////////

get_Rates(): Observable<any> {

  return this.http.get(endpoint2+'User/GetUsers',httpOptions)

}

delete_Rate(id_VehiculeType: number): Observable<any> {
  return this.http.delete(endpoint2+'User/DeleteUser/'+id_VehiculeType,httpOptions)
  .pipe(
    catchError(this.handleError('DeleteUser'))
  );
}

add_Rate(vehiculeType: any){
  return this.http.post(endpoint2+'User/', vehiculeType, httpOptions)
}

getById_Rate(id:any): Observable<any> {
  return this.http.get(endpoint2+'User/GetUser/'+id,httpOptions)
}

}
