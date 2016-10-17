import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { AppComponent } from './app.component';
import { HeroesComponent } from '../pages/heroes/heroes.component';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    IonicModule.forRoot(AppComponent)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    HeroesComponent,
    ItemDetailsPage,
    ListPage
  ],
  providers: []
})
export class AppModule {}
