package Lenguajes.ParkingLotProject.controller;

import Lenguajes.ParkingLotProject.domain.*;
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
    public void add(@RequestBody Parking parking) {
        Vehicule_Type type = new Vehicule_Type();
        type.setId_Type(6);

        Vehicule vehicule = new Vehicule();
        vehicule.setId_Vehicule(18);

        Rate rate = new Rate();
        rate.setId_Rate(16);
        Space space = new Space();
        space.setId_Space(0);
        space.setId_Type(type);
        space.setStatus("Disponible");
        space.setId_Vehicule(vehicule);
        space.setCheck_In("");
        space.setId_Rate(rate);
        space.setId_Parking(parking);



        if(parking !=null){
            for (int i=1;i<=parking.getCapacity();i++) {
                space.setNumber(i);
                service.save(space);
            }
        }
    }

    @RequestMapping(path = "/update/{id}", method = RequestMethod.PUT)
    public void update(@PathVariable("id") int id,
                       @RequestBody Space space) {
        Space entity = space;
        entity.setId_Space(id);
        service.update(entity);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Integer id) {
        service.delete(id);
    }


}
