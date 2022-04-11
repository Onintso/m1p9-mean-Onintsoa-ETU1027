import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JoueurService } from 'src/app/services/joueur.service';

@Component({
  selector: 'app-list-plat',
  templateUrl: './list-plat.component.html',
  styleUrls: ['./list-plat.component.css']
})
export class ListPlatComponent implements OnInit {
  idResto: any = '';
  @Input() plats: any[]; 
  message : string = '';


  constructor(private route : ActivatedRoute,private joueurServ : JoueurService) { }

  ngOnInit(): void {
    this.idResto= this.route.snapshot.queryParamMap.get('idResto');
    this.init();
  }

  init(){
    console.log("here");
    const onSuccess = response => {
      if (response['status'] == 200) {
        this.plats= response['data'];
        console.log("plats"+ this.plats);
      } else {
        this.message = 'Erreur requete';
      }
    }

    const onError = response => {
      this.message = 'Erreur interne';
    }

    this.joueurServ.getRestoMenu(this.idResto).subscribe(onSuccess, onError);

  }
  removeById (idjoueur) {
    const onSuccess = response => {
      if (response['status'] == 200) {
        // item removed from the database [ok]
        // => updating the view
        this.plats = this.plats.filter((joueur : any) => {
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
