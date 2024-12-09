import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
    return new CustomTranslateLoader(http);
  }

  export class CustomTranslateLoader implements TranslateLoader {
    constructor(private http: HttpClient) {}
  
    getTranslation(lang: string): Observable<any> {
      return this.http.get("Language/"+lang+".json");
    }
  }