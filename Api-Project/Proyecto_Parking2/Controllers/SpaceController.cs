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
    public class SpaceController : Controller
    {

        private readonly IF4101_Project_B95571_B98295_B70274_B97291Context _context;

        public SpaceController()
        {
            _context = new IF4101_Project_B95571_B98295_B70274_B97291Context();
        }

        // GET: api/Spots
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Space>>> GetSpaces()
        {
            return await _context.Spaces.Include(s => s.IdParking).Include(s => s.IdParking).Include(s => s.IdRate).Select(spaceItem => new Space()
            {
                IdSpace = spaceItem.IdSpace,
                Number = spaceItem.Number,
                IdType = spaceItem.IdType,
                Status = spaceItem.Status,
                IdVehicule = spaceItem.IdVehicule,
                IdParking = spaceItem.IdParking,
                CheckIn = spaceItem.CheckIn,
                IdRate = spaceItem.IdRate

            }).ToListAsync();
        }

        // GET: api/Spots/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Space>> GetSpace(int id)
        {
            if (_context.Spaces == null)
            {
                return NotFound();
            }
            var spot = await _context.Spaces.FindAsync(id);

            if (spot == null)
            {
                return NotFound();
            }

            return spot;
        }

        // PUT: api/Spots/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSpace(int id, Space space)
        {
            if (id != space.IdSpace)
            {
                return BadRequest();
            }

            _context.Entry(space).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SpotExists(id))
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

        // POST: api/Spots
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Space>> PostSpace(Space space)
        {
            if (_context.Spaces == null)
            {
                return Problem("Entity set 'IF4101_B91472_B92299Context.Spots'  is null.");
            }
            _context.Spaces.Add(space);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSpot", new { id = space.IdSpace }, space);
        }

        // DELETE: api/Spots/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSpace(int id)
        {
            if (_context.Spaces == null)
            {
                return NotFound();
            }
            var spot = await _context.Spaces.FindAsync(id);
            if (spot == null)
            {
                return NotFound();
            }

            _context.Spaces.Remove(spot);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SpotExists(int id)
        {
            return (_context.Spaces?.Any(e => e.IdSpace == id)).GetValueOrDefault();
        }

    }
}
