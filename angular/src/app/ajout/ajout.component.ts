import { Component, OnInit } from '@angular/core';
import { JoueurService } from '../services/joueur.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  nom : any = '';
  auteur : any = '';
  message : any = '';
  
  constructor(private joueurServ : JoueurService) { }

  ngOnInit(): void {
  }

  ajouter () {

    const input = {
      nom : this.nom,
      auteur : this.auteur
    };

    const onSuccess = response => {
      if (response['status'] == 200) {
        this.message = 'Ajout ok';
      } else {
        this.message = "Some error";
      }
    }

    const onError = response => {
      
    }

    try {
      this.joueurServ.create(input).subscribe(onSuccess, onError);
    } catch (err) {
      this.message = err;
    }
  }
}
