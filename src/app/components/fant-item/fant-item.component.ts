import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Fant} from "../../Fant";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-fant-item',
  templateUrl: './fant-item.component.html',
  styleUrls: ['./fant-item.component.css']
})
export class FantItemComponent implements OnInit {

  @Input() fant: Fant | undefined;
  @Output() onDeleteFant: EventEmitter<Fant> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(fant: Fant | undefined) {
    this.onDeleteFant.emit(fant);
  }


}
