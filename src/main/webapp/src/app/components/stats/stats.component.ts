import { Component, OnInit } from '@angular/core';
import {StatsService} from "../../services/stats.service";
import IStats from "../../models/stats";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  statsResults: IStats;

  constructor(private statsService: StatsService) {
  }

  ngOnInit(): void {
    this.statsService.getStats().subscribe(response => {
      this.statsResults = response;
    })
  }



}