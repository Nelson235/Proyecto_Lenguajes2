package Lenguajes.ParkingLotProject.domain;

import javax.persistence.*;

@Entity
@Table(name = "User")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id_User;


    private String Name;

    private String LastName;

    private String Telephone;

    private String Address;
    private String Email;
    private String Password;
    private int Id_Role;
    public User(){}

    public User(int id_User, String name, String lastName, String telephone, String address, String email, String password, int id_Role) {
        Id_User = id_User;
        Name = name;
        LastName = lastName;
        Telephone = telephone;
        Address = address;
        Email = email;
        Password = password;
        Id_Role = id_Role;
    }

    public int getId_User() {
        return Id_User;
    }

    public void setId_User(int id_User) {
        Id_User = id_User;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getLastName() {
        return LastName;
    }

    public void setLastName(String lastName) {
        LastName = lastName;
    }

    public String getTelephone() {
        return Telephone;
    }

    public void setTelephone(String telephone) {
        Telephone = telephone;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public int getId_Role() {
        return Id_Role;
    }

    public void setId_Role(int id_Role) {
        Id_Role = id_Role;
    }

}
