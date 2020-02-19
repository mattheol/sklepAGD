package com.sklepagd.sklep.repositories;

import com.sklepagd.sklep.entities.Zamowienie;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repozytorium odpowiedzialne za dostęp do rekordów z tabeli Zamowienie w bazie danych
 */
public interface ZamowienieRepository extends JpaRepository<Zamowienie,Integer> {
}
