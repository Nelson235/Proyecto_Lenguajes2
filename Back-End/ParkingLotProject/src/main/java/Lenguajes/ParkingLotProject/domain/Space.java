package Lenguajes.ParkingLotProject.domain;


import javax.persistence.*;


@Entity
@Table(name = "Space")
public class Space {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_Space;

    @Column(name="[Number]")
    private int number;

    @ManyToOne
    @JoinColumn(name="Id_Type")
    private Vehicule_Type id_Type;

    @Column(name="Status")
    private String status;

    @ManyToOne
    @JoinColumn(name="Id_Vehicule")
    private Vehicule id_Vehicule;

    @ManyToOne
    @JoinColumn(name="Id_Parking")
    private Parking id_Parking;

    @Column(name="Check_In")
    private String check_In;

    @ManyToOne
    @JoinColumn(name="Id_Rate")
    private Rate id_Rate;




    public Space(){}

    public Space(int id_Space){
        super();
        this.id_Space = id_Space;
    }

    public Space(int id_Space,int number,Vehicule_Type id_Type, String status, Vehicule id_Vehicule, Parking id_Parking, String check_In, Rate id_Rate) {
        this.setId_Space(id_Space);
        this.setNumber(number);
        this.setId_Type(id_Type);
       this.setStatus(status);
       this.setId_Vehicule(id_Vehicule);
       this.setId_Parking(id_Parking);
       this.setCheck_In(check_In);
       this.setId_Rate(id_Rate);
    }

    public int getId_Space() {return id_Space;}
    public void setId_Space(int id_Space) {this.id_Space = id_Space;}
    public int getNumber() {return number;}
    public void setNumber(int number) {this.number = number;}
    public Vehicule_Type getId_Type() {return id_Type;}
    public void setId_Type(Vehicule_Type id_Type) {this.id_Type = id_Type;}
    public String getStatus() {return status;}
    public void setStatus(String status) {this.status = status;}
    public Vehicule getId_Vehicule() {return id_Vehicule;}
    public void setId_Vehicule(Vehicule id_Vehicule) {this.id_Vehicule = id_Vehicule;}
    public Parking getId_Parking() {return id_Parking;}
    public void setId_Parking(Parking id_Parking) {this.id_Parking = id_Parking;}
    public String getCheck_In() {return check_In;}
    public void setCheck_In(String check_In) {this.check_In = check_In;}
    public Rate getId_Rate() {return id_Rate;}
    public void setId_Rate(Rate id_Rate) {this.id_Rate = id_Rate;}

}