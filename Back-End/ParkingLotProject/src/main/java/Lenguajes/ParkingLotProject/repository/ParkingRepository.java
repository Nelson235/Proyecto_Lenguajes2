package Lenguajes.ParkingLotProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import Lenguajes.ParkingLotProject.domain.Parking;

@Repository
public interface ParkingRepository extends JpaRepository<Parking, Integer> {
}
