using CarRental.Model;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace CarRental.Data.Repositories
{
    public class CarRepository : ICarRepository
    {
        /// <summary>
        /// There is no db  server call involves so not using await.
        /// </summary>
        /// <returns></returns>
        public async Task<IEnumerable<Car>> GetAllCars()
        {
            IEnumerable<Car> carList;
            carList = await Task.FromResult<IEnumerable<Car>>(LoadCarList());
            return carList;
        }


        private IEnumerable<Car> LoadCarList()
        {
            IEnumerable<Car> carList;
            using (StreamReader r = new StreamReader(HttpContext.Current.Server.MapPath("~/App_Data/cars.json")))
            {
                string json = r.ReadToEnd();
                carList = JsonConvert.DeserializeObject<IEnumerable<Car>>(json);
            }

            return carList;
        }
    }
}
