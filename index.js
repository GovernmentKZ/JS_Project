function render(){
    const productsStore = localStorageUtils.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();
}

spinnerPage.render();

let CATALOG = [];

fetch('server/catalog.json').then(res => res.json()).then(body => {
    CATALOG = body;
    setTimeout( () => {
        spinnerPage.handleClear();
        render();
    },500)
}).catch(error => {
    spinnerPage.handleClear();
    errorPage.render();
});