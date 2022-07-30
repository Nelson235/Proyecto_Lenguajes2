package Lenguajes.ParkingLotProject.controller;

import Lenguajes.ParkingLotProject.domain.Parking;
import Lenguajes.ParkingLotProject.domain.Space;
import Lenguajes.ParkingLotProject.domain.Vehicule_Type;
import Lenguajes.ParkingLotProject.service.ParkingService;
import Lenguajes.ParkingLotProject.service.Vehicule_TypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "/api/Vehicule_Type")
public class Vehicule_TypeController {

    @Autowired
    private Vehicule_TypeService service;

    @GetMapping("/GetVehicule_Type")
    public List<Vehicule_Type> list() {
        return service.listAll();
    }

    @GetMapping("/GetVehicule_Type/{id}")
    public ResponseEntity<Vehicule_Type> get(@PathVariable Integer id) {
        try {
            Vehicule_Type vehicule_type = service.get(id);
            return new ResponseEntity<Vehicule_Type>(vehicule_type, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Vehicule_Type>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/")
    public void add(@RequestBody Vehicule_Type vehicule_type) {

        service.save(vehicule_type);
    }

    @RequestMapping(path = "/update/{id}", method = RequestMethod.PUT)
    public void update(@PathVariable("id") int id,
                       @RequestBody Vehicule_Type type) {
        Vehicule_Type entity = type;
        entity.setId_Type(id);
        service.update(entity);
    }


    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Integer id) {
        service.delete(id);
    }


}
