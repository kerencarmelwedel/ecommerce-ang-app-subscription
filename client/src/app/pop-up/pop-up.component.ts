import {Component, OnInit, ViewChild, ElementRef, NgModule} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormsModule, NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  constructor(
    private http: HttpClient,
  ) {
  }
  // subscription: Subscription = {
  //   name: '',
  //   email: ''
  // };

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
  // this.http.get('/api/subscriptions').subscribe((data) => {
    this.http.post('/api/submit-form', f.value)
      .subscribe(
        (result) => {
          console.log('Successfully subscribed!');
        }
      );
    // dismiss the modal
    // this.modalService.dismissAll();

    // console.log('Successfully subscribed!');

  }
}
