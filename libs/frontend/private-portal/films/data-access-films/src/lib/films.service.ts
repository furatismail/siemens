import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({ providedIn: "root" })
export class FilmsService {
    private httpClient = inject(HttpClient)

    getAll(): Observable<Array<any>> {
        return this.httpClient.get<Array<any>>('https://5ed74760152c310016d84d62.mockapi.io/api/films');
    }
}