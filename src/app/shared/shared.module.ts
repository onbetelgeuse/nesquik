import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommuneService } from './services/commune.service';

import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faUnderline,
  faBold,
  faItalic,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [],
  providers: [CommuneService],
  imports: [CommonModule, FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class SharedModule {
  constructor(private readonly library: FaIconLibrary) {
    this.library.addIcons(faUnderline, faBold, faItalic);
  }
}
