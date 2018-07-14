using CarRental.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace CarRental.API.Controllers
{
    [RoutePrefix("cars")]
    public class CarController : BaseController
    {
        private readonly ICarRepository _carRepository;
        public CarController(ICarRepository repo)
        {
            this._carRepository = repo;

        }
        [HttpGet]
        [Route("carlist")]
        public async Task<HttpResponseMessage> GetCarList()
        {
            var result = await _carRepository.GetAllCars();
            // var moduleFilters = _mapper.Map<IEnumerable<ModuleFilter>, IEnumerable<ModuleFilterViewModel>>(result);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, result);

            return response;
        }
    }
}
