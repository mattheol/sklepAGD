package com.sklepagd.sklep.repositories;

import com.sklepagd.sklep.entities.Klient;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repozytorium odpowiedzialne za dostęp do rekordów z tabeli Klient w bazie danych
 */
public interface KlientRepository extends JpaRepository<Klient,Integer> {
}
