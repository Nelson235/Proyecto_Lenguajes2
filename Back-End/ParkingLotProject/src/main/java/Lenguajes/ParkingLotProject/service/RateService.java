package Lenguajes.ParkingLotProject.service;

import Lenguajes.ParkingLotProject.domain.Rate;
import Lenguajes.ParkingLotProject.repository.RateRepository;
import Lenguajes.ParkingLotProject.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import Lenguajes.ParkingLotProject.domain.Role;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class RateService {

    @Autowired
    private RateRepository repository;

    public List<Rate> listAll() {
        return repository.findAll();
    }

    public void save(Rate rate) {
        repository.save(rate);
    }

    public Rate get(int id_Rate) {
        return repository.findById(id_Rate).get();
    }

    public void delete(int id_Rate) {repository.deleteById(id_Rate);
    }

}