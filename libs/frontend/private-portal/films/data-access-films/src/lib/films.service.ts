import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, lastValueFrom } from 'rxjs';
import { API_URL } from '@siemens/frontend/shared/utility';

@Injectable({ providedIn: "root" })
export class FilmsService {
    private apiUrl = inject(API_URL)
    private httpClient = inject(HttpClient)

    getAll(): Observable<Array<any>> {
        // private portal => www.privatni.api.sk
        // public-portal => www.public.api.sk
        return this.httpClient.get<Array<any>>('/api/films');
    }

    getAll2(): Promise<Array<any>> {
        return lastValueFrom(this.httpClient.get<Array<any>>('/api/films'));
    }
}