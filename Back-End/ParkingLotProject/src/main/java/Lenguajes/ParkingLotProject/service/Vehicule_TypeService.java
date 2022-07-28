package Lenguajes.ParkingLotProject.service;

import Lenguajes.ParkingLotProject.domain.Vehicule_Type;
import Lenguajes.ParkingLotProject.repository.RoleRepository;
import Lenguajes.ParkingLotProject.repository.Vehicule_TypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import Lenguajes.ParkingLotProject.domain.Role;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class Vehicule_TypeService {

    @Autowired
    private Vehicule_TypeRepository repository;

    public List<Vehicule_Type> listAll() {
        return repository.findAll();
    }

    public void save(Vehicule_Type vehicule_type) {
        repository.save(vehicule_type);
    }

    public Vehicule_Type get(int id_Type) {
        return repository.findById(id_Type).get();
    }

    public void delete(int id_Type) {repository.deleteById(id_Type);
    }

}