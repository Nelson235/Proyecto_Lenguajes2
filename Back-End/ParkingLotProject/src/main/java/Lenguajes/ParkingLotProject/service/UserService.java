package Lenguajes.ParkingLotProject.service;

import Lenguajes.ParkingLotProject.domain.User;
import Lenguajes.ParkingLotProject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepository repository;

    public List<User> listAll() {
        return repository.findAll();
    }

    public void save(User user) {
        repository.save(user);
    }

    public User get(int id_User) {
        return repository.findById(id_User).get();
    }

    public void delete(int id_User) {
        repository.deleteById(id_User);
    }

}
