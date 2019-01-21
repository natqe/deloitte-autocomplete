import { Component, EventEmitter, Output } from '@angular/core'
import { LogService } from '../log/log.service'
import { AutocompleteService } from './autocomplete.service'

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {

  dropdown: boolean

  @Output()
  hit: EventEmitter<string> = new EventEmitter

  @Output()
  isBlur: EventEmitter<boolean> = new EventEmitter

  constructor(
    private readonly autocompleteService: AutocompleteService,
    private readonly logService: LogService) {
    logService.debugClass(this)
  }

  private _value = ``

  get placeholder() {
    return this.autocompleteService.resultsMode ? `knowledge management` : `Search...`
  }

  get value() {
    return this._value
  }

  set value(input) {

    this._value = input

    this.autocompleteService.search(input)

  }

  toggleDropdown() {
    this.dropdown = !this.dropdown
  }

  handleBlur() {

    this.isBlur.emit(true)

    this.toggleDropdown()

  }

  handleFocus() {

    this.isBlur.emit(false)

    this.toggleDropdown()

  }

  search() {

    const { value, hit } = this

    hit.emit(value)

    this._value = ``

  }

}
