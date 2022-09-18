using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MBHospital.Controllers
{
    
    [ApiController]
    [Route("patient")]
    public class PatientController : ControllerBase
    {
        private readonly IServiceRepository<Patient, int> patientRepository;

        public PatientController(IServiceRepository<Patient, int> patientRepository)
        {
            this.patientRepository = patientRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var response = patientRepository.GetRecords();
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
                var response = patientRepository.GetRecord(id);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error {ex.Message}");
            }
           
        }

        [HttpPost]
        public IActionResult Post(Patient entity)
        {
            if (ModelState.IsValid)
            {
                var response = patientRepository.CreateRecord(entity);
                return Ok(response);
            }
            else
            {
                return BadRequest(ModelState);
            }
            
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Patient entity)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var response = patientRepository.UpdateRecord(id, entity);
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
                var response = patientRepository.DeleteRecord(id);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error Occurred {ex.Message}");
            }
           
        }
    }
}
