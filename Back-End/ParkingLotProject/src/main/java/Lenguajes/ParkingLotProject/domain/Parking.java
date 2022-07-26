package Lenguajes.ParkingLotProject.domain;


import javax.persistence.*;


@Entity
@Table(name = "Parking")
public class Parking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_Parking;
    @Column(name="Name_Parking")
    private String name_Parking;
    @Column(name="Capacity")
    private int capacity;

    @Column(name="Province")
    private String  province;
    @Column(name="District")
    private String district;

    public Parking(){}

    public Parking(int id_Parking){
        super();
        this.id_Parking = id_Parking;
    }
    public Parking(int id_Parking,int capacity,  String district,String name_Parking,String province) {
        this.setId_Parking(id_Parking);
        this.setName_Parking(name_Parking);
        this.setCapacity(capacity);
        this.setProvince(province);
        this.setDistrict(district);
    }

    public int getId_Parking() {return id_Parking;}
    public void setId_Parking(int id_Parking) {this.id_Parking = id_Parking;}
    public String getName() {return name_Parking;}
    public void setName_Parking(String name_Parking) {this.name_Parking = name_Parking;}
    public int getCapacity() {return capacity;}
    public void setCapacity(int capacity) {this.capacity = capacity;}
    public String getProvince() {return province;}
    public void setProvince(String province) {this.province = province;}
    public String getDistrict() {return district;}
    public void setDistrict(String district) {this.district = district;}


}
