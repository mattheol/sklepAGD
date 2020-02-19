package com.sklepagd.sklep.rest;

import com.sklepagd.sklep.entities.Kategoria;
import com.sklepagd.sklep.entities.Produkt;
import com.sklepagd.sklep.repositories.KategoriaRepository;
import com.sklepagd.sklep.repositories.ProduktRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


/**
 * Kontroler REST, do którego są wysyłane zapytania po zasoby z tabeli Produkt oraz Kategoria
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProduktController {

    private ProduktRepository produktRepository;
    private KategoriaRepository kategoriaRepository;

    public ProduktController(ProduktRepository produktRepository, KategoriaRepository kategoriaRepository){
        this.produktRepository = produktRepository;
        this.kategoriaRepository = kategoriaRepository;
    }

    /**
     * Metoda odpowiedzialna za pobranie wszystkich produktów z bazy danych, po wysłaniu zapytania GET na uri: /produkty
     * @return Lista produktów
     */
    @GetMapping("/produkty")
    public List<Produkt> retrieveProducts(){
        return produktRepository.findAll();
    }

    /**
     * Metoda odpowiedzialna za pobranie produktów o podanym id z bazy danych, po wysłaniu zapytania GET na uri: /produkty/{id}
     * @param id Id produktu
     * @return Produkt
     */
    @GetMapping("/produkty/{id}")
    public Produkt retrieveProduct(@PathVariable Integer id){
        return produktRepository.findById(id).get();
    }

    /**
     * Metoda odpowiedzialna za pobranie wszystkich kategorii z bazy danych, po wysłaniu zapytania GET na uri: /kategorie
     * @return Lista kategorii
     */
    @GetMapping("/kategorie")
    public List<Kategoria> retrieveCategories()
    {
        return kategoriaRepository.findAll();
    }

    /**
     * Metoda odpowiedzialna za pobranie wszystkich produktów z danej kategorii z bazy danych, po wysłaniu zapytania GET na uri: /produkty/?kategoria={nazwa}
     * @param nazwa Nazwa kategorii
     * @return Lista produktów
     */
    @GetMapping("/produkcik")
    public List<Produkt> retrieveProductsByCategory(@RequestParam("kategoria") String nazwa){
        return produktRepository.findByKategoriaNazwa(nazwa);
    }

}
