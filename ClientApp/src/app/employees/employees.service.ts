import { Observable, of } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { Employee } from '../employee/employee.model'
import { LogService } from '../log/log.service'

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(
    private readonly httpClient: HttpClient,
    private readonly logService: LogService,
    @Inject('BASE_URL')
    private readonly baseUrl: string) {
    logService.debugClass(this)
  }

  fetch(related: string): Observable<Array<Employee>> {

    const { httpClient, baseUrl } = this

    return httpClient.get<Array<Employee>>(baseUrl + `api/SampleData/Employees?letters=${related}`)

  }

}