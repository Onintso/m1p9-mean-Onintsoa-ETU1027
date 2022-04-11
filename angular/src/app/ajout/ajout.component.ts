import { Component, OnInit } from '@angular/core';
import { JoueurService } from '../services/joueur.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  mail : any = '';
  mdp: any = '';
  message : any = '';
  
  constructor(private joueurServ : JoueurService) { }

  ngOnInit(): void {
  }

  ajouter () {

    const input = {
      mail : this.mail,
      mdp : this.mdp
    };
    const onSuccess = response => {
      console.log("connected1  ");
      if (response['status'] == 200) {
        this.message = 'Ajout ok';
      } else {
        this.message = "Some error";
      }
    }

    const onError = response => {
      console.log("not connected"+ response['message']);
      
    }

    try {
      this.joueurServ.login(input).subscribe(onSuccess, onError);
    } catch (err) {
      this.message = err;
    }
  }
}
