package Lenguajes.ParkingLotProject.domain;

import javax.persistence.*;

@Entity
@Table(name ="[Vehicule]")
public class Vehicule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_Vehicule;

    @Column(name="License_Plate")
    private String license_Plate;
    @Column(name="Color")
    private String color;
    @Column(name="Brand")
    private String brand;


    @ManyToOne
    @JoinColumn(name="Id_User")
    private User id_User;

    @ManyToOne
    @JoinColumn(name="Id_Type")
    private Vehicule_Type id_Type;


    public Vehicule(){}
    public Vehicule(int id_Vehicule){
        super();
        this.id_Vehicule = id_Vehicule;
    }

    public Vehicule(int id_Vehicule,String license_Plate, String color, String brand, User id_User, Vehicule_Type id_Type) {
        this.setId_Vehicule(id_Vehicule);
        this.setLicense_Plate(license_Plate);
        this.setColor(color);
        this.setBrand(brand);
        this.setId_User(id_User);
        this.setId_Type(id_Type);
    }



    public int getId_Vehicule(){return id_Vehicule;}
    public void setId_Vehicule(int id_Vehicule) {this.id_Vehicule=id_Vehicule;}
    public String getLicense_Plate(){return license_Plate;}
    public void setLicense_Plate(String license_plate) {this.license_Plate = license_plate;}
    public String getColor(){return color;}
    public void setColor(String color) {this.color = color;}
    public String getBrand(){return brand;}
    public void setBrand(String brand) {this.brand = brand;}
    public User getId_User(){return id_User;}
    public void setId_User(User id_User) {this.id_User = id_User ;}
    public Vehicule_Type getId_Type(){return id_Type;}
    public void setId_Type(Vehicule_Type id_Type) {this.id_Type = id_Type ;}


}