import { Component, OnInit } from '@angular/core';
import  {FantService} from "../../services/fant.service";
import {Fant} from "../../Fant";


@Component({
  selector: 'app-fants',
  templateUrl: './fants.component.html',
  styleUrls: ['./fants.component.scss']
})
export class FantsComponent implements OnInit {

  fants: Fant[] = [];

  constructor(private fantService: FantService) { }

  ngOnInit(): void {
    this.fantService.getFants().subscribe((fants) => this.fants = fants);
  }

  deleteFant(fant: Fant){
    this.fantService
      .deleteFant(fant)
      .subscribe(() =>
        this.fants = this.fants.filter(f =>
          f.id !== fant.id));
  }

  addFant(fant: Fant) {
    this.fantService.addFant(fant).subscribe((fant) => this.fants.push((fant)));
    console.log(fant);
  }

}
