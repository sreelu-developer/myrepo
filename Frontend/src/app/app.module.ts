import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidateproductsComponent } from './validateproducts/validateproducts.component';
import { CheckreviewsComponent } from './checkreviews/checkreviews.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CheckproductreviewComponent } from './checkproductreview/checkproductreview.component';
import { VerifyproductComponent } from './verifyproduct/verifyproduct.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CraftlistComponent } from './craftlist/craftlist.component';
import { SinglecraftComponent } from './singlecraft/singlecraft.component';
import { DeletecraftComponent } from './deletecraft/deletecraft.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidateproductsComponent,
    CheckreviewsComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CheckproductreviewComponent,
    VerifyproductComponent,
    WelcomeComponent,
    CraftlistComponent,
    SinglecraftComponent,
    DeletecraftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
