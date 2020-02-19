package com.sklepagd.sklep.entities;

import javax.persistence.*;


/**
 * Odpowiednik tabeli Kategoria jako klasa (mapowanie przy pomocy Hibernate)
 */
@Entity
public class Kategoria {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id_kat")
    private Integer idKat;

    private String nazwa;

    public Integer getIdKat() {
        return idKat;
    }

    public void setIdKat(Integer idKat) {
        this.idKat = idKat;
    }

    public String getNazwa() {
        return nazwa;
    }

    public void setNazwa(String nazwa) {
        this.nazwa = nazwa;
    }
}
