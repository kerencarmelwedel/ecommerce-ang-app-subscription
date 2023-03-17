import {Component, OnInit, ViewChild, ElementRef, NgModule} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormsModule, NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import {SubscriptionService} from '../services/subscription.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {
  private loading: boolean;

  constructor(
    private http: HttpClient,
    private subscribe: SubscriptionService
  ) {}

  @NgModule({
    imports: [
      FormsModule
    ],
  })

  @ViewChild('popupContainer') popupContainer: ElementRef;
  name: any;
  email: any;
  private modalService: any;

  buttonHidden = false;

  ngOnInit(): void {
  }

  openPopUp(): void {
    this.popupContainer.nativeElement.style.display = 'block';
  }

  closePopUp(): void {
    this.popupContainer.nativeElement.style.display = 'none';
  }

  onSubmit(f: NgForm): void {
    this.loading = true;
    setTimeout(() => {
      this.subscribe
        .submitSubscribe(this.name, this.email)
        .subscribe(
          (res: any) => {
            console.log(res);
            this.loading = false;
            f.reset();
            this.closePopUp();
            // console.log('Successfully subscribed!');
          },
          (err) => {
            console.log(err);
            this.loading = false;
          }
        );
    }, 750);
  }
}
