import { AppPage } from './app.po';
import { browser, logging, by, element, Key } from 'protractor';
import { protractor } from 'protractor/built/ptor';

let page = 'http://localhost:4200/';
// describe('SLG Login Component', () => {
//   // it('should display welcome message', () => {
//   //   page.navigateTo();
//   //   expect(page.getTitleText()).toEqual('SLG-NG app is running!');
//   // });

//   it('should reach the website correctly', () => {
//     browser.get(page);
//     expect(browser.getTitle()).toBe("Alfred's List");
//   });

//   // afterEach(async () => {
//   //   // Assert that there are no errors emitted from the browser
//   //   const logs = await browser.manage().logs().get(logging.Type.BROWSER);
//   //   expect(logs).not.toContain(jasmine.objectContaining({
//   //     level: logging.Level.SEVERE,
//   //   } as logging.Entry));
//   // });

//   it('should be able to login correctly', () => {
//     browser.get(page);
//     let usernameInput = element(by.id('usernameText'));
//     usernameInput.sendKeys('wb');
//     let passwordInput = element(by.id('passwordText'));
//     passwordInput.sendKeys('12');
//     let loginButton = element(by.id('loginButton'));
//     loginButton.click();

//     let header1 = element(by.tagName('h1'));
//     expect(browser.getCurrentUrl()).toBe(page + 'home');
//   });
//   it('should allow user to register a new account and login', () => {
//     browser.get(page);
//     let registerLink = element(by.id('register'));
//     registerLink.click();
//     let usernameInput = element(by.id('usernameText'));
//     usernameInput.sendKeys('PROTRACTOR');
//     let passwordInput = element(by.id('passwordText'));
//     passwordInput.sendKeys('PROTRACTOR_PASS');
//     let passwordConfirmInput = element(by.id('confirmPasswordText'));
//     passwordConfirmInput.sendKeys('PROTRACTOR_PASS');
//     let fNameInput = element(by.id('firstnameText'));
//     fNameInput.sendKeys('PROTRACTOR_FIRST');
//     let lNameInput = element(by.id('firstnameText'));
//     lNameInput.sendKeys('PROTRACTOR_LAST');
//     let regButton = element(by.id('registerButton'));
//     regButton.click();
//     browser.get(page);

//     usernameInput.sendKeys('PROTRACTOR');
//     passwordInput.sendKeys('PROTRACTOR_PASS');
//     let loginButton = element(by.id('loginButton'));
//     loginButton.click();

//     // Non-repeatable because of non-unique exception from backend.
//     // expect(browser.getCurrentUrl()).toBe(page + 'home');
//   });

//   it('should deny login with incorrect credentials', () => {
//     browser.get(page);
//     let usernameInput = element(by.id('usernameText'));
//     usernameInput.sendKeys('wb');
//     let passwordInput = element(by.id('passwordText'));
//     // wrong password
//     passwordInput.sendKeys('password');
//     let loginButton = element(by.id('loginButton'));
//     loginButton.click();

//     browser.sleep(500);
//     let alert = browser.switchTo().alert();
//     alert.accept();

//     expect(browser.getCurrentUrl()).toBe(page + 'login');
//   });

//   it('should navigate to the shopping list', () => {
//     browser.get(page);
//     let usernameInput = element(by.id('usernameText'));
//     usernameInput.sendKeys('wb');
//     let passwordInput = element(by.id('passwordText'));
//     passwordInput.sendKeys('12');
//     let loginButton = element(by.id('loginButton'));
//     loginButton.click();

//     let shoppingButton = element(
//       by.xpath('/html/body/app-root/div[1]/app-navbar/nav/button[2]')
//     );
//     shoppingButton.click();

//     expect(browser.getCurrentUrl()).toBe(page + 'shoppinglist');
//   });

//   it('should navigate to the pantry ', () => {
//     browser.get(page);
//     let usernameInput = element(by.id('usernameText'));
//     usernameInput.sendKeys('wb');
//     let passwordInput = element(by.id('passwordText'));
//     passwordInput.sendKeys('12');
//     let loginButton = element(by.id('loginButton'));
//     loginButton.click();

//     let pantryButton = element(
//       by.xpath('/html/body/app-root/div[1]/app-navbar/nav/button[4]')
//     );
//     pantryButton.click();

//     expect(browser.getCurrentUrl()).toBe(page + 'pantry');
//   });

//   it('should navigate to recipes', () => {
//     browser.get(page);
//     let usernameInput = element(by.id('usernameText'));
//     usernameInput.sendKeys('wb');
//     let passwordInput = element(by.id('passwordText'));
//     passwordInput.sendKeys('12');
//     let loginButton = element(by.id('loginButton'));
//     loginButton.click();

//     let recipeButton = element(
//       by.xpath('/html/body/app-root/div[1]/app-navbar/nav/button[3]')
//     );
//     recipeButton.click();
//     expect(browser.getCurrentUrl()).toBe(page + 'recipe');
//   });
// });

