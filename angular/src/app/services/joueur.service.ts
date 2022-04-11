import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { base_url } from 'src/environments/environment';
import { ToolsService } from './tools.service';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {

  constructor(private http : HttpClient, private toolsServ : ToolsService) { }
  getAll () {
    //return this.http.get(base_url + 'joueur');
    return this.http.get('https://m1p9meanonintsoa-ekaly.herokuapp.com/get-all-resto');
  }

  getRestoMenu (idResto) {
    //return this.http.get(base_url + 'joueur');
    return this.http.get('https://m1p9meanonintsoa-ekaly.herokuapp.com/get-plat-resto/'+idResto);
  }

  login(input){
    const options = this.toolsServ.formOption(); // headers
    return this.http.post('https://m1p9meanonintsoa-ekaly.herokuapp.com/login', input, options);
  }

  getByPseudo (keyword) {
    return this.http.get(base_url + 'joueur?pseudo=' + keyword);
  }

  create (input) {
    const options = this.toolsServ.formOption(); // headers
    return this.http.post('http://localhost:3000/create-book', input, options);
  }

  updateById (idjoueur, input) {
    const options = this.toolsServ.formOption(); // headers
    return this.http.put(base_url + 'joueur/' + idjoueur, input, options);
  }

  deleteById(idjoueur) {
    return this.http.delete(base_url + 'joueur/' + idjoueur);
  }

}
