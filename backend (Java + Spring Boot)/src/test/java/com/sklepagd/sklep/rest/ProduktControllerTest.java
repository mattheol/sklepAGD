package com.sklepagd.sklep.rest;

import com.sklepagd.sklep.entities.Produkt;
import com.sklepagd.sklep.repositories.KategoriaRepository;
import com.sklepagd.sklep.repositories.ProduktRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.*;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.contains;
import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@ExtendWith(MockitoExtension.class)
class ProduktControllerTest {
    @InjectMocks
    ProduktController produktController;

    @Mock
    ProduktRepository produktRepository;
    @Mock
    KategoriaRepository kategoriaRepository;

    @Mock
    Produkt produkt1;
    @Mock
    Produkt produkt2;
    @Mock
    Produkt produkt3;


    @Test
    void retrieveProducts() {
        //before
        when(produkt1.getNazwa()).thenReturn("Telewizor LG");
        when(produkt2.getNazwa()).thenReturn("Mikser Tefal");
        when(produkt3.getNazwa()).thenReturn("Telewizor Sony");


        when(produktRepository.findAll()).thenReturn(Arrays.asList(produkt1,produkt2,produkt3));

        //test - rozmiar zwracanej listy = 3
        List<Produkt> result = produktController.retrieveProducts();
        assertThat(result.size()).isEqualTo(3);

        //test - lista zawiera produkty o podanych nazwach
        assertThat(result).anyMatch(prod -> prod.getNazwa().equals("Mikser Tefal") );
        assertThat(result).anyMatch(prod -> prod.getNazwa().equals("Telewizor LG") );
        assertThat(result).anyMatch(prod -> prod.getNazwa().equals("Telewizor Sony") );

        //test - pusta lista, rozmiar = 0
        when(produktRepository.findAll()).thenReturn(Arrays.asList());
        result = produktController.retrieveProducts();
        assertThat(result.size()).isEqualTo(0);

        //test - lista zawiera jeden element (produkt1) i ma rozmiar 1
        when(produktRepository.findAll()).thenReturn(Arrays.asList(produkt1));
        result = produktController.retrieveProducts();
        assertThat(result).anyMatch(prod -> prod.getNazwa().equals("Telewizor LG") );
        assertThat(result.size()).isEqualTo(1);

    }

    @Test
    void retrieveProduct() {
        //before
        when(produktRepository.findById(1)).thenReturn(Optional.of(produkt1));
        when(produkt1.getIdProd()).thenReturn(1);
        when(produktRepository.findById(2)).thenReturn(Optional.of(produkt2));
        when(produkt2.getIdProd()).thenReturn(2);
        when(produktRepository.findById(3)).thenReturn(Optional.empty());


        //test - zwraca przedmiot o id = 1
        Produkt prod =produktController.retrieveProduct(1);
        assertThat(prod.getIdProd()).isEqualTo(1);
        //test - zwraca przedmiot o id = 2
        prod = produktController.retrieveProduct(2);
        assertThat(prod.getIdProd()).isEqualTo(2);
        //test - nie ma przedmiotu o takim id, NoSuchElementException
        assertThatThrownBy(() -> produktController.retrieveProduct(3)).isInstanceOf(NoSuchElementException.class);
    }
}