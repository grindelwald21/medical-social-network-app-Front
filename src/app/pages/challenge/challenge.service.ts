import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Challenge } from 'src/app/entities/Challenge';
import { PublicationChallenge } from 'src/app/entities/PublicationChallenge';
import { Liking } from 'src/app/entities/liking';
import { Publication } from 'src/app/entities/publication';
@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  // Challenge Service
  createChallenge(challenge: Object): Observable<Object> {
    return this.http.post<number>(`${this.baseUrl}challange/add/1`, challenge);
  }

  deleteChallenge(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}challange/delete/${id}`, { responseType: 'text' });
  }

  getChallengesList(): Observable<any> {
    return this.http.get<Challenge[]>(`${this.baseUrl}challange/getAll`);
  }

  getMyChallengesList(): Observable<any> {
    return this.http.get<Challenge[]>(`${this.baseUrl}challange/getMyChallenges/1`);
  }

  /*updateChallenge(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }*/

  /* getChallenge(id: number): Observable<any> {
     return this.http.get(`${this.baseUrl}/${id}`);
   }*/

   // Challenge Publication Service

   getPublicationByChallengeId(id: number): Observable<any> {
    return this.http.get<PublicationChallenge[]>(`${this.baseUrl}api/publicationChallenge/challenge/${id}`);
  }
  createLike(idUser: number, idPublication: number): Observable<Liking> {
    return this.http.get<Liking>(`${this.baseUrl}api/like/likeChallenge/${idUser}/${idPublication}`);
  }
  createPublicationChallenge(challengeId: number, userId: number, publication: PublicationChallenge): Observable<any> {
    return this.http.post(`${this.baseUrl}api/publicationChallenge/${challengeId}/${userId}`, publication);
  }

}