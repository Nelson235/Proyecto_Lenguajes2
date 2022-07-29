package Lenguajes.ParkingLotProject.controller;

import Lenguajes.ParkingLotProject.domain.Parking;
import Lenguajes.ParkingLotProject.domain.Space;
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
@RequestMapping(path = "/api/Space")
public class SpaceController {

    @Autowired
    private SpaceService service;

    @GetMapping("/GetSpace")
    public List<Space> list() {
        return service.listAll();
    }

    @GetMapping("/GetSpace/{id}")
    public ResponseEntity<Space> get(@PathVariable Integer id) {
        try {
            Space space = service.get(id);
            return new ResponseEntity<Space>(space, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Space>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/")
    public void add(@RequestBody Space space) {

        service.save(space);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Space> update(@RequestBody Space space, @PathVariable Integer id) {
        try {
            /*service.get(id);
            if(service.get(id)){
            }*/
            service.save(space);
            return new ResponseEntity<Space>(space, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Space>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Integer id) {
        service.delete(id);
    }


}
