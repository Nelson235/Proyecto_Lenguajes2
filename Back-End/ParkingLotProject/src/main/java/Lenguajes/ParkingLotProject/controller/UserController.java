package Lenguajes.ParkingLotProject.controller;

import Lenguajes.ParkingLotProject.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import Lenguajes.ParkingLotProject.service.UserService;

import java.util.Arrays;
import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "/api/User")
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping("/GetUsers")
    public List<User> list() {
        return service.listAll();
    }


    @GetMapping("/GetUserByEmail/{email}")
    public ResponseEntity<User> getEmail(@PathVariable String email) {
        try {
            User user = null;
           List<User> users = list();
            for (int i=0;i<users.size();i++) {

                if(users.get(i).getEmail().equals(email)){
                     user = users.get(i);
                    return new ResponseEntity<User>(user, HttpStatus.OK);

                }
            }
            return new ResponseEntity<User>(user, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/GetUser/{id}")
    public ResponseEntity<User> get(@PathVariable Integer id) {
        try {
            User user = service.get(id);
            return new ResponseEntity<User>(user, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/")
    public void add(@RequestBody User user) {
        service.save(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> update(@RequestBody User user, @PathVariable Integer id) {
        try {
            service.save(user);
            return new ResponseEntity<User>(user, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/DeleteUser/{id}")
    public void delete(@PathVariable Integer id) {
        service.delete(id);
    }

}
