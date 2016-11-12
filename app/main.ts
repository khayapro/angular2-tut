import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

//App modules
import {AppModule} from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);