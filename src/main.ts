import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLicense } from '@syncfusion/ej2-base';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

registerLicense("ORg4AjUWIQA/Gnt2VVhjQlFac1lJXGFWf1NpR2NbfU5zflRBallQVAciSV9jS3xSd0RjWXxfeHVXRmheVA==");

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
