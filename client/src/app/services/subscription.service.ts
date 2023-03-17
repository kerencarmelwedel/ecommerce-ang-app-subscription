import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {


  constructor(
    private api: ApiService
  ) {}

  submitSubscribe(name, email) {
    return this.api.postTypeRequest('subscriptions/submit-form', {
      name: name,
      email: email,
    });
  }

}
