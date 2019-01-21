import { Component, Input, OnInit } from '@angular/core'
import { LogService } from '../log/log.service'

@Component({
  selector: 'app-autocomplete-result',
  templateUrl: './autocomplete-result.component.html',
  styleUrls: ['./autocomplete-result.component.scss']
})
export class AutocompleteResultComponent implements OnInit {

  @Input()
  filter?: string

  constructor(private readonly logService: LogService) { 
    logService.debugClass(this)
  }

  ngOnInit() {
  }

}
