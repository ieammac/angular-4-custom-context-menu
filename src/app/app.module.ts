import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ItemListComponent} from './item-list/item-list';
import {NotFoundComponent} from './not-found/not-found.component';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AppRoutingModule} from './app-routing.module';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ContextmenuComponent} from "./context-menu/context-menu.component";

@NgModule({
    declarations: [
        ItemListComponent,
        NotFoundComponent,
        AppComponent,
        NavbarComponent,
        ContextmenuComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],

    // declaring here makes these singletons
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy}, ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
