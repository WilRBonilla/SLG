describe('Admin Component', () => {
    page = 'http://localhost:4200/admin';
    browser.get(page);
    it('should reach the admin page', () => {
        expect(browser.getTitle()).toBe("Alfred's List");
    });

    it('should add an ingredient called Unicorn', () => {
        nameValue = element(by.id("nameValue"));
        nameValue.sendKeys("Unicorn");
        unitsDropdown = element(by.id("unitsValue"));

        element(by.tagName("select#unitsValue")).click();

        browser.sleep(1000)

        element(by.css("#unitsValue [value='ounces']")).click();

        addedAlert = element(by.id("addIngredient"));
        addedAlert.click()
       
    });

    it('should delete the new ingredient called Unicorn', () => {
        deleteDropdown = element(by.id("ingredients"));
        element(by.tagName("select#ingredients")).click();

        browser.sleep(1000)

        element(by.css("#ingredients [value='42']")).click();

        deleteButton = element(by.id("deleteIngredient"));
    });



})
