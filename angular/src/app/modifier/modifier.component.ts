import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JoueurService } from '../services/joueur.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  idjoueur : any = '';
  current_pseudo : any = '';

  // inputs
  pseudo : any = '';
  age : any = '';

  // messages
  error_message : string = '';
  message : string = '';

  constructor(private route : ActivatedRoute, private joueurServ : JoueurService) { }

  ngOnInit(): void {
    this.idjoueur = this.route.snapshot.queryParamMap.get('idjoueur');
    this.current_pseudo = this.route.snapshot.queryParamMap.get('pseudo');
  }

  modifier () {
    const input = {
      pseudo : this.pseudo,
      age : this.age
    };
    console.log('Updating ... id ', this.idjoueur);

    const onSuccess = response => {
      if (response['status'] == 200) {
        this.message = 'Succes modification';
      } else {
        this.error_message = 'Erreur modification';
      }
      console.log(response);
    }

    const onError = response => {
      this.error_message = 'Erreur requete';
    }

    this.joueurServ.updateById(this.idjoueur, input).subscribe(onSuccess, onError);
  }  
	updatePseudo (ev) {
		this.pseudo = ev.target.value;
	}
	updateAge (ev) {
		this.age = ev.target.value;
	}
}
