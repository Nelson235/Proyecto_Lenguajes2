using System;
using System.Collections.Generic;

namespace Proyecto_Parking2.Models
{
    public partial class VehiculeType
    {
        public VehiculeType()
        {
            Rates = new HashSet<Rate>();
            Spaces = new HashSet<Space>();
            Vehicules = new HashSet<Vehicule>();
        }

        public int IdType { get; set; }
        public string Name { get; set; } = null!;

        public virtual ICollection<Rate> Rates { get; set; }
        public virtual ICollection<Space> Spaces { get; set; }
        public virtual ICollection<Vehicule> Vehicules { get; set; }
    }
}
