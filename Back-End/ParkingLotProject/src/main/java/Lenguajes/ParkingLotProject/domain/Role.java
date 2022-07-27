package Lenguajes.ParkingLotProject.domain;


import javax.persistence.*;


@Entity
@Table(name = "Role")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_Role;
    @Column(name="Name")
    private String name;


    public Role(){}

public Role(int id_Role){
        super();
        this.id_Role = id_Role;
}

    public Role(int id_Role,String name) {
        this.setId_Role(id_Role);
        this.setName(name);
    }

    public int getId_Role() {return id_Role;}
    public void setId_Role(int id_Role) {this.id_Role = id_Role;}
    public String getName() {return name;}
    public void setName(String name) {this.name = name;}


}
