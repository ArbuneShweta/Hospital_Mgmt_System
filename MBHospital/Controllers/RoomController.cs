using Microsoft.AspNetCore.Mvc;

namespace MBHospital.Controllers
{
    [ApiController]
    [Route("room")]
    public class RoomController : Controller
    {
        private readonly IServiceRepository<Room, int> roomRepository;

        public RoomController(IServiceRepository<Room, int> roomRepository)
        {
            this.roomRepository = roomRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var response = roomRepository.GetRecords();
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
                var response = roomRepository.GetRecord(id);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error {ex.Message}");
            }

        }

        [HttpPost]
        public IActionResult Post(Room entity)
        {
            if (ModelState.IsValid)
            {
                var response = roomRepository.CreateRecord(entity);
                return Ok(response);
            }
            else
            {
                return BadRequest(ModelState);
            }

        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Room entity)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var response = roomRepository.UpdateRecord(id, entity);
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
                var response = roomRepository.DeleteRecord(id);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error Occurred {ex.Message}");
            }

        }
    }
}

