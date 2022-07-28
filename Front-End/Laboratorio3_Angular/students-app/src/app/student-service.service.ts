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

 //******************PARKING**************************** */

  get(): Observable<any> {

    return this.http.get(endpoint2+'Parking/GetParking',httpOptions)

  }

  delete(id: number): Observable<any> {
    return this.http.delete(endpoint2+'Parking/delete/'+id,httpOptions)
    .pipe(
      catchError(this.handleError('DeleteParking'))
    );
  }

  add(parking: any){
    return this.http.post(endpoint2+'Parking/', parking, httpOptions)
  }

  add_User2(id:number,parking: any){
    return this.http.put(endpoint2+'Parking/update/'+id, parking, httpOptions)
  }

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

  return this.http.get(endpoint2+'User/GetUsers',httpOptions)

}


delete_User(id_User: number): Observable<any> {
  return this.http.delete(endpoint2+'User/DeleteUser/'+id_User,httpOptions)
  .pipe(
    catchError(this.handleError('DeleteUser'))
  );
}

add_User(user: any){
  return this.http.post(endpoint2+'User/', user, httpOptions)
}

getById_User(id:any): Observable<any> {
  return this.http.get(endpoint2+'User/GetUser/'+id,httpOptions)
}

/////////////////////////VEHICULE////////////

get_Vehicule(): Observable<any> {

  return this.http.get(endpoint2+'Vehicule/GetVehicules',httpOptions)

}

delete_Vehicule(id_Vehicule: number): Observable<any> {
  return this.http.delete(endpoint2+'Vehicule/DeleteVehicule/'+id_Vehicule,httpOptions)
  .pipe(
    catchError(this.handleError('DeleteVehicule'))
  );
}

add_Vehicule(vehicule: any){
  return this.http.post(endpoint2+'Vehicule/', vehicule, httpOptions)
}

getById_Vehicule(id:any): Observable<any> {
  return this.http.get(endpoint2+'Vehicule/GetVehicule/'+id,httpOptions)
}

/////////////////////////VEHICULE TYPE ////////////

get_VehiculeType(): Observable<any> {

  return this.http.get(endpoint2+'Vehicule_Type/GetVehicule_Type',httpOptions)

}

delete_VehiculeType(id_VehiculeType: number): Observable<any> {
  return this.http.delete(endpoint2+'Vehicule_Type/delete/'+id_VehiculeType,httpOptions)
  .pipe(
    catchError(this.handleError('Vehicule_Type'))
  );
}

add_VehiculeType(vehiculeType: any){
  return this.http.post(endpoint2+'Vehicule_Type/', vehiculeType, httpOptions)
}

getById_VehiculeType(id:any): Observable<any> {
  return this.http.get(endpoint2+'Vehicule_Type/GetVehicule_Type/'+id,httpOptions)
}

/////////////////////////RATE////////////

get_Rates(): Observable<any> {

  return this.http.get(endpoint2+'Rate/GetRate',httpOptions)

}

delete_Rate(id_VehiculeType: number): Observable<any> {
  return this.http.delete(endpoint2+'Rate/delete/'+id_VehiculeType,httpOptions)
  .pipe(
    catchError(this.handleError('DeleteRate'))
  );
}

add_Rate(vehiculeType: any){
  return this.http.post(endpoint2+'Rate/', vehiculeType, httpOptions)
}

getById_Rate(id:any): Observable<any> {
  return this.http.get(endpoint2+'Rate/GetRate/'+id,httpOptions)
}

/////////////////////////ROLE////////////

get_Roles(): Observable<any> {

  return this.http.get(endpoint2+'User/GetUsers',httpOptions)

}

delete_role(id_Role: number): Observable<any> {
  return this.http.delete(endpoint2+'User/DeleteUser/'+id_Role,httpOptions)
  .pipe(
    catchError(this.handleError('DeleteUser'))
  );
}

add_Role(role: any){
  return this.http.post(endpoint2+'User/', role, httpOptions)
}

getById_Role(id:any): Observable<any> {
  return this.http.get(endpoint2+'User/GetUser/'+id,httpOptions)
}


/////////////////////////SPACE////////////

get_Spaces(): Observable<any> {

  return this.http.get(endpoint2+'User/GetUsers',httpOptions)

}

delete_Space(id_Space: number): Observable<any> {
  return this.http.delete(endpoint2+'User/DeleteUser/'+id_Space,httpOptions)
  .pipe(
    catchError(this.handleError('DeleteUser'))
  );
}

add_Space(Space: any){
  return this.http.post(endpoint2+'User/', Space, httpOptions)
}

getById_Space(id:any): Observable<any> {
  return this.http.get(endpoint2+'User/GetUser/'+id,httpOptions)
}
}
