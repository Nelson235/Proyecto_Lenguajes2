package Lenguajes.ParkingLotProject.controller;

import Lenguajes.ParkingLotProject.domain.User;
import Lenguajes.ParkingLotProject.domain.Vehicule;
import Lenguajes.ParkingLotProject.service.VehiculeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import Lenguajes.ParkingLotProject.service.UserService;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "/api/Vehicule")
public class VehiculeController {

    @Autowired
    private VehiculeService service;

    @GetMapping("/GetVehicules")
    public List<Vehicule> list() {
        return service.listAll();
    }

    @GetMapping("/GetVehicule/{id}")
    public ResponseEntity<Vehicule> get(@PathVariable Integer id) {
        try {
            Vehicule vehicule = service.get(id);
            return new ResponseEntity<Vehicule>(vehicule, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Vehicule>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/")
    public void add(@RequestBody Vehicule vehicule) {
        service.save(vehicule);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Vehicule> update(@RequestBody Vehicule vehicule, @PathVariable Integer id) {
        try {
            service.save(vehicule);
            return new ResponseEntity<Vehicule>(vehicule, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Vehicule>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/DeleteVehicule/{id}")
    public void delete(@PathVariable Integer id) {
        service.delete(id);
    }

}
