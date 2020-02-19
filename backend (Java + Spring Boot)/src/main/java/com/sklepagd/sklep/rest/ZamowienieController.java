package com.sklepagd.sklep.rest;

import com.sklepagd.sklep.entities.Towar;
import com.sklepagd.sklep.entities.Zamowienie;
import com.sklepagd.sklep.repositories.TowarRepository;
import com.sklepagd.sklep.repositories.ZamowienieRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

/**
 * Kontroler REST, do którego są wysyłane zapytania po zasoby z tabeli Zamowienie oraz Towar
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ZamowienieController {
    private ZamowienieRepository zamowienieRepository;
    private TowarRepository towarRepository;

    public ZamowienieController(ZamowienieRepository zamowienieRepository, TowarRepository towarRepository) {
        this.zamowienieRepository = zamowienieRepository;
        this.towarRepository = towarRepository;
    }

    /**
     * Metoda odpowiedzialna za zapisanie zamówienia do bazy danych, po wysłaniu zapytania POST na uri: /zamowienia
     * @param zam Zamówienie
     * @return Zamówienie
     */
    @PostMapping("/zamowienia")
    public Zamowienie saveZamowienie(@RequestBody Zamowienie zam){

        return zamowienieRepository.save(zam);
    }

    /**
     * Metoda odpowiedzialna za zapisanie listy towarów do bazy danych, po wysłaniu zapytania POST na uri: /towary
     * @param towary Lista towarów
     * @return Lista towarów
     */
    @PostMapping("/towary")
    public List<Towar> saveTowary(@RequestBody List<Towar> towary){
        return towarRepository.saveAll(towary);
    }
}
