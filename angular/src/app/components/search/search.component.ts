import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { JoueurService } from 'src/app/services/joueur.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() clickSearchEvent = new EventEmitter<any[]> ();
  @Input() title: string = '';

  keyword : string = '';
  message : string = '';
  
  constructor(private joueurServ : JoueurService) { }

  ngOnInit(): void {
  }
  runSearch() {
    const onSuccess = response => {
      if (response['status'] == 200) {
        const search_results = response['datas'];
        
        this.clickSearchEvent.emit(search_results);

        this.message = search_results.length + ' resultat(s)';
      } else {
        this.message = 'Erreur requete';
      }
    }

    const onError = response => {
      this.message = 'Erreur serveur';
    }

    this.joueurServ.getByPseudo(this.keyword).subscribe(onSuccess, onError); 
  }
}