// describe('SLG Shopping List Component', () => {
//   beforeAll(async () => {
//     browser.get(page);
//     let usernameInput = element(by.id('usernameText'));
//     usernameInput.sendKeys('wb');
//     let passwordInput = element(by.id('passwordText'));
//     passwordInput.sendKeys('12');
//     let loginButton = element(by.id('loginButton'));
//     loginButton.click();

//     let recipeButton = element(
//       by.xpath('/html/body/app-root/div[1]/app-navbar/nav/button[3]')
//     );
//     recipeButton.click();
//     element(
//       by.xpath('/html/body/app-root/div[2]/app-recipe/div/div[2]/p/a')
//     ).click();
//     browser.sleep(1000);
//     element(
//       by.xpath(
//         '/html/body/app-root/div[2]/app-recipe/div/div[2]/div[1]/div[2]/input'
//       )
//     ).sendKeys('italian');
//     element(
//       by.xpath(
//         '/html/body/app-root/div[2]/app-recipe/div/div[2]/div[1]/div[2]/button'
//       )
//     ).click();
//     //lasagna add button
//     let lasagnaAdd = element(
//       by.xpath(
//         '/html/body/app-root/div[2]/app-recipe/div/div[3]/section[1]/div/section[3]/div/div[2]/button[2]'
//       )
//     );
//     lasagnaAdd.click();
//     let listAdd = element(
//       by.xpath(
//         '/html/body/app-root/div[2]/app-recipe/div/div[3]/section[2]/div/button'
//       )
//     );
//     listAdd.click();
//   });
//   beforeEach(async () => {
//     let shoppingButton = element(
//       by.xpath('/html/body/app-root/div[1]/app-navbar/nav/button[2]')
//     );
//     shoppingButton.click();
//   });

//   it('should purchase a selected item', () => {
//     let firstRow = element(
//       by.xpath(
//         '/html/body/app-root/div[2]/app-shoppinglist/div/div[2]/table/tbody/tr[1]'
//       )
//     );
//     firstRow.click();
//     let firstItemText = element(
//       by.xpath(
//         '/html/body/app-root/div[2]/app-shoppinglist/div/div[2]/table/tbody/tr[1]/td[1]'
//       )
//     ).getText();
//     let purchaseSelectionButton = element(
//       by.xpath(
//         '/html/body/app-root/div[2]/app-shoppinglist/div/div[2]/button[3]'
//       )
//     );
//     purchaseSelectionButton.click();

//     let pantryItemText = element(
//       by.xpath(
//         '/html/body/app-root/div[2]/app-pantry/div/div[2]/table/tbody/tr/td[1]'
//       )
//     ).getText();

//     expect(firstItemText).toBe(pantryItemText);
//   });

//   it('should increase and decrease item quantities', () => {
//     let qty = <number>(
//       (<unknown>(
//         element(
//           by.xpath(
//             '/html/body/app-root/div[2]/app-shoppinglist/div/div[2]/table/tbody/tr[1]/td[2]/span[1]'
//           )
//         ).getText()
//       ))
//     );
//     let add = element(
//       by.xpath(
//         '/html/body/app-root/div[2]/app-shoppinglist/div/div[2]/table/tbody/tr[1]/td[4]/button'
//       )
//     );
//     let sub = element(
//       by.xpath(
//         '/html/body/app-root/div[2]/app-shoppinglist/div/div[2]/table/tbody/tr[1]/td[3]/button'
//       )
//     );
//     add.click();
//     let modified = element(
//       by.xpath(
//         '/html/body/app-root/div[2]/app-shoppinglist/div/div[2]/table/tbody/tr[1]/td[2]/span[1]'
//       )
//     ).getText();
//     expect(modified).toBeGreaterThan(qty);
//     sub.click();
//     modified = element(
//       by.xpath(
//         '/html/body/app-root/div[2]/app-shoppinglist/div/div[2]/table/tbody/tr[1]/td[2]/span[1]'
//       )
//     ).getText();
//     expect(modified).toBeLessThanOrEqual(qty);
//   });

//   it('should be able to clear the cart', () => {
//     element(
//       by.xpath(
//         '/html/body/app-root/div[2]/app-shoppinglist/div/div[2]/button[4]'
//       )
//     ).click();

//     let firstRow = element(
//       by.xpath(
//         '/html/body/app-root/div[2]/app-shoppinglist/div/div[2]/table/tbody/tr[2]'
//       )
//     );

//     expect(browser.isElementPresent(firstRow)).toBeFalsy();
//   });

//   afterEach(async () => {});

//   afterAll(async () => {
//     let shoppingButton = element(
//       by.xpath('/html/body/app-root/div[1]/app-navbar/nav/button[2]')
//     );
//     shoppingButton.click();

