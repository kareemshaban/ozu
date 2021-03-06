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

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { AddonModBookIndexComponent } from '../../components/index/index';

/**
 * Page that displays a book.
 */
@IonicPage({ segment: 'addon-mod-book-index' })
@Component({
    selector: 'page-addon-mod-book-index',
    templateUrl: 'index.html',
})
export class AddonModBookIndexPage {
    @ViewChild(AddonModBookIndexComponent) bookComponent: AddonModBookIndexComponent;

    title: string;
    module: any;
    courseId: number;
    chapterId: number;

    constructor(navParams: NavParams) {
        this.module = navParams.get('module') || {};
        this.courseId = navParams.get('courseId');
        this.chapterId = navParams.get('chapterId');
        this.title = this.module.name;
        alert('/Volumes/kareem/SmartWay/OZU/ozu/src/addon/mod/book/pages/index/index.ts');
    }

    /**
     * Update some data based on the book instance.
     *
     * @param book Book instance.
     */
    updateData(book: any): void {
        this.title = book.name || this.title;
    }
}
