using Microsoft.AspNetCore.Mvc;

namespace MBHospital.Controllers
{
    [ApiController]
    [Route("doctor")]
    public class DoctorController : ControllerBase
    {
        private readonly IServiceRepository<Doctor, int> doctorRepository;

        public DoctorController(IServiceRepository<Doctor, int> doctorRepository)
        {
            this.doctorRepository = doctorRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var response = doctorRepository.GetRecords();
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
                var response = doctorRepository.GetRecord(id);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error {ex.Message}");
            }

        }

        [HttpPost]
        public IActionResult Post(Doctor entity)
        {
            if (ModelState.IsValid)
            {
                var response = doctorRepository.CreateRecord(entity);
                return Ok(response);
            }
            else
            {
                return BadRequest(ModelState);
            }

        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Doctor entity)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var response = doctorRepository.UpdateRecord(id, entity);
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
                var response = doctorRepository.DeleteRecord(id);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error Occurred {ex.Message}");
            }

        }
    }
}

