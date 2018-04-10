import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemListComponent} from './item-list/item-list';
import {NotFoundComponent} from './not-found/not-found.component';

const appRoutes: Routes = [

    {
        path: 'list',
        component: ItemListComponent
    },
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false, // <-- debugging purposes only
            }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
