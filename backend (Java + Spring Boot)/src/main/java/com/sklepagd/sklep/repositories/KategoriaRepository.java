package com.sklepagd.sklep.repositories;

import com.sklepagd.sklep.entities.Kategoria;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repozytorium odpowiedzialne za dostęp do rekordów z tabeli Kategoria w bazie danych
 */
public interface KategoriaRepository extends JpaRepository<Kategoria,Integer> {
}
