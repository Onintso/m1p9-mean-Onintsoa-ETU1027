import { Component, OnInit, Input } from '@angular/core';
import { JoueurService } from 'src/app/services/joueur.service';

@Component({
  selector: 'app-liste-joueurs',
  templateUrl: './liste-joueurs.component.html',
  styleUrls: ['./liste-joueurs.component.css']
})
export class ListeJoueursComponent implements OnInit {
  @Input() joueurs: any[];
  
  message : string = '';
  constructor(private joueurServ : JoueurService) {
  }

  ngOnInit(): void {
  }

  removeById (idjoueur) {
    const onSuccess = response => {
      if (response['status'] == 200) {
        // item removed from the database [ok]
        // => updating the view
        this.joueurs = this.joueurs.filter((joueur : any) => {
          return joueur.idjoueur != idjoueur;
        });
      } else {
        this.message = 'Erreur requete';
      }
        
    }

    const onError = response => {
      this.message = 'Erreur interne';
    }

    this.joueurServ.deleteById(idjoueur).subscribe(onSuccess, onError);
  }
}
