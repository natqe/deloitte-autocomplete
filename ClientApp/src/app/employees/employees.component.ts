import { Component, Input } from '@angular/core'
import { AutocompleteService } from '../autocomplete/autocomplete.service'
import { LogService } from '../log/log.service'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

  @Input()
  dropdownMode?: boolean

  @Input()
  filter?: string

  constructor(
    private readonly autocompleteService: AutocompleteService,
    private readonly logService: LogService) {
    logService.debugClass(this)
  }

  get items() {

    const { filter, autocompleteService } = this

    if (filter) return autocompleteService.resultsOf(filter)

  }

}
