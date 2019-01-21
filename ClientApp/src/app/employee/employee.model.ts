import { Input } from '@angular/core'

export class Employee {

  @Input()
  imageUrl: string

  @Input()
  workTitle: string

  @Input()
  name: string
  
}
