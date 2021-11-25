import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BottomNavigationComponent } from './bottom-navigation/bottom-navigation.component';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchBoxComponent } from './header/search-box/search-box.component';
import { UserThumbnailComponent } from './user-thumbnail/user-thumbnail.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BottomNavigationComponent,
    LayoutComponent,
    NotFoundComponent,
    SearchBoxComponent,
    UserThumbnailComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule, FormsModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    BottomNavigationComponent,
    LayoutComponent,
    NotFoundComponent,
  ],
})
export class GlobalModule {}
