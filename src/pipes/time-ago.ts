// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CoreLoggerProvider } from '@providers/logger';
import * as moment from 'moment';

/**
 * Pipe to turn a UNIX timestamp to "time ago".
 */
@Pipe({
    name: 'coreTimeAgo',
})
export class CoreTimeAgoPipe implements PipeTransform {
    protected logger;

    constructor(logger: CoreLoggerProvider, private translate: TranslateService) {
        this.logger = logger.getInstance('CoreTimeAgoPipe');
    }

    /**
     * Turn a UNIX timestamp to "time ago".
     *
     * @param timestamp The UNIX timestamp (without milliseconds).
     * @return Formatted time.
     */
    transform(timestamp: string | number): string {
        if (typeof timestamp == 'string') {
            // Convert the value to a number.
            const numberTimestamp = parseInt(timestamp, 10);
            if (isNaN(numberTimestamp)) {
                this.logger.error('Invalid value received', timestamp);

                return timestamp;
            }
            timestamp = numberTimestamp;
        }

        return this.translate.instant('core.ago', {$a: moment(timestamp * 1000).fromNow(true)});
    }
}
