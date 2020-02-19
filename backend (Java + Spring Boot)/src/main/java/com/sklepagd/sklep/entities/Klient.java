package com.sklepagd.sklep.entities;

import javax.persistence.*;

/**
 * Odpowiednik tabeli Klient jako klasa (mapowanie przy pomocy Hibernate)
 */
@Entity
public class Klient {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer idKlient;
    @Column(length = 30, nullable = false)
    private String login;
    @Column(length = 30, nullable = false)
    private String haslo;
    private String imie;
    private String nazwisko;
    private String telefon;
    private String email;
    private String miasto;
    private String ulica;
    @Column(length = 10)
    private String nrDomu;
    @Column(length = 5)
    private String kodPocz;

    public Integer getIdKlient() {
        return idKlient;
    }

    public void setIdKlient(Integer idKlient) {
        this.idKlient = idKlient;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getHaslo() {
        return haslo;
    }

    public void setHaslo(String haslo) {
        this.haslo = haslo;
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
