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
    public class VehiculeController : Controller
    {

        private readonly IF4101_Project_B95571_B98295_B70274_B97291Context _context;

        public VehiculeController()
        {
            _context = new IF4101_Project_B95571_B98295_B70274_B97291Context();
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Vehicule>>> GetVehicules()
        {
            return await _context.Vehicules.Include(s => s.IdUserNavigation).Select(vehiculeItem => new Vehicule()
            {
                IdVehicule = vehiculeItem.IdVehicule,
                LicensePlate = vehiculeItem.LicensePlate,
                Color = vehiculeItem.Color,
                Brand = vehiculeItem.Brand,
                IdUser = vehiculeItem.IdUser,
                IdType = vehiculeItem.IdType,

            }).ToListAsync();
        }

        // GET: api/Vehicles/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Vehicule>> GetVehicule(int id)
        {
            if (_context.Vehicules == null)

            {
                return NotFound();
            }
            var vehicle = await _context.Vehicules.FindAsync(id);

            if (vehicle == null)
            {
                return NotFound();
            }

            return vehicle;
        }

        // PUT: api/Vehicles/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVehicle(int id, Vehicule vehicle)
        {
            if (id != vehicle.IdVehicule)
            {
                return BadRequest();
            }

            _context.Entry(vehicle).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VehiculeExists(id))
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

        // POST: api/Vehicles
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Vehicule>> PostVehicle(Vehicule vehicle)
        {
            if (_context.Vehicules == null)
            {
                return Problem("Entity set 'IF4101_B91472_B92299Context.Vehicles'  is null.");
            }
            _context.Vehicules.Add(vehicle);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVehicle", new { id = vehicle.IdVehicule }, vehicle);
        }

        // DELETE: api/Vehicles/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVehicle(int id)
        {
            if (_context.Vehicules == null)
            {
                return NotFound();
            }
            var vehicle = await _context.Vehicules.FindAsync(id);
            if (vehicle == null)
            {
                return NotFound();
            }

            _context.Vehicules.Remove(vehicle);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool VehiculeExists(int id)
        {
            return (_context.Vehicules?.Any(e => e.IdVehicule == id)).GetValueOrDefault();
        }

    }
}
