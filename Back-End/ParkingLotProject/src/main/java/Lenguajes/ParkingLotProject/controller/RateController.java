package Lenguajes.ParkingLotProject.controller;

import Lenguajes.ParkingLotProject.domain.Parking;
import Lenguajes.ParkingLotProject.domain.Rate;
import Lenguajes.ParkingLotProject.domain.User;
import Lenguajes.ParkingLotProject.service.ParkingService;
import Lenguajes.ParkingLotProject.service.RateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "/api/Rate")
public class RateController {

    @Autowired
    private RateService service;

    @GetMapping("/GetRate")
    public List<Rate> list() {
        return service.listAll();
    }

    @GetMapping("/GetRate/{id}")
    public ResponseEntity<Rate> get(@PathVariable Integer id) {
        try {
            Rate rate = service.get(id);
            return new ResponseEntity<Rate>(rate, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Rate>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/")
    public void add(@RequestBody Rate rate) {

        service.save(rate);
    }

    @RequestMapping(path = "/update/{id}", method = RequestMethod.PUT)
    public void update(@PathVariable("id") int id,
                       @RequestBody Rate rate) {
        Rate entity = rate;
        entity.setId_Rate(id);
        service.update(entity);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Integer id) {
        service.delete(id);
    }


}
