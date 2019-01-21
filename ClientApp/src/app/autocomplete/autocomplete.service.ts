import { Injectable } from '@angular/core'
import { Employee } from '../employee/employee.model'
import { EmployeesService } from '../employees/employees.service'
import { LogService } from '../log/log.service'

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  resultsMode: boolean

  constructor(
    private readonly employeesService: EmployeesService,
    private readonly logService: LogService) {
      logService.debugClass(this)
    }

  private readonly store: { [key: string]: Array<Employee> } = {}

  latest = ``

  resultsOf(letters: string) {
    return this.store[letters]
  }

  search(input: string) {

    const { employeesService, store } = this

    if (input.length > 1 && !store[input]) employeesService.fetch(input).subscribe(value => store[input] = value)

  }

}
