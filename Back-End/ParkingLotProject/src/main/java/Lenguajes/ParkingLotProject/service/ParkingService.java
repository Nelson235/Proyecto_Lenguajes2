package Lenguajes.ParkingLotProject.service;

import Lenguajes.ParkingLotProject.repository.ParkingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import Lenguajes.ParkingLotProject.domain.Parking;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ParkingService {

    @Autowired
    private ParkingRepository repository;

    public List<Parking> listAll() {
        return repository.findAll();
    }

    public void save(Parking parking) {
        repository.save(parking);
    }

    public Parking get(int id_Parking) {
        return repository.findById(id_Parking).get();
    }

    public void delete(int id_Parking) {repository.deleteById(id_Parking);
    }

}
