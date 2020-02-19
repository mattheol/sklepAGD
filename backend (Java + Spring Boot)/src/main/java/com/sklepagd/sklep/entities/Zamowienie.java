package com.sklepagd.sklep.entities;

import javax.persistence.*;
import java.util.Date;

/**
 * Odpowiednik tabeli Zamowienie jako klasa (mapowanie przy pomocy Hibernate)
 */
@Entity
public class Zamowienie {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer idZam;
    @ManyToOne
    @JoinColumn(name = "idKlient",nullable = false)
    private Klient klient;
    @Column(nullable = false)
    private String imie;
    @Column(nullable = false)
    private String nazwisko;
    @Column(nullable = false)
    private Date dataZam;
    @Column(nullable = false)
    private Double koszt;
    @Column(length = 50,nullable = false)
    private String typDostawy;
    @Column(length = 12,nullable = false)
    private String telefon;
    private String email;
    private String dodOpis;
    @Column(length = 30,nullable = false)
    private String status;
    @Column(length = 50,nullable = false)
    private String typPlatnosci;
    @Column(nullable = false)
    private String miasto;
    @Column(nullable = false)
    private String ulica;
    @Column(length = 10,nullable = false)
    private String nrDomu;
    @Column(length = 5,nullable = false)
    private String kodPocz;

    public Integer getIdZam() {
        return idZam;
    }

    public void setIdZam(Integer idZam) {
        this.idZam = idZam;
    }


    public Klient getKlient() {
        return klient;
    }

    public void setKlient(Klient klient) {
        this.klient = klient;
    }

    public String getImie() {
        return imie;
    }

    public void setImie(String imie) {
        this.imie = imie;
    }

    public String getNazwisko() {
        return nazwisko;
    }

    public void setNazwisko(String nazwisko) {
        this.nazwisko = nazwisko;
    }

    public Date getDataZam() {
        return dataZam;
    }

    public void setDataZam(Date dataZam) {
        this.dataZam = dataZam;
    }

    public Double getKoszt() {
        return koszt;
    }

    public void setKoszt(Double koszt) {
        this.koszt = koszt;
    }

    public String getTypDostawy() {
        return typDostawy;
    }

    public void setTypDostawy(String typDostawy) {
        this.typDostawy = typDostawy;
    }

    public String getTelefon() {
        return telefon;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDodOpis() {
        return dodOpis;
    }

    public void setDodOpis(String dodOpis) {
        this.dodOpis = dodOpis;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getTypPlatnosci() {
        return typPlatnosci;
    }

    public void setTypPlatnosci(String typPlatnosci) {
        this.typPlatnosci = typPlatnosci;
    }

    public String getMiasto() {
        return miasto;
    }

    public void setMiasto(String miasto) {
        this.miasto = miasto;
    }

    public String getUlica() {
        return ulica;
    }

    public void setUlica(String ulica) {
        this.ulica = ulica;
    }

    public String getNrDomu() {
        return nrDomu;
    }

    public void setNrDomu(String nrDomu) {
        this.nrDomu = nrDomu;
    }

    public String getKodPocz() {
        return kodPocz;
    }

    public void setKodPocz(String kodPocz) {
        this.kodPocz = kodPocz;
    }
}
