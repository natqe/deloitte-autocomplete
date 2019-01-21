using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using autocomplete_app.Models;

namespace autocomplete_app.Controllers
{
  [Route("api/[controller]")]
  public class SampleDataController : Controller
  {

    [HttpGet("[action]")]
    public IEnumerable<Employee> Employees(String letters = "")
    {
      return new SampleDataModel().getItems(letters);
    }

  }
}
