package Lenguajes.ParkingLotProject.domain;

import javax.persistence.*;

@Entity
@Table(name = "User")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_User;

    @Column(name="Name")
    private String name;
    @Column(name="LastName")
    private String lastName;
    @Column(name="Telephone")
    private String telephone;
    @Column(name="Address")
    private String address;
    @Column(name="Email")
    private String email;
    @Column(name="Password")
    private String password;
    @ManyToOne
    @JoinColumn(name="Id_Role")
    private Role id_Role;
    public User(){}

    public User(int id_User, String name, String lastName, String telephone, String address, String email, String password, Role id_Role) {
     this.setId_User(id_User);
     this.setName(name);
     this.setLastName(lastName);
     this.setTelephone(telephone);
     this.setAddress(address);
     this.setEmail(email);
     this.setPassword(password);
     this.setId_Role(id_Role);
    }

    public int getId_User() {
        return id_User;
    }
    public void setId_User(int id_User) {
        this.id_User = id_User;
    }

    public String getName() {
        return name;
    }
    public void setName(String name){this.name = name;}

    public String getLastName() {return lastName;}
    public void setLastName(String lastName) {this.lastName = lastName;}
    public String getTelephone() {return telephone;}
    public void setTelephone(String telephone) {this.telephone = telephone;}
    public String getAddress() {return address;}
    public void setAddress(String address) {this.address = address;}
    public String getEmail() {return email;}
    public void setEmail(String email) {this.email = email;}
    public String getPassword() {return password;}
    public void setPassword(String password) {this.password = password;}
    public Role getId_Role() {return id_Role;}
    public void setId_Role(Role id_Role) {this.id_Role = id_Role;}

}
