import { AppPage } from './app.po';
import { browser, logging, by, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('SLG Login Component', () => {
  let page = 'http://localhost:4200/';

 

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getTitleText()).toEqual('SLG-NG app is running!');
  // });

  it('should reach the website correctly', () =>{
    browser.get(page);
    expect(browser.getTitle()).toBe("Shopping List Generator");
  });






  // afterEach(async () => {
  //   // Assert that there are no errors emitted from the browser
  //   const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  //   expect(logs).not.toContain(jasmine.objectContaining({
  //     level: logging.Level.SEVERE,
  //   } as logging.Entry));
  // });

  it('should be able to login correctly', () => {
    browser.get(page);
    let usernameInput = element(by.id("usernameText"));
    usernameInput.sendKeys("wb");
    let passwordInput = element(by.id("passwordText"));
    passwordInput.sendKeys("12");
    let loginButton = element(by.id("loginButton"));
    loginButton.click();

    let header1 = element(by.tagName("h1"));
    expect(browser.getCurrentUrl()).toBe(page + 'home');

  })
  it('should allow user to register a new account and login', () => {
    browser.get(page);
    let registerLink = element(by.id("register"));
    registerLink.click();
    let usernameInput = element(by.id("usernameText"));
    usernameInput.sendKeys("PROTRACTOR");
    let passwordInput = element(by.id("passwordText"));
    passwordInput.sendKeys("PROTRACTOR_PASS");
    let passwordConfirmInput = element(by.id("confirmPasswordText"));
    passwordConfirmInput.sendKeys("PROTRACTOR_PASS");
    let fNameInput = element(by.id("firstnameText"));
    fNameInput.sendKeys("PROTRACTOR_FIRST");
    let lNameInput = element(by.id("firstnameText"));
    lNameInput.sendKeys("PROTRACTOR_LAST");
    let regButton = element(by.id("registerButton"));
    regButton.click();
    browser.get(page);

    usernameInput.sendKeys("PROTRACTOR");
    passwordInput.sendKeys("PROTRACTOR_PASS");
    let loginButton = element(by.id("loginButton"));
    loginButton.click();

    // Non-repeatable because of non-unique exception from backend.
    // expect(browser.getCurrentUrl()).toBe(page + 'home');



  })

  it('should deny login with incorrect credentials', () => {
    browser.get(page);
    let usernameInput = element(by.id("usernameText"));
    usernameInput.sendKeys("wb");
    let passwordInput = element(by.id("passwordText"));
    // wrong password
    passwordInput.sendKeys("password");
    let loginButton = element(by.id("loginButton"));
    loginButton.click();

    expect(browser.getCurrentUrl()).toBe(page + 'login');



  })

  it('should navigate to the shopping list', () => {
    browser.get(page);
    let usernameInput = element(by.id("usernameText"));
    usernameInput.sendKeys("wb");
    let passwordInput = element(by.id("passwordText"));
    passwordInput.sendKeys("12");
    let loginButton = element(by.id("loginButton"));
    loginButton.click();
    // WIP
  })

  it('should navigate to the pantry ', () => {
    browser.get(page);
    let usernameInput = element(by.id("usernameText"));
    usernameInput.sendKeys("wb");
    let passwordInput = element(by.id("passwordText"));
    passwordInput.sendKeys("12");
    let loginButton = element(by.id("loginButton"));
    loginButton.click();

    // WIP
  
  });
  

  it('should navigate to recipes', ()=>{
    browser.get(page);
    let usernameInput = element(by.id("usernameText"));
    usernameInput.sendKeys("wb");
    let passwordInput = element(by.id("passwordText"));
    passwordInput.sendKeys("12");
    let loginButton = element(by.id("loginButton"));
    loginButton.click();

    // WIP

  })

  it('should add a pantry item', ()=>{
    browser.get(page);
    let usernameInput = element(by.id("usernameText"));
    usernameInput.sendKeys("aj");
    let passwordInput = element(by.id("passwordText"));
    passwordInput.sendKeys("12");
    let loginButton = element(by.id("loginButton"));
    loginButton.click();
    let pantryNavButton = element(by.id("pantryNavButton"));
    pantryNavButton.click();
    let addFoodItemButton = element(by.id("addFoodItemButton"));
    addFoodItemButton.click();
    let selectingredient = element(by.id("selectingredient"));
    selectingredient.click();
    let selectOption = element(by.xpath("//*[@id='selectingredient']/option[1]"));
    selectOption.click();
    let addinput = element(by.id("addinput"));
    addinput.sendKeys("15");
    let addPantryButton = element(by.id("addPantryButton"));
    addPantryButton.click();

  })

  it('should delete a pantry item', ()=>{
    browser.get(page);
    let usernameInput = element(by.id("usernameText"));
    usernameInput.sendKeys("aj");
    let passwordInput = element(by.id("passwordText"));
    passwordInput.sendKeys("12");
    let loginButton = element(by.id("loginButton"));
    loginButton.click();
    let pantryNavButton = element(by.id("pantryNavButton"));
    pantryNavButton.click();
    let selectedRow = element(by.xpath("//*[@id='RecipeSeletions']/tr[1]"));
    selectedRow.click();
    let removeFoodButton = element(by.id("removeFoodButton"));
    
  })

  it('should update a pantry item', ()=>{
    browser.get(page);
    let usernameInput = element(by.id("usernameText"));
    usernameInput.sendKeys("aj");
    let passwordInput = element(by.id("passwordText"));
    passwordInput.sendKeys("12");
    let loginButton = element(by.id("loginButton"));
    loginButton.click();
    let pantryNavButton = element(by.id("pantryNavButton"));
    pantryNavButton.click();
    let selectedRow = element(by.xpath("//*[@id='RecipeSeletions']/tr[1]"));
    let addinput = element(by.id("addinput"));
    addinput.sendKeys("100");
    let updateFoodItem = element(by.id("updateFoodItem"));
    updateFoodItem.click();
    
  })



});
