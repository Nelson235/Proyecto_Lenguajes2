package Lenguajes.ParkingLotProject.service;

import Lenguajes.ParkingLotProject.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import Lenguajes.ParkingLotProject.domain.Role;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class RoleService {

    @Autowired
    private RoleRepository repository;

    public List<Role> listAll() {
        return repository.findAll();
    }

    public void save(Role role) {
        repository.save(role);
    }

    public Role get(int id_Role) {
        return repository.findById(id_Role).get();
    }

    public void delete(int id_Role) {repository.deleteById(id_Role);
    }

}