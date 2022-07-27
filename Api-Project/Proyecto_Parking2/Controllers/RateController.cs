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
    public class RateController : Controller
    {
        private readonly IF4101_Project_B95571_B98295_B70274_B97291Context _context;

        public RateController()
        {
            _context = new IF4101_Project_B95571_B98295_B70274_B97291Context();
        }

        // GET: api/Rates
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Rate>>> GetRates()
        {
            if (_context.Rates == null)
            {
                return NotFound();
            }
            return await _context.Rates.ToListAsync();
        }

        // GET: api/Rates/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Rate>> GetRate(int id)
        {
            if (_context.Rates == null)
            {
                return NotFound();
            }
            var rate = await _context.Rates.FindAsync(id);

            if (rate == null)
            {
                return NotFound();
            }

            return rate;
        }

        // PUT: api/Rates/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRate(int id, Rate rate)
        {
            if (id != rate.IdRate)
            {
                return BadRequest();
            }

            _context.Entry(rate).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RateExists(id))
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

        // POST: api/Rates
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Rate>> PostRate(Rate rate)
        {
            if (_context.Rates == null)
            {
                return Problem("Entity set 'IF4101_B91472_B92299Context.Rates'  is null.");
            }
            _context.Rates.Add(rate);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRate", new { id = rate.IdRate }, rate);
        }

        // DELETE: api/Rates/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRate(int id)
        {
            if (_context.Rates == null)
            {
                return NotFound();
            }
            var rate = await _context.Rates.FindAsync(id);
            if (rate == null)
            {
                return NotFound();
            }

            _context.Rates.Remove(rate);
            await _context.SaveChangesAsync();

            return NoContent();
        }


        private bool RateExists(int id)
        {
            return (_context.Rates?.Any(e => e.IdRate == id)).GetValueOrDefault();
        }

    }
}
