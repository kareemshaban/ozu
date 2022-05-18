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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreCompileHtmlComponent } from './compile-html';
import { CoreComponentsModule } from '@components/components.module';
import { MoodleMobileApp } from '@app/app.component';
import { IonicModule } from 'ionic-angular';
import { CoreDirectivesModule } from '@directives/directives.module';
import { CorePipesModule } from '@pipes/pipes.module';
import { CoreCourseComponentsModule } from '@core/course/components/components.module';
import { CoreCoursesComponentsModule } from '@core/courses/components/components.module';
import { CoreSiteHomeComponentsModule } from '@core/sitehome/components/components.module';
import { CoreUserComponentsModule } from '@core/user/components/components.module';
import { CoreCourseDirectivesModule } from '@core/course/directives/directives.module';
import { CoreSitePluginsDirectivesModule } from '@core/siteplugins/directives/directives.module';
import { CoreQuestionComponentsModule } from '@core/question/components/components.module';
import { AddonModAssignComponentsModule } from '@addon/mod/assign/components/components.module';
import { AddonModWorkshopComponentsModule } from '@addon/mod/workshop/components/components.module';
import { CoreBlockComponentsModule } from '@core/block/components/components.module';
import { CoreEditorComponentsModule } from '@core/editor/components/components.module';
import { CoreSearchComponentsModule } from '@core/search/components/components.module';

@NgModule({
    declarations: [
        CoreCompileHtmlComponent 

    ],
    imports: [
        CommonModule,
        CoreComponentsModule ,
          IonicModule , 
//         TranslateModule.forChild() , 
//         , CoreComponentsModule, CoreDirectivesModule, CorePipesModule,
//         CoreCourseComponentsModule, CoreCoursesComponentsModule, CoreSiteHomeComponentsModule, CoreUserComponentsModule,
//         CoreCourseDirectivesModule, CoreSitePluginsDirectivesModule, CoreQuestionComponentsModule, AddonModAssignComponentsModule,
//         AddonModWorkshopComponentsModule, CoreBlockComponentsModule, CoreEditorComponentsModule, CoreSearchComponentsModule 
  
    ],
    exports: [
        CoreCompileHtmlComponent
    ]
})
export class CoreCompileHtmlComponentModule {}
