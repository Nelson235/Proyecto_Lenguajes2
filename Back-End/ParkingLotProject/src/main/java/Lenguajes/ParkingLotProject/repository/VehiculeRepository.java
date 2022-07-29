package Lenguajes.ParkingLotProject.repository;

import Lenguajes.ParkingLotProject.domain.Vehicule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface VehiculeRepository extends JpaRepository<Vehicule, Integer> {
}
