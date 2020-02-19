package com.sklepagd.sklep.entities;

import javax.persistence.*;

/**
 * Odpowiednik tabeli Towar jako klasa (mapowanie przy pomocy Hibernate)
 */
@Entity
@IdClass(TowarId.class)
public class Towar {
    @Id
    @ManyToOne
    @JoinColumn(name = "idProd")
    private Produkt produkt;

    @Id
    @ManyToOne
    @JoinColumn(name = "idZam")
    private Zamowienie zamowienie;
    private Integer ilosc;

    public Produkt getProdukt() {
        return produkt;
    }

    public void setProdukt(Produkt produkt) {
        this.produkt = produkt;
    }

    public Zamowienie getZamowienie() {
        return zamowienie;
    }

    public void setZamowienie(Zamowienie zamowienie) {
        this.zamowienie = zamowienie;
    }

    public Integer getIlosc() {
        return ilosc;
    }

    public void setIlosc(Integer ilosc) {
        this.ilosc = ilosc;
    }
}


