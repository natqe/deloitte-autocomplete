import { Component, Input, OnInit } from '@angular/core'
import { LogService } from '../log/log.service'
import { Employee } from './employee.model'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent extends Employee implements OnInit {

  @Input()
  bold?: string

  constructor(private readonly logService: LogService) {

    super()

    logService.debugClass(this)

  }

  htmlFor(value: string) {

    const { bold } = this

    return bold  ? value.replace(bold,  `<strong>${bold}</strong>`) : value

  }

  ngOnInit() {

  }

}
