import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddFant: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddFant(): void {
    this.showAddFant = !this.showAddFant;
    this.subject.next(this.showAddFant)
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable()
  }
}
