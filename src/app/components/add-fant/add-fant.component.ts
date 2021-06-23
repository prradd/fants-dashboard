import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Fant} from "../../Fant";
import { UiService } from "../../services/ui.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-fant',
  templateUrl: './add-fant.component.html',
  styleUrls: ['./add-fant.component.scss']
})
export class AddFantComponent implements OnInit {
  @Output() onAddFant: EventEmitter<Fant> = new EventEmitter();
  fantText?: string;
  showAddFant?: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe(value => (this.showAddFant = value))
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.fantText){
      alert('Please add a Fant');
      return;
    }

    const newFant = {
      fantText: this.fantText,
    }

    this.onAddFant.emit(newFant);

    this.fantText = '';
  }

}
