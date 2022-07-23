using System;
using System.Collections.Generic;

namespace Proyecto_Parking2.Models
{
    public partial class Rate
    {
        public Rate()
        {
            Spaces = new HashSet<Space>();
        }

        public int IdRate { get; set; }
        public int IdType { get; set; }
        public double PerHour { get; set; }
        public double PerHalfHour { get; set; }
        public double PerDay { get; set; }
        public double PerWeek { get; set; }
        public double PerMonth { get; set; }
        public double PerYear { get; set; }

        public virtual VehiculeType IdTypeNavigation { get; set; } = null!;
        public virtual ICollection<Space> Spaces { get; set; }
    }
}
