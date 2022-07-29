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
    public class RoleController : Controller
    {

        private readonly IF4101_Project_B95571_B98295_B70274_B97291Context _context;

        public RoleController()
        {
            _context = new IF4101_Project_B95571_B98295_B70274_B97291Context();
        }

        // GET: api/Rols
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Role>>> GetRols()
        {
            if (_context.Roles == null)
            {
                return NotFound();
            }
            return await _context.Roles.ToListAsync();
        }

        // GET: api/Rols/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Role>> GetRol(int id)
        {
            if (_context.Roles == null)
            {
                return NotFound();
            }
            var rol = await _context.Roles.FindAsync(id);

            if (rol == null)
            {
                return NotFound();
            }

            return rol;
        }

        // PUT: api/Rols/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRol(int id, Role rol)
        {
            if (id != rol.IdRole)
            {
                return BadRequest();
            }

            _context.Entry(rol).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RolExists(id))
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

        // POST: api/Rols
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Role>> PostRol(Role rol)
        {
            if (_context.Roles == null)
            {
                return Problem("Entity set 'IF4101_B91472_B92299Context.Rols'  is null.");
            }
            _context.Roles.Add(rol);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (RolExists(rol.IdRole))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetRol", new { id = rol.IdRole }, rol);
        }

        // DELETE: api/Rols/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRol(int id)
        {
            if (_context.Roles == null)
            {
                return NotFound();
            }
            var rol = await _context.Roles.FindAsync(id);
            if (rol == null)
            {
                return NotFound();
            }

            _context.Roles.Remove(rol);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RolExists(int id)
        {
            return (_context.Roles?.Any(e => e.IdRole == id)).GetValueOrDefault();
        }

    }
}
