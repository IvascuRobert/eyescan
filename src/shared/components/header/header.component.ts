import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppActions } from 'src/app/main/state/app.actions';
import { selectToggleDrawer } from 'src/app/main/state/app.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule]
})
export class HeaderComponent implements OnInit {
  toggleDrawer$ = new Observable();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.toggleDrawer$ = this.store.select(selectToggleDrawer);
  }

  toggleHeader() {
    this.store.dispatch(AppActions.appToggleDrawer());
  }
}
