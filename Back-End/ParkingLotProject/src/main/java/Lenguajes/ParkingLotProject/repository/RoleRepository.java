package Lenguajes.ParkingLotProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import Lenguajes.ParkingLotProject.domain.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
}
