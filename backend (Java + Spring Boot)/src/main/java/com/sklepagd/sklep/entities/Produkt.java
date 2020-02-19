package com.sklepagd.sklep.entities;


import javax.persistence.*;

/**
 * Odpowiednik tabeli Produkt jako klasa (mapowanie przy pomocy Hibernate)
 */
@Entity
public class Produkt {

    @Id
    private Integer idProd;
    @Column(nullable = false)
    private String nazwa;
    private Double cena;
    @Column(length = 2000)
    private String opis;
    @Column(length = 2000)
    private String specyfikacja;
    private Integer liczbaSztuk;
    private Double waga;
    @ManyToOne
    @JoinColumn(name = "idKat",nullable = false)
    private Kategoria kategoria;

    public Integer getIdProd() {
        return idProd;
    }

    public void setIdProd(Integer idProd) {
        this.idProd = idProd;
    }

    public String getNazwa() {
        return nazwa;
    }

    public void setNazwa(String nazwa) {
        this.nazwa = nazwa;
    }

    public Double getCena() {
        return cena;
    }

    public void setCena(Double cena) {
        this.cena = cena;
    }

    public String getOpis() {
        return opis;
    }

    public void setOpis(String opis) {
        this.opis = opis;
    }

    public String getSpecyfikacja() {
        return specyfikacja;
    }

    public void setSpecyfikacja(String specyfikacja) {
        this.specyfikacja = specyfikacja;
    }

    public Integer getLiczbaSztuk() {
        return liczbaSztuk;
    }

    public void setLiczbaSztuk(Integer liczbaSztuk) {
        this.liczbaSztuk = liczbaSztuk;
    }

    public Double getWaga() {
        return waga;
    }

    public void setWaga(Double waga) {
        this.waga = waga;
    }

    public Kategoria getKategoria() {
        return kategoria;
    }

    public void setKategoria(Kategoria kategoria) {
        this.kategoria = kategoria;
    }
}
