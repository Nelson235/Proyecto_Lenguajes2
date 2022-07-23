using System;
using System.Collections.Generic;

namespace Proyecto_Parking2.Models
{
    public partial class Space
    {
        public int IdSpace { get; set; }
        public int Number { get; set; }
        public int IdType { get; set; }
        public string Status { get; set; } = null!;
        public int? IdVehicule { get; set; }
        public int IdParking { get; set; }
        public string? CheckIn { get; set; }
        public int? IdRate { get; set; }

        public virtual Parking IdParkingNavigation { get; set; } = null!;
        public virtual Rate? IdRateNavigation { get; set; }
        public virtual VehiculeType IdTypeNavigation { get; set; } = null!;
        public virtual Vehicule? IdVehiculeNavigation { get; set; }
    }
}
