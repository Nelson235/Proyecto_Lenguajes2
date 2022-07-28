package Lenguajes.ParkingLotProject.service;

import Lenguajes.ParkingLotProject.domain.Space;
import Lenguajes.ParkingLotProject.repository.RoleRepository;
import Lenguajes.ParkingLotProject.repository.SpaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import Lenguajes.ParkingLotProject.domain.Role;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class SpaceService {

    @Autowired
    private SpaceRepository repository;

    public List<Space> listAll() {
        return repository.findAll();
    }

    public void save(Space space) {
        repository.save(space);
    }

    public Space get(int id_Space) {
        return repository.findById(id_Space).get();
    }

    public void delete(int id_Space) {repository.deleteById(id_Space);
    }

}