using Microsoft.AspNetCore.Mvc;

namespace MBHospital.Controllers
{

    [ApiController]
    [Route("medicines")]
    public class MedicineController : Controller
    {
        private readonly IServiceRepository<Medicines, int> MedicinesRepository;

        public MedicineController(IServiceRepository<Medicines, int> MedicinesRepository)
        {
            this.MedicinesRepository = MedicinesRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var response = MedicinesRepository.GetRecords();
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error {ex.Message}");
            }

        }


        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                var response = MedicinesRepository.GetRecord(id);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error {ex.Message}");
            }

        }

        [HttpPost]
        public IActionResult Post(Medicines entity)
        {
            if (ModelState.IsValid)
            {
                var response = MedicinesRepository.CreateRecord(entity);
                return Ok(response);
            }
            else
            {
                return BadRequest(ModelState);
            }

        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Medicines entity)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var response = MedicinesRepository.UpdateRecord(id, entity);
                    return Ok(response);
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Error Occurred {ex.Message}");
            }

        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                var response = MedicinesRepository.DeleteRecord(id);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error Occurred {ex.Message}");
            }

        }
    }
}

