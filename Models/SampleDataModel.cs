using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;

namespace autocomplete_app.Models
{
  public class SampleDataModel
  {
    public Employee[] getItems(string filter)
    {
      using (StreamReader r = new StreamReader("App_Data/employees.json"))
      {
        string json = r.ReadToEnd();
        List<Employee> items = JsonConvert.DeserializeObject<List<Employee>>(json);
        return items.Where(e => e.Name.Contains(filter) || e.WorkTitle.Contains(filter)).ToArray();
      }
    }
  }
  public class Employee
  {
    public string Name { get; set; }
    public string ImageUrl { get; set; }
    public string WorkTitle { get; set; }

  }
}