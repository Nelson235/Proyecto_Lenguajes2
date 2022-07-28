package Lenguajes.ParkingLotProject.domain;


import javax.persistence.*;


@Entity
@Table(name = "Rate")
public class Rate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_Rate;

    @ManyToOne
    @JoinColumn(name="Id_Type")
    private Vehicule_Type id_Type;

    @Column(name="Per_Hour")
    private float per_Hour;

    @Column(name="Per_HalfHour")
    private float per_HalfHour;

    @Column(name="Per_Day")
    private float per_Day;

    @Column(name="Per_Week")
    private float per_Week;

    @Column(name="Per_Month")
    private float per_Month;

    @Column(name="Per_Year")
    private float per_Year;


    public Rate(){}

    public Rate(int id_Rate){
        super();
        this.id_Rate = id_Rate;
    }

    public Rate(int id_Rate,Vehicule_Type id_Type, float per_Hour, float per_HalfHour, float per_Day, float per_Week, float per_Month, float per_Year) {
        this.setId_Rate(id_Rate);
        this.setId_Type(id_Type);
        this.setPer_Hour(per_Hour);
        this.setPer_HalfHour(per_HalfHour);
        this.setPer_Day(per_Day);
        this.setPer_Week(per_Week);
        this.setPer_Month(per_Month);
        this.setPer_Year(per_Year);
    }

    public int getId_Rate() {return id_Rate;}
    public void setId_Rate(int id_Rate) {this.id_Rate = id_Rate;}
    public Vehicule_Type getId_Type() {return id_Type;}
    public void setId_Type(Vehicule_Type id_Type) {this.id_Type = id_Type;}
    public float getPer_Hour() {return per_Hour;}
    public void setPer_Hour(float per_Hour) {this.per_Hour = per_Hour;}
    public float getPer_HalfHour() {return per_HalfHour;}
    public void setPer_HalfHour(float per_HalfHour) {this.per_HalfHour= per_HalfHour;}
    public float getPer_Day() {return per_Day;}
    public void setPer_Day(float per_Day) {this.per_Day = per_Day;}
    public float getPer_Week() {return per_Week;}
    public void setPer_Week(float per_Week) {this.per_Week = per_Week;}
    public float getPer_Month() {return per_Month;}
    public void setPer_Month(float per_Month) {this.per_Month = per_Month;}
    public float getPer_Year() {return per_Year;}
    public void setPer_Year(float per_Year) {this.per_Year = per_Year;}


}