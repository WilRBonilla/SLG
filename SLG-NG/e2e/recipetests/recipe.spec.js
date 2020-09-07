
describe('SLG Recipe Component', () => {
    page = 'http://localhost:4200/recipe';
    browser.get(page);
    it('should reach the website correctly', () =>{
    expect(browser.getTitle()).toBe("Shopping List Generator");
});

    it('should search for a recipe by tag', () => {
        searchDesc= element(by.id("searchD"));
        searchDesc.click();
        mySearchD = element(by.id("recipecuisine"));
        mySearchD.sendKeys("spicy");
        dButton = element(by.id("searchCuisine"));
        dButton.click();
    });

    it('should select a recipe', () =>{
        addButton= element(by.id("add"));
        addButton.click();
    });
    it('should show and close recipe ingredients', () =>{
        show= element(by.id("show"));
        show.click();
        x= element(by.id("close"));
        x.click();
    });

    it('should search for a recipe by name', () => {
        searchDesc= element(by.id("searchN"));
        searchDesc.click();
        mySearchN = element(by.id("recipename"));
        mySearchN.sendKeys("Chicken Parmesan");
        nButton = element(by.id("searchName"));
        nButton.click();
    });
    
    it('should send recipes to shopping list', () => {
        send= element(by.id("send"));
        send.click();
        expect(browser.getCurrentUrl()).toBe("http://localhost:4200/shoppinglist");
    });    
});