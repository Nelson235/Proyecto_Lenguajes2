using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Proyecto_Parking2.Models;

namespace Proyecto_Parking2.Controllers
{

    [Route("api/[controller]")]
    [EnableCors("GetAllPolicy")]
    [ApiController]
    public class ParkingController : Controller
    {


        private readonly IF4101_Project_B95571_B98295_B70274_B97291Context _context;

        public ParkingController()
        {
            _context = new IF4101_Project_B95571_B98295_B70274_B97291Context();
        }

        // GET: ParkingController
        [HttpGet]
        [Route("[action]")]
        public async Task<ActionResult<IEnumerable<Parking>>> GetParking()
        {
            if (_context.Parkings == null)
            {
                return NotFound();
            }
            return await _context.Parkings.ToListAsync();
        }
      

        // GET: ParkingController/Details/5

        [HttpGet]
        [Route("[action]/{id}")]
        public async Task<ActionResult<Parking>> GetParking(int id)
        {
            if (_context.Parkings == null)
            {
                return NotFound();
            }
            var parking = await _context.Parkings.FindAsync(id);

            if (parking == null)
            {
                return NotFound();
            }

            return parking;
        }

        // GET: ParkingController/Create
        [HttpPut("{id}")]
        public async Task<IActionResult> PutParking(int id, Parking parking)
        {
            if (id != parking.IdParking)
            {
                return BadRequest();
            }

            _context.Entry(parking).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ParkingExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: ParkingController/Create
        [HttpPost]
        public async Task<ActionResult<Parking>> PostParking(Parking parking)
        {
            if (_context.Parkings == null)
            {
                return Problem("Entity set 'IF4101_Project_B95571_B98295_B70274_B97291Context.Parkings'  is null.");
            }
            _context.Parkings.Add(parking);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetParking", new { id = parking.IdParking }, parking);
        }


        // DELETE: api/Parking/5

        [HttpDelete]
        [Route("[action]/{id}")]
        public async Task<IActionResult> DeleteParking(int id)
        {
            if (_context.Parkings == null)
            {
                return NotFound();
            }
            var parking = await _context.Parkings.FindAsync(id);
            if (parking == null)
            {
                return NotFound();
            }

            _context.Parkings.Remove(parking);
            await _context.SaveChangesAsync();

            return NoContent();
        }



        private bool ParkingExists(int id)
        {
            return (_context.Parkings?.Any(e => e.IdParking == id)).GetValueOrDefault();
        }



    }
}
