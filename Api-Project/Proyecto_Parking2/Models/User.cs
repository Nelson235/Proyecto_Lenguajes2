using System;
using System.Collections.Generic;

namespace Proyecto_Parking2.Models
{
    public partial class User
    {
        public User()
        {
            Vehicules = new HashSet<Vehicule>();
        }

        public int IdUser { get; set; }
        public string Name { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string Telephone { get; set; } = null!;
        public string Address { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
        public int IdRole { get; set; }

        public virtual Role Rol { get; set; } = null!;

        //public virtual Role IdRoleNavigation { get; set; } = null!;
        public virtual ICollection<Vehicule> Vehicules { get; set; }
    }
}
