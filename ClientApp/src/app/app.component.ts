import { Component } from '@angular/core'
import { AutocompleteService } from './autocomplete/autocomplete.service'
import { LogService } from './log/log.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private readonly autocompleteService: AutocompleteService,
    private readonly logService: LogService) {
    logService.debugClass(this)
  }

  resultText = ``

  get title() {
    return this.autocompleteService.resultsMode ? `SEARCH RESULTS` : `LOOKING FOR AN EMPLOYEE?`
  }

  get subTitle() {
    return this.autocompleteService.resultsMode ? `` : `Click on the search bar learn our suggestions`
  }

  autocompleteActive(value: boolean) {
    this.autocompleteService.resultsMode = false
  }

  handleHit($event: string) {

    this.resultText = $event

    if ($event.length > 1) this.autocompleteService.resultsMode = true

  }

}
