import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckreviewsComponent } from './checkreviews/checkreviews.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ValidateproductsComponent } from './validateproducts/validateproducts.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CraftlistComponent } from './craftlist/craftlist.component';
import { SinglecraftComponent } from './singlecraft/singlecraft.component';
import { DeletecraftComponent } from './deletecraft/deletecraft.component';

const routes: Routes = [{path:'',component:WelcomeComponent},
{path:'validate', component:ValidateproductsComponent},
{path:'checkreview',component:CheckreviewsComponent},
{path:'user',component:UserComponent},
{path:'home',component:HomeComponent},
{path:'craftlist',component:CraftlistComponent},
{path:'singlecraft',component:SinglecraftComponent},
{path:'deletecraft',component:DeletecraftComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
