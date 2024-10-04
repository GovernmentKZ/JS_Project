class Products {
  constructor() {
    this.classNameActive = 'products-element__button__active';
    this.labelAdd = 'Добавить в корзину';
    this.labelRemove = 'Удалить из корзины';
  }

  handleSetLocationStorage(element, id){
    const {pushProduct, products} = localStorageUtils.putProduct(id);

    if (pushProduct) {
      element.classList.add(this.classNameActive);
      element.innerHTML = this.labelRemove;
    } else {
      element.classList.remove(this.classNameActive);
      element.innerHTML = this.labelAdd;
    }
    headerPage.render(products.length);
  }

  render() {
    const productsStore = localStorageUtils.getProducts();

    let htmlCatalog = '';
    CATALOG.forEach(({ id, name, price, img }) => {
      let activeClass = '';
      let activeText = '';

      if (!productsStore.includes(id)) {
        activeText = this.labelAdd;
      } else {
        activeClass = ' ' + this.classNameActive;
        activeText = this.labelRemove;
      }

      htmlCatalog += `
    <li class="products-element"> 
      <span class="products-element__name">${name}</span>
      <img class="products-element__img" src="${img}"/>
      <span class="products-element__price">💲${price.toLocaleString()} KZT</span>
      <button class="products-element__button${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}');">
${activeText}
</button>
    </li>
  `;
    });

    const html = `
    <ul class="products-container">
    ${htmlCatalog}
    </ul>
    `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
