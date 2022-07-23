using System;
using System.Collections.Generic;

namespace Proyecto_Parking2.Models
{
    public partial class Vehicule
    {
        public Vehicule()
        {
            Spaces = new HashSet<Space>();
        }

        public int IdVehicule { get; set; }
        public string LicensePlate { get; set; } = null!;
        public string Color { get; set; } = null!;
        public string Brand { get; set; } = null!;
        public int? IdUser { get; set; }
        public int IdType { get; set; }

        public virtual VehiculeType IdTypeNavigation { get; set; } = null!;
        public virtual User? IdUserNavigation { get; set; }
        public virtual ICollection<Space> Spaces { get; set; }
    }
}
