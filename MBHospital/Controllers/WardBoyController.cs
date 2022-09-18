using Microsoft.AspNetCore.Mvc;

namespace MBHospital.Controllers
{
    [ApiController]
    [Route("wardboy")]
    public class WardBoyController : Controller
    {
        private readonly IServiceRepository<WardBoy, int> WardBoyRepository;

        public WardBoyController(IServiceRepository<WardBoy, int> WardBoyRepository)
        {
            this.WardBoyRepository = WardBoyRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var response = WardBoyRepository.GetRecords();
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
                var response = WardBoyRepository.GetRecord(id);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error {ex.Message}");
            }

        }

        [HttpPost]
        public IActionResult Post(WardBoy entity)
        {
            if (ModelState.IsValid)
            {
                var response = WardBoyRepository.CreateRecord(entity);
                return Ok(response);
            }
            else
            {
                return BadRequest(ModelState);
            }

        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, WardBoy entity)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var response = WardBoyRepository.UpdateRecord(id, entity);
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
                var response = WardBoyRepository.DeleteRecord(id);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error Occurred {ex.Message}");
            }

        }
    }
}
