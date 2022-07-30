package Lenguajes.ParkingLotProject.controller;

import Lenguajes.ParkingLotProject.domain.Role;
import Lenguajes.ParkingLotProject.domain.User;
import Lenguajes.ParkingLotProject.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "/api/Role")
public class RoleController {

    @Autowired
    private RoleService service;

    @GetMapping("/GetRole")
    public List<Role> list() {
        return service.listAll();
    }

    @GetMapping("/GetRole/{id}")
    public ResponseEntity<Role> get(@PathVariable Integer id) {
        try {
            Role role = service.get(id);
            return new ResponseEntity<Role>(role, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Role>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/")
    public void add(@RequestBody Role role) {
        service.save(role);
    }

    @RequestMapping(path = "/update/{id}", method = RequestMethod.PUT)
    public void update(@PathVariable("id") int id,
                       @RequestBody Role role) {
        Role entity = role;
        entity.setId_Role(id);
        service.update(entity);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Integer id) {
        service.delete(id);
    }


}