package Lenguajes.ParkingLotProject.repository;

import Lenguajes.ParkingLotProject.domain.Vehicule_Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import Lenguajes.ParkingLotProject.domain.Parking;

@Repository
public interface Vehicule_TypeRepository extends JpaRepository<Vehicule_Type, Integer> {
}
