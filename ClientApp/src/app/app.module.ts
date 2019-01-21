import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { AutocompleteResultComponent } from './autocomplete-result/autocomplete-result.component'
import { AutocompleteComponent } from './autocomplete/autocomplete.component'
import { EmployeeComponent } from './employee/employee.component'
import { EmployeesComponent } from './employees/employees.component'

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    AutocompleteResultComponent,
    EmployeeComponent,
    EmployeesComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
