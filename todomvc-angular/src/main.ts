import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { enableProdMode, } from "@angular/core";

console.time("p");
enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));

console.timeEnd("p");