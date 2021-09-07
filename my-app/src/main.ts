//this is the first file use to get executed
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//it check the and goes to 'src/app/app.module.ts' and check that file
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
