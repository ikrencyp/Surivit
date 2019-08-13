import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { FILE_PATH } from './file-path';

export const TRANSLATE = {
    CONFIG: {
        loader: {
            provide: TranslateLoader,
            useFactory: (httpClient: HttpClient): TranslateHttpLoader => {
                return new TranslateHttpLoader(httpClient,
                    FILE_PATH.JSONS.TRANSLATE.LANGUAGE.PREFIX,
                    FILE_PATH.JSONS.TRANSLATE.LANGUAGE.SUFFIX);
            },
            deps: [HttpClient]
        },
        isolate: false
    },
    LANGUAGE: {
        TH: 'th'
    }
};
