import {ModuleWithProviders, NgModule} from '@angular/core';
import {NgForageOptions} from './config/ng-forage-options';
import {DEFAULT_CONFIG} from './misc/injection-tokens';

/**
 * NgForage core module
 */
@NgModule({})
export class NgForageModule {

  // istanbul ignore next
  public static forRoot(config: Partial<NgForageOptions> = {}): ModuleWithProviders {
    return {
      ngModule: NgForageModule,
      providers: [
        {
          provide: DEFAULT_CONFIG,
          useValue: Object.assign({}, config)
        }
      ]
    };
  }
}