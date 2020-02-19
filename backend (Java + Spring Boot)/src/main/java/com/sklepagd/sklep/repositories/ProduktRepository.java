package com.sklepagd.sklep.repositories;


import com.sklepagd.sklep.entities.Produkt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


/**
 * Repozytorium odpowiedzialne za dostęp do rekordów z tabeli Produkt w bazie danych
 */
public interface ProduktRepository extends JpaRepository<Produkt,Integer> {
    /**
     * Metoda wyszukująca wszystkie produkty z podanej kategorii
     * @param nazwa kategoria
     * @return lista produktów
     */
    @Query(value = "select * from produkt join kategoria on produkt.id_kat=kategoria.id_kat where " +
            "kategoria.nazwa=?1",nativeQuery = true)
    public List<Produkt> findByKategoriaNazwa(String nazwa);
}
