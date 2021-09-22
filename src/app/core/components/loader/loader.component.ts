import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  loaderShown$: Observable<boolean>;

  constructor(private loaderService: LoaderService) {
    this.loaderShown$ = this.loaderService.loaderShown$;
  }
}
