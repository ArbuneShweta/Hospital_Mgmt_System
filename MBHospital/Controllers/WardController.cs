using Microsoft.AspNetCore.Mvc;

namespace MBHospital.Controllers
{
    [ApiController]
    [Route("ward")]
    public class WardController : Controller
    {
        private readonly IServiceRepository<Ward, int> WardRepository;

        public WardController(IServiceRepository<Ward, int> WardRepository)
        {
            this.WardRepository = WardRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var response = WardRepository.GetRecords();
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
                var response = WardRepository.GetRecord(id);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error {ex.Message}");
            }

        }

        [HttpPost]
        public IActionResult Post(Ward entity)
        {
            if (ModelState.IsValid)
            {
                var response = WardRepository.CreateRecord(entity);
                return Ok(response);
            }
            else
            {
                return BadRequest(ModelState);
            }

        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Ward entity)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var response = WardRepository.UpdateRecord(id, entity);
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
                var response = WardRepository.DeleteRecord(id);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error Occurred {ex.Message}");
            }

        }
    }
}
