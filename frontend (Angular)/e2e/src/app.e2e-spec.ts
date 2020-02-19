import { AppPage } from './app.po';
import { browser, logging, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
    page = new AppPage();
    page.navigateTo();
  });

  
  it('should have form as invalid and show alert window', () => {
    let test_data=[
      {imie:'S',nazwisko:'Kowal',dostawa:'Kurier',miasto:'Wrocław',ulica:'Sobieskiego',nrDomu:'13/10a',kod:'50314', telefon: '123456789'},
      {imie:'Klaudia',nazwisko:'Kowalska',dostawa:'Odbiór osobisty',miasto:'',ulica:'',nrDomu:'',kod:'', telefon: '69422'},
      {imie:'Ewa',nazwisko:'132Ma',dostawa:'Kurier',miasto:'Opole',ulica:'Tęczowa',nrDomu:'14',kod:'35002', telefon: '123456789'},
      {imie:'Jan',nazwisko:'Nowak',dostawa:'Kurier',miasto:'',ulica:'',nrDomu:'',kod:'1', telefon: '423456123'},
    ]   
      for(let i=0;i<test_data.length;i++){
        page.getImie().clear()
        page.getNazwisko().clear()
        page.getEmail().clear()
        page.getTelefon().clear()
        page.getImie().sendKeys(test_data[i].imie)
        page.getNazwisko().sendKeys(test_data[i].nazwisko)
        page.getDostawa().sendKeys(test_data[i].dostawa)
        if(test_data[i].dostawa!=='Odbiór osobisty'){
          page.getMiasto().clear()
          page.getkodPocz().clear()
          page.getUlica().clear()
          page.getNrDomu().clear()
          page.getMiasto().sendKeys(test_data[i].miasto)
          page.getUlica().sendKeys(test_data[i].ulica)
          page.getNrDomu().sendKeys(test_data[i].nrDomu)
          page.getkodPocz().sendKeys(test_data[i].kod)
        }
        page.getTelefon().sendKeys(test_data[i].telefon)
        browser.sleep(2000);
        page.getButton().click();
        browser.sleep(1000);
        browser.switchTo().alert().accept()
        browser.sleep(1000);
        let form = page.getForm().getAttribute('class')
        expect(form).toContain('ng-invalid')
      }
  });
  


  it('should have form as valid and redirect to /poprawne-zamowienie/{nr_zam}', () => {
    
    let test_data=[
      {imie:'Jan',nazwisko:'Kowal',dostawa:'Kurier',miasto:'Wrocław',ulica:'Sobieskiego',nrDomu:'13/10a',kod:'50314', telefon: '123456789',plat:'payu'},
      {imie:'Klaudia',nazwisko:'Kowalska',dostawa:'Odbiór osobisty',miasto:'',ulica:'',nrDomu:'',kod:'', telefon: '694156776',plat:'payu'},
      {imie:'Ewa',nazwisko:'Malinowska',dostawa:'Kurier',miasto:'Opole',ulica:'Tęczowa',nrDomu:'14',kod:'35002', telefon: '123456789',plat:'na miejscu'},
      {imie:'Jan',nazwisko:'Nowak',dostawa:'Kurier',miasto:'Wrocław',ulica:'Sobieskiego',nrDomu:'1/22',kod:'50316', telefon: '423456123',plat:'przelewy'},
    ]   
      for(let i=0;i<test_data.length;i++){
        page.navigateTo();
        browser.sleep(1000);
        page.getImie().clear()
        page.getNazwisko().clear()
        page.getEmail().clear()
        page.getTelefon().clear()
        page.getImie().sendKeys(test_data[i].imie)
        page.getNazwisko().sendKeys(test_data[i].nazwisko)
        page.getDostawa().sendKeys(test_data[i].dostawa)
        if(test_data[i].plat==='na miejscu'){
          browser.driver.actions().mouseMove(page.getNaMiejscu()).perform();
          page.getNaMiej().then(elem => elem[0].click())     
        }
        if(test_data[i].plat==='przelewy'){       
          browser.driver.actions().mouseMove(page.getPrzelewy()).perform();
          page.getPrz().then(elem => elem[0].click())     
         }
        if(test_data[i].plat==='payu'){       
          browser.driver.actions().mouseMove(page.getPayU()).perform();
          page.getPa().then(elem => elem[0].click())     
         }
        if(test_data[i].dostawa!=='Odbiór osobisty'){
          page.getMiasto().clear()
          page.getkodPocz().clear()
          page.getUlica().clear()
          page.getNrDomu().clear()
          page.getMiasto().sendKeys(test_data[i].miasto)
          page.getUlica().sendKeys(test_data[i].ulica)
          page.getNrDomu().sendKeys(test_data[i].nrDomu)
          page.getkodPocz().sendKeys(test_data[i].kod)
        }
        page.getTelefon().sendKeys(test_data[i].telefon)
        browser.sleep(1000);
        let form = page.getForm().getAttribute('class')
        expect(form).toContain('ng-valid')
        page.getButton().click();
        browser.sleep(1000);
        if(test_data[i].plat!=='na miejscu'){
        browser.getAllWindowHandles().then((handles) => {
            browser.driver.switchTo().window(handles[1]);
            browser.driver.close();
            browser.driver.switchTo().window(handles[0]);
          });
        }
        let correctUrl =true
        browser.getCurrentUrl().then(data => correctUrl= data.includes('http://localhost:4200/poprawne-zamowienie'))
        browser.sleep(1000)
        expect(correctUrl).toBeTruthy()
        browser.sleep(1000);

      }
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
