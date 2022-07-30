package Lenguajes.ParkingLotProject.controller;

import Lenguajes.ParkingLotProject.domain.Parking;
import Lenguajes.ParkingLotProject.domain.Space;
import Lenguajes.ParkingLotProject.domain.User;
import Lenguajes.ParkingLotProject.service.ParkingService;
import Lenguajes.ParkingLotProject.service.SpaceService;
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

    @Autowired
    private SpaceService service2;
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

    @GetMapping("/GetParkingByName/{name}")
    public ResponseEntity<Parking> getByName(@PathVariable String name) {
        try {
            Parking parking = null;
            List<Parking> parkings = list();
            for (int i=0;i<parkings.size();i++) {

                if(parkings.get(i).getName().equals(name)){
                    parking = parkings.get(i);
                    return new ResponseEntity<Parking>(parking, HttpStatus.OK);

                }
            }
            return new ResponseEntity<Parking>(parking, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Parking>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/")
    public void add(@RequestBody Parking parking) {service.save(parking);
    }


    @RequestMapping(path = "/update/{id}", method = RequestMethod.PUT)
    public void update(@PathVariable("id") int id,
                       @RequestBody Parking parking) {
        Parking entity = parking;
        entity.setId_Parking(id);
        service.update(entity);
    }
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Integer id) {
        service.delete(id);
    }


}
