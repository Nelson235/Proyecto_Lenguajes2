package Lenguajes.ParkingLotProject.service;

import Lenguajes.ParkingLotProject.domain.Vehicule;
import Lenguajes.ParkingLotProject.repository.RoleRepository;
import Lenguajes.ParkingLotProject.repository.VehiculeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import Lenguajes.ParkingLotProject.domain.Role;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class VehiculeService {

    @Autowired
    private VehiculeRepository repository;

    public List<Vehicule> listAll() {
        return repository.findAll();
    }

    public void save(Vehicule vehicule) {
        repository.save(vehicule);
    }

    public Vehicule get(int id_Vehicule) {
        return repository.findById(id_Vehicule).get();
    }

    public void delete(int id_Vehicule) {repository.deleteById(id_Vehicule);
    }

}