package Lenguajes.ParkingLotProject.controller;

import Lenguajes.ParkingLotProject.domain.Parking;
import Lenguajes.ParkingLotProject.service.ParkingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "/api/Parking")
public class ParkingController {

    @Autowired
    private ParkingService service;

    @GetMapping("/GetParking")
    public List<Parking> list() {
        return service.listAll();
    }

    @GetMapping("/GetParking/{id}")
    public ResponseEntity<Parking> get(@PathVariable Integer id) {
        try {
            Parking parking = service.get(id);
            return new ResponseEntity<Parking>(parking, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Parking>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/")
    public void add(@RequestBody Parking parking) {

        service.save(parking);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Parking> update(@RequestBody Parking parking, @PathVariable Integer id) {
        try {
            /*service.get(id);
            if(service.get(id)){
            }*/
            service.save(parking);
            return new ResponseEntity<Parking>(parking, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Parking>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Integer id) {
        service.delete(id);
    }


}
