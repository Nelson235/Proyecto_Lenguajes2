package Lenguajes.ParkingLotProject.repository;

import Lenguajes.ParkingLotProject.service.RateService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import Lenguajes.ParkingLotProject.domain.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    RateService findByEmail(String email);
}
