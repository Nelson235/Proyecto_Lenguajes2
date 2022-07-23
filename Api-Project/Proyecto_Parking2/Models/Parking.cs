using System;
using System.Collections.Generic;

namespace Proyecto_Parking2.Models
{
    public partial class Parking
    {
        public Parking()
        {
            Spaces = new HashSet<Space>();
        }

        public int IdParking { get; set; }
        public string NameParking { get; set; } = null!;
        public int Capacity { get; set; }
        public string Province { get; set; } = null!;
        public string District { get; set; } = null!;

        public virtual ICollection<Space> Spaces { get; set; }
    }
}
