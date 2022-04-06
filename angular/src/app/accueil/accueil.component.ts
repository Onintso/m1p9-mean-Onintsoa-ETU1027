import { Component, Input, OnInit } from '@angular/core';
import { JoueurService } from 'src/app/services/joueur.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  current_liste = [];

  // messages
  message:string = '';

  // inputs
  pseudo:any = '';
  age:any = '';
  keyword:any = '';

  constructor(private joueurServ : JoueurService) { }

  ngOnInit(): void {
    this.refreshJoueursList();
  }

  // refresh / init
  refreshJoueursList () {

    const onSuccess = response => {
      if (response['status'] == 200) {
        this.current_liste = response['data'];
      } else {
        this.message = 'Erreur requete';
      }
    }

    const onError = response => {
      this.message = 'Erreur interne';
    }

    this.joueurServ.getAll().subscribe(onSuccess, onError);
  }

  updateCurrentList ($event) {
    this.current_liste = $event;
  }
}
