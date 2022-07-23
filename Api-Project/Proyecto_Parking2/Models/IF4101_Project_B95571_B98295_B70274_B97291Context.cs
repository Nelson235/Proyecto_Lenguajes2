using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Proyecto_Parking2.Models
{
    public partial class IF4101_Project_B95571_B98295_B70274_B97291Context : DbContext
    {
        public IF4101_Project_B95571_B98295_B70274_B97291Context()
        {
        }

        public IF4101_Project_B95571_B98295_B70274_B97291Context(DbContextOptions<IF4101_Project_B95571_B98295_B70274_B97291Context> options)
            : base(options)
        {
        }

        public virtual DbSet<Parking> Parkings { get; set; } = null!;
        public virtual DbSet<Rate> Rates { get; set; } = null!;
        public virtual DbSet<Role> Roles { get; set; } = null!;
        public virtual DbSet<Space> Spaces { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;
        public virtual DbSet<Vehicule> Vehicules { get; set; } = null!;
        public virtual DbSet<VehiculeType> VehiculeTypes { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=163.178.173.148;Initial Catalog=IF4101_Project_B95571_B98295_B70274_B97291;User ID=lenguajes;Password=lg.2022zx");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Parking>(entity =>
            {
                entity.HasKey(e => e.IdParking);

                entity.ToTable("Parking");

                entity.Property(e => e.IdParking).HasColumnName("Id_Parking");

                entity.Property(e => e.District).HasMaxLength(40);

                entity.Property(e => e.NameParking)
                    .HasMaxLength(30)
                    .HasColumnName("Name_Parking");

                entity.Property(e => e.Province).HasMaxLength(15);
            });

            modelBuilder.Entity<Rate>(entity =>
            {
                entity.HasKey(e => e.IdRate);

                entity.ToTable("Rate");

                entity.Property(e => e.IdRate).HasColumnName("Id_Rate");

                entity.Property(e => e.IdType).HasColumnName("Id_Type");

                entity.Property(e => e.PerDay).HasColumnName("Per_Day");

                entity.Property(e => e.PerHalfHour).HasColumnName("Per_HalfHour");

                entity.Property(e => e.PerHour).HasColumnName("Per_Hour");

                entity.Property(e => e.PerMonth).HasColumnName("Per_Month");

                entity.Property(e => e.PerWeek).HasColumnName("Per_Week");

                entity.Property(e => e.PerYear).HasColumnName("Per_Year");

                entity.HasOne(d => d.IdTypeNavigation)
                    .WithMany(p => p.Rates)
                    .HasForeignKey(d => d.IdType)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Rate_Vehicule_Type");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.HasKey(e => e.IdRole);

                entity.ToTable("Role");

                entity.Property(e => e.IdRole).HasColumnName("Id_Role");

                entity.Property(e => e.Name).HasMaxLength(25);
            });

            modelBuilder.Entity<Space>(entity =>
            {
                entity.HasKey(e => e.IdSpace);

                entity.ToTable("Space");

                entity.Property(e => e.IdSpace).HasColumnName("Id_Space");

                entity.Property(e => e.CheckIn)
                    .HasMaxLength(20)
                    .HasColumnName("Check_In");

                entity.Property(e => e.IdParking).HasColumnName("Id_Parking");

                entity.Property(e => e.IdRate).HasColumnName("Id_Rate");

                entity.Property(e => e.IdType).HasColumnName("Id_Type");

                entity.Property(e => e.IdVehicule).HasColumnName("Id_Vehicule");

                entity.Property(e => e.Status).HasMaxLength(20);

                entity.HasOne(d => d.IdParkingNavigation)
                    .WithMany(p => p.Spaces)
                    .HasForeignKey(d => d.IdParking)
                    .HasConstraintName("FK_Space_Parking");

                entity.HasOne(d => d.IdRateNavigation)
                    .WithMany(p => p.Spaces)
                    .HasForeignKey(d => d.IdRate)
                    .HasConstraintName("FK_Space_Rate");

                entity.HasOne(d => d.IdTypeNavigation)
                    .WithMany(p => p.Spaces)
                    .HasForeignKey(d => d.IdType)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Space__Id_Type__282DF8C2");

                entity.HasOne(d => d.IdVehiculeNavigation)
                    .WithMany(p => p.Spaces)
                    .HasForeignKey(d => d.IdVehicule)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_Space_Vehicule");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.IdUser);

                entity.ToTable("User");

                entity.Property(e => e.IdUser).HasColumnName("Id_User");

                entity.Property(e => e.Address).HasMaxLength(100);

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.IdRole).HasColumnName("Id_Role");

                entity.Property(e => e.LastName).HasMaxLength(20);

                entity.Property(e => e.Name).HasMaxLength(20);

                entity.Property(e => e.Password).HasMaxLength(20);

                entity.Property(e => e.Telephone).HasMaxLength(10);

                entity.HasOne(d => d.Rol)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.IdRole)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_User_Role");
            });

            modelBuilder.Entity<Vehicule>(entity =>
            {
                entity.HasKey(e => e.IdVehicule);

                entity.ToTable("Vehicule");

                entity.Property(e => e.IdVehicule).HasColumnName("Id_Vehicule");

                entity.Property(e => e.Brand).HasMaxLength(20);

                entity.Property(e => e.Color).HasMaxLength(20);

                entity.Property(e => e.IdType).HasColumnName("Id_Type");

                entity.Property(e => e.IdUser).HasColumnName("Id_User");

                entity.Property(e => e.LicensePlate)
                    .HasMaxLength(20)
                    .HasColumnName("License_Plate");

                entity.HasOne(d => d.IdTypeNavigation)
                    .WithMany(p => p.Vehicules)
                    .HasForeignKey(d => d.IdType)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Vehicule_Vehicule_Type");

                entity.HasOne(d => d.IdUserNavigation)
                    .WithMany(p => p.Vehicules)
                    .HasForeignKey(d => d.IdUser)
                    .HasConstraintName("FK_Vehicule_User");
            });

            modelBuilder.Entity<VehiculeType>(entity =>
            {
                entity.HasKey(e => e.IdType);

                entity.ToTable("Vehicule_Type");

                entity.Property(e => e.IdType).HasColumnName("Id_Type");

                entity.Property(e => e.Name).HasMaxLength(20);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
