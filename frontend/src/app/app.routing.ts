import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FrontendLayoutComponent} from './layouts/frontend-layout.component';

export const routes : Routes = [
	{
		path:'',
		component:FrontendLayoutComponent,
		pathMatch:'full',
		loadChildren:'app/index/index.module#IndexModule'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {

}