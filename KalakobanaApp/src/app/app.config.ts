import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core'
import {TranslateHttpLoader} from '@ngx-translate/http-loader'

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),  provideAnimations(),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }))
  ]
};

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './i18n/', '.json');

}