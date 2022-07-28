import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rulesbtn',
  templateUrl: './rulesbtn.component.html',
  styleUrls: ['./rulesbtn.component.scss']
})
export class RulesbtnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  closeRules() {
    document.getElementById('rulesText').classList.add('d-none');
    document.getElementById('rulesBtn').classList.remove('d-none');

  }
  openRules() {
    document.getElementById('rulesText').classList.remove('d-none');
    document.getElementById('rulesBtn').classList.add('d-none');
  }


}
