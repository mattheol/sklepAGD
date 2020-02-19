package com.sklepagd.sklep.rest;

import com.sklepagd.sklep.entities.Klient;
import com.sklepagd.sklep.repositories.KlientRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 * Kontroler REST, do którego są wysyłane zapytania po zasoby z tabeli Klient
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class KlientController {

    private KlientRepository klientRepository;

    public KlientController(KlientRepository klientRepository) {
        this.klientRepository = klientRepository;
    }

    /**
     * Metoda odpowiedzialna za pobranie klienta o podanym id z bazy danych, po wysłaniu zapytania GET na uri: /klienci/{id}
     * @param id Id klienta
     * @return Klient
     */
    @GetMapping("/klienci/{id}")
    public Klient retrieveKlient(@PathVariable Integer id){
        return klientRepository.findById(id).get();
    }
}
