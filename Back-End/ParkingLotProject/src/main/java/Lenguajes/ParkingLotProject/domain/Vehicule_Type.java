package Lenguajes.ParkingLotProject.domain;


import javax.persistence.*;


@Entity
@Table(name = "Vehicule_Type")
public class Vehicule_Type {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_Type;
    @Column(name="Name")
    private String name;


    public Vehicule_Type(){}

    public Vehicule_Type(int id_Type){
        super();
        this.id_Type = id_Type;
    }

    public Vehicule_Type(int id_Type,String name) {
        this.setId_Type(id_Type);
        this.setName(name);
    }

    public int getId_Type() {return id_Type;}
    public void setId_Type(int id_Type) {this.id_Type = id_Type;}
    public String getName() {return name;}
    public void setName(String name) {this.name = name;}
}