//     element(
//       by.xpath(
//         '/html/body/app-root/div[2]/app-shoppinglist/div/div[2]/button[4]'
//       )
//     ).click();

//     let pantryButton = element(
//       by.xpath('/html/body/app-root/div[1]/app-navbar/nav/button[4]')
//     );
//     pantryButton.click();

//     let pantryRow = element(
//       by.xpath(
//         '/html/body/app-root/div[2]/app-pantry/div/div[2]/table/tbody/tr'
//       )
//     );
//     pantryRow.click();
//     browser.sleep(500);
//     element(
//       by.xpath('/html/body/app-root/div[2]/app-pantry/div/button[2]')
//     ).click();
//   });
// });

// // DESCRIBE
// describe('SLG Pantry Component', () => {
//   it('should add a pantry item', () => {
//     browser.get(page);
//     let usernameInput = element(by.id('usernameText'));
//     usernameInput.sendKeys('aj');
//     let passwordInput = element(by.id('passwordText'));
//     passwordInput.sendKeys('12');
//     let loginButton = element(by.id('loginButton'));
//     loginButton.click();
//     let pantryNavButton = element(
//       by.xpath('/html/body/app-root/div[1]/app-navbar/nav/button[4]')
//     );
//     pantryNavButton.click();
//     let addFoodItemButton = element(by.id('addFoodItemButton'));
//     addFoodItemButton.click();
//     let selectingredient = element(by.id('selectingredient'));
//     selectingredient.click();
//     let selectOption = element(
//       by.xpath("//*[@id='selectingredient']/option[1]")
//     );
//     selectOption.click();
//     let addinput = element(by.id('addinput'));
//     addinput.sendKeys('15');
//     let addPantryButton = element(by.id('addPantryButton'));
//     addPantryButton.click();
//   });

//   it('should delete a pantry item', () => {
//     browser.get(page);
//     let usernameInput = element(by.id('usernameText'));
//     usernameInput.sendKeys('aj');
//     let passwordInput = element(by.id('passwordText'));
//     passwordInput.sendKeys('12');
//     let loginButton = element(by.id('loginButton'));
//     loginButton.click();
//     let pantryNavButton = element(
//       by.xpath('/html/body/app-root/div[1]/app-navbar/nav/button[4]')
//     );
//     pantryNavButton.click();
//     let selectedRow = element(by.xpath("//*[@id='RecipeSeletions']/tr[1]"));
//     selectedRow.click();
//     let removeFoodButton = element(by.id('removeFoodButton'));
//   });

//   it('should update a pantry item', () => {
//     browser.get(page);
//     let usernameInput = element(by.id('usernameText'));
//     usernameInput.sendKeys('aj');
//     let passwordInput = element(by.id('passwordText'));
//     passwordInput.sendKeys('12');
//     let loginButton = element(by.id('loginButton'));
//     loginButton.click();
//     let pantryNavButton = element(
//       by.xpath('/html/body/app-root/div[1]/app-navbar/nav/button[4]')
//     );
//     pantryNavButton.click();
//     let selectedRow = element(by.xpath("//*[@id='RecipeSeletions']/tr[1]"));
//     selectedRow.click();
//     let addinput = element(by.id('addFoodItemButton'));
//     addinput.sendKeys('100');
//     let updateFoodItem = element(by.id('updateFoodButton'));
//     updateFoodItem.click();
//   });
// });

// RECIPE COMPONENT
describe('SLG Recipe Component', () => {
  let page1 = 'http://localhost:4200/recipe';
  browser.get(page1);

  


  it('should reach the website correctly', () => {
    expect(browser.getCurrentUrl()).toBe(page1);
  });

  it('should search for a recipe by tag', () => {
    browser.get(page1);
    let recipeButton = element(
      by.xpath('/html/body/app-root/div[1]/app-navbar/nav/button[3]')
    );
    recipeButton.click();
    let searchDesc = element(by.id('searchD'));
    searchDesc.click();
    browser.sleep(500);
    let mySearchD = element(by.id('recipecuisine'));
    mySearchD.sendKeys('spicy');
    let dButton = element(by.id('searchCuisine'));
    dButton.click();
  });

  it('should select a recipe', () => {
    browser.sleep(500);
    let addButton = element(by.id('add'));
    addButton.click();
  });
  it('should show and close recipe ingredients', () => {
    let show = element(by.id('show'));
    show.click();
    let x = element(by.id('close'));
    x.click();
  });

  it('should search for a recipe by name', () => {
    browser.sleep(500);
    let searchName = element(by.id('searchN'));
    searchName.click();
    browser.sleep(500);
    let mySearchN = element(by.id('recipename'));
    mySearchN.sendKeys('Chicken Parmesan');
    let nButton = element(by.id('searchName'));
    nButton.click();
  });

  it('should send recipes to shopping list', () => {
    let send = element(by.id('send'));
    send.click();
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/shoppinglist');
  });
  
});




