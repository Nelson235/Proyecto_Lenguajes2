package Lenguajes.ParkingLotProject.repository;

import Lenguajes.ParkingLotProject.domain.Rate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import Lenguajes.ParkingLotProject.domain.Parking;

@Repository
public interface RateRepository extends JpaRepository<Rate, Integer> {
}
