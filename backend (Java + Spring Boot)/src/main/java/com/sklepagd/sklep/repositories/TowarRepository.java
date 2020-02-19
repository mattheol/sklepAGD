package com.sklepagd.sklep.repositories;

import com.sklepagd.sklep.entities.Towar;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repozytorium odpowiedzialne za dostęp do rekordów z tabeli Towar w bazie danych
 */
public interface TowarRepository extends JpaRepository<Towar,Integer> {
}
