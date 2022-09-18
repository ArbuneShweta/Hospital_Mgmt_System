using Microsoft.AspNetCore.Mvc;

namespace MBHospital.Controllers
{
    [ApiController]
    [Route("nurse")]
    public class NurseController : Controller
    {
        private readonly IServiceRepository<Nurse, int> nurseRepository;

        public NurseController(IServiceRepository<Nurse, int> nurseRepository)
        {
            this.nurseRepository = nurseRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var response = nurseRepository.GetRecords();
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
                var response = nurseRepository.GetRecord(id);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error {ex.Message}");
            }

        }

        [HttpPost]
        public IActionResult Post(Nurse entity)
        {
            if (ModelState.IsValid)
            {
                var response = nurseRepository.CreateRecord(entity);
                return Ok(response);
            }
            else
            {
                return BadRequest(ModelState);
            }

        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Nurse entity)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var response = nurseRepository.UpdateRecord(id, entity);
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
                var response = nurseRepository.DeleteRecord(id);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error Occurred {ex.Message}");
            }

        }
    }
}
