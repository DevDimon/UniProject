// База данных товаров
const products = [
    // Страница 1
    {
        id: 1,
        name: "Irish Stout",
        description: "4,6%, Светлое, Лагер",
        price: 68,
        type: ["светлое", "нефильтрованное"],
        strength: "4% - 6%",
        country: "россия",
        image: "./src/bottle1.png",
        badge: "discount"
    },
    {
        id: 2,
        name: "Guinness",
        description: "4,2%, Тёмное, Стаут",
        price: 85,
        type: ["тёмное", "нефильтрованное"],
        strength: "4% - 6%",
        country: "ирландия",
        image: "./src/bottle2.png",
        badge: "new"
    },
    {
        id: 3,
        name: "Porter",
        description: "5,5%, Тёмное, Портер",
        price: 75,
        type: ["тёмное", "нефильтрованное"],
        strength: "4% - 6%",
        country: "россия",
        image: "./src/bottle3.png",
        badge: "discount"
    },
    {
        id: 4,
        name: "Light Lager",
        description: "4,8%, Светлое, Лагер",
        price: 65,
        type: ["светлое", "нефильтрованное"],
        strength: "4% - 6%",
        country: "россия",
        image: "./src/bottle1.png",
        badge: "discount"
    },
    {
        id: 5,
        name: "Dark Ale",
        description: "5,0%, Тёмное, Эль",
        price: 78,
        type: ["тёмное", "нефильтрованное"],
        strength: "4% - 6%",
        country: "россия",
        image: "./src/bottle2.png",
        badge: "new"
    },
    {
        id: 6,
        name: "Amber Beer",
        description: "5,2%, Тёмное, Эль",
        price: 72,
        type: ["тёмное", "нефильтрованное"],
        strength: "4% - 6%",
        country: "россия",
        image: "./src/bottle3.png",
        badge: "discount"
    },
    {
        id: 7,
        name: "Pale Ale",
        description: "4,9%, Светлое, Эль",
        price: 70,
        type: ["светлое", "нефильтрованное"],
        strength: "4% - 6%",
        country: "россия",
        image: "./src/bottle1.png",
        badge: "discount"
    },
    {
        id: 8,
        name: "Black IPA",
        description: "6,0%, Тёмное, IPA",
        price: 88,
        type: ["тёмное", "крафтовое"],
        strength: "6% - 8%",
        country: "россия",
        image: "./src/bottle2.png",
        badge: "new"
    },
    {
        id: 9,
        name: "Stout Imperial",
        description: "8,5%, Тёмное, Стаут",
        price: 120,
        type: ["тёмное", "крафтовое"],
        strength: "более 8%",
        country: "россия",
        image: "./src/bottle3.png",
        badge: "discount"
    },
    {
        id: 10,
        name: "Wheat Beer",
        description: "5,0%, Светлое, Пшеничное",
        price: 68,
        type: ["светлое", "нефильтрованное"],
        strength: "4% - 6%",
        country: "россия",
        image: "./src/bottle1.png",
        badge: "discount"
    },
    {
        id: 11,
        name: "Double Bock",
        description: "7,5%, Тёмное, Бок",
        price: 95,
        type: ["тёмное", "нефильтрованное"],
        strength: "6% - 8%",
        country: "германия",
        image: "./src/bottle2.png",
        badge: "new"
    },
    {
        id: 12,
        name: "Brown Ale",
        description: "5,3%, Тёмное, Эль",
        price: 76,
        type: ["тёмное", "нефильтрованное"],
        strength: "4% - 6%",
        country: "бельгия",
        image: "./src/bottle3.png",
        badge: "discount"
    },

    // Страница 2
    {
        id: 13,
        name: "Pilsner",
        description: "4,9%, Светлое, Пильзнер",
        price: 69,
        type: ["светлое", "нефильтрованное"],
        strength: "4% - 6%",
        country: "чехия",
        image: "./src/bottle1.png",
        badge: "discount"
    },
    {
        id: 14,
        name: "Milk Stout",
        description: "5,0%, Тёмное, Стаут",
        price: 82,
        type: ["тёмное", "нефильтрованное"],
        strength: "4% - 6%",
        country: "россия",
        image: "./src/bottle2.png",
        badge: "new"
    },
    {
        id: 15,
        name: "Irish Red",
        description: "4,5%, Тёмное, Эль",
        price: 74,
        type: ["тёмное", "нефильтрованное"],
        strength: "4% - 6%",
        country: "ирландия",
        image: "./src/bottle3.png",
        badge: "discount"
    },
    {
        id: 16,
        name: "Helles",
        description: "4,7%, Светлое, Лагер",
        price: 67,
        type: ["светлое", "нефильтрованное"],
        strength: "4% - 6%",
        country: "германия",
        image: "./src/bottle1.png",
        badge: "discount"
    },
    {
        id: 17,
        name: "Oatmeal Stout",
        description: "5,2%, Тёмное, Стаут",
        price: 79,
        type: ["тёмное", "нефильтрованное"],
        strength: "4% - 6%",
        country: "россия",
        image: "./src/bottle2.png",
        badge: "new"
    },
    {
        id: 18,
        name: "Scotch Ale",
        description: "6,8%, Тёмное, Эль",
        price: 92,
        type: ["тёмное", "нефильтрованное"],
        strength: "6% - 8%",
        country: "шотландия",
        image: "./src/bottle3.png",
        badge: "discount"
    },
    {
        id: 19,
        name: "Kölsch",
        description: "4,8%, Светлое, Эль",
        price: 71,
        type: ["светлое", "нефильтрованное"],
        strength: "4% - 6%",
        country: "германия",
        image: "./src/bottle1.png",
        badge: "discount"
    },
    {
        id: 20,
        name: "Russian Imperial Stout",
        description: "9,0%, Тёмное, Стаут",
        price: 125,
        type: ["тёмное", "крафтовое"],
        strength: "более 8%",
        country: "россия",
        image: "./src/bottle2.png",
        badge: "new"
    },
    {
        id: 21,
        name: "Dunkel",
        description: "5,3%, Тёмное, Лагер",
        price: 77,
        type: ["тёмное", "нефильтрованное"],
        strength: "4% - 6%",
        country: "германия",
        image: "./src/bottle3.png",
        badge: "discount"
    },
    {
        id: 22,
        name: "Blonde Ale",
        description: "5,0%, Светлое, Эль",
        price: 73,
        type: ["светлое", "нефильтрованное"],
        strength: "4% - 6%",
        country: "бельгия",
        image: "./src/bottle1.png",
        badge: "discount"
    },
    {
        id: 23,
        name: "Chocolate Stout",
        description: "5,5%, Тёмное, Стаут",
        price: 84,
        type: ["тёмное", "крафтовое"],
        strength: "4% - 6%",
        country: "россия",
        image: "./src/bottle2.png",
        badge: "new"
    },
    {
        id: 24,
        name: "Altbier",
        description: "4,7%, Тёмное, Эль",
        price: 76,
        type: ["тёмное", "нефильтрованное"],
        strength: "4% - 6%",
        country: "германия",
        image: "./src/bottle3.png",
        badge: "discount"
    },

    // Страница 3
    {
        id: 25,
        name: "Weizen",
        description: "5,4%, Светлое, Пшеничное",
        price: 72,
        type: ["светлое", "нефильтрованное"],
        strength: "4% - 6%",
        country: "германия",
        image: "./src/bottle1.png",
        badge: "discount"
    },
    {
        id: 26,
        name: "Baltic Porter",
        description: "7,0%, Тёмное, Портер",
        price: 98,
        type: ["тёмное", "нефильтрованное"],
        strength: "6% - 8%",
        country: "россия",
        image: "./src/bottle2.png",
        badge: "new"
    },
    {
        id: 27,
        name: "Saison",
        description: "6,5%, Светлое, Фермерское",
        price: 89,
        type: ["светлое", "крафтовое"],
        strength: "6% - 8%",
        country: "бельгия",
        image: "./src/bottle3.png",
        badge: "discount"
    },
    {
        id: 28,
        name: "Bock",
        description: "6,3%, Тёмное, Бок",
        price: 87,
        type: ["тёмное", "нефильтрованное"],
        strength: "6% - 8%",
        country: "германия",
        image: "./src/bottle1.png",
        badge: "discount"
    },
    {
        id: 29,
        name: "Gose",
        description: "4,5%, Светлое, Кислое",
        price: 79,
        type: ["светлое", "крафтовое"],
        strength: "4% - 6%",
        country: "германия",
        image: "./src/bottle2.png",
        badge: "new"
    },
    {
        id: 30,
        name: "Barley Wine",
        description: "10,0%, Тёмное, Крепкое",
        price: 145,
        type: ["тёмное", "крафтовое"],
        strength: "более 8%",
        country: "россия",
        image: "./src/bottle3.png",
        badge: "discount"
    },
    {
        id: 31,
        name: "Rauchbier",
        description: "5,1%, Тёмное, Копчёное",
        price: 81,
        type: ["тёмное", "крафтовое"],
        strength: "4% - 6%",
        country: "германия",
        image: "./src/bottle1.png",
        badge: "discount"
    },
    {
        id: 32,
        name: "Tripel",
        description: "8,5%, Светлое, Эль",
        price: 112,
        type: ["светлое", "крафтовое"],
        strength: "более 8%",
        country: "бельгия",
        image: "./src/bottle2.png",
        badge: "new"
    },
    {
        id: 33,
        name: "Doppelbock",
        description: "7,2%, Тёмное, Бок",
        price: 96,
        type: ["тёмное", "нефильтрованное"],
        strength: "6% - 8%",
        country: "германия",
        image: "./src/bottle3.png",
        badge: "discount"
    },
    {
        id: 34,
        name: "American Pale Ale",
        description: "5,5%, Светлое, Эль",
        price: 75,
        type: ["светлое", "крафтовое"],
        strength: "4% - 6%",
        country: "сша",
        image: "./src/bottle1.png",
        badge: "discount"
    },
    {
        id: 35,
        name: "Quadrupel",
        description: "10,0%, Тёмное, Эль",
        price: 138,
        type: ["тёмное", "крафтовое"],
        strength: "более 8%",
        country: "бельгия",
        image: "./src/bottle2.png",
        badge: "new"
    },
    {
        id: 36,
        name: "Schwarzbier",
        description: "4,8%, Тёмное, Лагер",
        price: 74,
        type: ["тёмное", "нефильтрованное"],
        strength: "4% - 6%",
        country: "германия",
        image: "./src/bottle3.png",
        badge: "discount"
    },
];

// Корзина
let cart = [];
let currentPage = 1;
const productsPerPage = 12;

document.addEventListener('DOMContentLoaded', function () {
    // Элементы DOM
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const productsContainer = document.getElementById('productsContainer');
    const cartCount = document.querySelector('.cart-count');
    const notification = document.getElementById('notification');
    const filterTitles = document.querySelectorAll('.filter-title');
    const applyFiltersBtn = document.getElementById('applyFilters');
    const resetFiltersBtn = document.getElementById('resetFilters');
    const prevPageBtn = document.getElementById('prevPage');
    const nextPageBtn = document.getElementById('nextPage');
    const pageInfo = document.getElementById('pageInfo');

    // Элементы header
    const headerSearchIcon = document.getElementById('headerSearchIcon');
    const headerCartIcon = document.getElementById('headerCartIcon');
    const footerCartLink = document.getElementById('footerCartLink');

    // Элементы модальных окон
    const cartModal = document.getElementById('cartModal');
    const modalCloses = document.querySelectorAll('.modal-close');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    let currentFilters = {
        search: '',
        type: [],
        strength: [],
        country: [],
        priceMin: 0,
        priceMax: 1000
    };

    // Инициализация - отображаем первую страницу
    displayProducts(getCurrentPageProducts());
    updatePagination();
    updateCartCount();

    // Обработчики иконок в шапке
    headerSearchIcon.addEventListener('click', function () {
        // Показываем поисковое поле в левой части
        searchInput.focus();
        searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    headerCartIcon.addEventListener('click', function () {
        updateCartModal();
        cartModal.classList.add('active');
    });

    // Обработчик ссылки на корзину в футере
    footerCartLink.addEventListener('click', function (e) {
        e.preventDefault();
        updateCartModal();
        cartModal.classList.add('active');
    });

    // Закрытие модальных окон
    modalCloses.forEach(closeBtn => {
        closeBtn.addEventListener('click', function () {
            cartModal.classList.remove('active');
        });
    });

    // Закрытие по клику вне модального окна
    cartModal.addEventListener('click', function (e) {
        if (e.target === cartModal) {
            cartModal.classList.remove('active');
        }
    });

    // Пагинация
    prevPageBtn.addEventListener('click', function () {
        if (currentPage > 1) {
            currentPage--;
            displayProducts(getCurrentPageProducts());
            updatePagination();
            // Прокрутка к верху страницы
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    nextPageBtn.addEventListener('click', function () {
        const totalPages = Math.ceil(filterProducts().length / productsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            displayProducts(getCurrentPageProducts());
            updatePagination();
            // Прокрутка к верху страницы
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    // Поиск товаров в основном каталоге
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase().trim();
        currentFilters.search = searchTerm;
        currentPage = 1; // Сброс на первую страницу при поиске

        if (searchTerm.length > 0) {
            const filteredProducts = products.filter(product =>
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm)
            );

            displaySearchResults(filteredProducts);
            searchResults.style.display = 'block';
        } else {
            searchResults.style.display = 'none';
            displayProducts(getCurrentPageProducts());
            updatePagination();
        }
    });

    // Обработчик выбора из результатов поиска
    searchResults.addEventListener('click', function (e) {
        if (e.target.classList.contains('search-result-item')) {
            searchInput.value = e.target.textContent;
            currentFilters.search = e.target.textContent.toLowerCase();
            searchResults.style.display = 'none';
            currentPage = 1;
            displayProducts(getCurrentPageProducts());
            updatePagination();
        }
    });

    // Скрываем результаты поиска при клике вне
    document.addEventListener('click', function (e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });

    // Применение фильтров
    applyFiltersBtn.addEventListener('click', function () {
        updateFilters();
        currentPage = 1;
        displayProducts(getCurrentPageProducts());
        updatePagination();
    });

    // Сброс фильтров
    resetFiltersBtn.addEventListener('click', function () {
        resetFilters();
        currentPage = 1;
        displayProducts(getCurrentPageProducts());
        updatePagination();
    });

    // Обработчики фильтров
    filterTitles.forEach(title => {
        title.addEventListener('click', function () {
            const options = this.nextElementSibling;
            const icon = this.querySelector('i');

            if (options.style.display === 'none' || !options.style.display) {
                options.style.display = 'flex';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                options.style.display = 'none';
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });

    // Функции
    function getCurrentPageProducts() {
        const filtered = filterProducts();
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        return filtered.slice(startIndex, endIndex);
    }

    function updatePagination() {
        const filteredProducts = filterProducts();
        const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

        // Обновляем информацию о странице
        pageInfo.textContent = `Страница ${currentPage} из ${totalPages}`;

        // Обновляем состояние кнопок
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;

        if (prevPageBtn.disabled) {
            prevPageBtn.classList.add('disabled');
        } else {
            prevPageBtn.classList.remove('disabled');
        }

        if (nextPageBtn.disabled) {
            nextPageBtn.classList.add('disabled');
        } else {
            nextPageBtn.classList.remove('disabled');
        }

        // Скрываем пагинацию если нет товаров или только одна страница
        document.getElementById('pagination').style.display =
            filteredProducts.length <= productsPerPage ? 'none' : 'flex';
    }

    function displayProducts(productsToShow) {
        productsContainer.innerHTML = '';

        if (productsToShow.length === 0) {
            productsContainer.innerHTML = '<div class="no-products">Товары не найдены</div>';
            return;
        }

        // Отображаем товары с баннером после второго ряда
        productsToShow.forEach((product, index) => {
            // Добавляем баннер после второго ряда (после 6 товаров) на первой странице
            if (currentPage === 1 && index === 6) {
                const bannerElement = createBannerElement();
                productsContainer.appendChild(bannerElement);
            }

            const productElement = createProductElement(product);
            productElement.style.animationDelay = `${index * 0.05}s`; // Анимация с задержкой
            productsContainer.appendChild(productElement);
        });
    }

    function createBannerElement() {
        const bannerDiv = document.createElement('div');
        bannerDiv.className = 'discount-banner';
        bannerDiv.innerHTML = `
            <h2>Скидки до 50%</h2>
            <p>На весь лимонад и крафтовое пиво при покупке от 5 бутылок</p>
        `;
        return bannerDiv;
    }

    function createProductElement(product) {
        const div = document.createElement('div');
        div.className = 'catalog-cart';
        div.innerHTML = `
            <div class="catalog-cart-img">
                ${product.badge === 'discount' ? '<div class="discount-badge">-20%</div>' : ''}
                ${product.badge === 'new' ? '<div class="new-badge">Новинка</div>' : ''}
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div>${product.name}</div>
            <div>${product.description}</div>
            <div>${product.price} ₽</div>
            <button data-product-id="${product.id}">Купить</button>
        `;

        // Обработчик кнопки "Купить"
        const buyBtn = div.querySelector('button');
        buyBtn.addEventListener('click', function () {
            const productId = parseInt(this.getAttribute('data-product-id'));
            addToCart(productId);

            const originalText = this.textContent;
            this.textContent = 'Добавлено!';
            this.style.background = '#27ae60';
            this.style.borderColor = '#27ae60';

            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '';
                this.style.borderColor = '';
            }, 2000);
        });

        return div;
    }

    function displaySearchResults(products) {
        searchResults.innerHTML = '';

        if (products.length === 0) {
            searchResults.innerHTML = '<div class="search-result-item">Ничего не найдено</div>';
            return;
        }

        products.forEach(product => {
            const div = document.createElement('div');
            div.className = 'search-result-item';
            div.textContent = product.name;
            searchResults.appendChild(div);
        });
    }

    function updateFilters() {
        currentFilters.type = Array.from(document.querySelectorAll('input[data-filter="type"]:checked'))
            .map(input => input.value);
        currentFilters.strength = Array.from(document.querySelectorAll('input[data-filter="strength"]:checked'))
            .map(input => input.value);
        currentFilters.country = Array.from(document.querySelectorAll('input[data-filter="country"]:checked'))
            .map(input => input.value);
        currentFilters.priceMin = parseInt(document.getElementById('priceMin').value) || 0;
        currentFilters.priceMax = parseInt(document.getElementById('priceMax').value) || 1000;
    }

    function filterProducts() {
        return products.filter(product => {
            // Поиск
            if (currentFilters.search &&
                !product.name.toLowerCase().includes(currentFilters.search) &&
                !product.description.toLowerCase().includes(currentFilters.search)) {
                return false;
            }

            // Тип
            if (currentFilters.type.length > 0 &&
                !currentFilters.type.some(type => product.type.includes(type))) {
                return false;
            }

            // Крепость
            if (currentFilters.strength.length > 0 &&
                !currentFilters.strength.includes(product.strength)) {
                return false;
            }

            // Страна
            if (currentFilters.country.length > 0 &&
                !currentFilters.country.includes(product.country)) {
                return false;
            }

            // Цена
            if (product.price < currentFilters.priceMin || product.price > currentFilters.priceMax) {
                return false;
            }

            return true;
        });
    }

    function resetFilters() {
        // Сброс чекбоксов
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
        });

        // Включение базовых фильтров
        document.getElementById('type1').checked = true;
        document.getElementById('strength2').checked = true;
        document.getElementById('country1').checked = true;

        // Сброс цены
        document.getElementById('priceMin').value = 50;
        document.getElementById('priceMax').value = 1000;

        // Сброс поиска
        searchInput.value = '';
        currentFilters.search = '';

        // Обновление фильтров
        updateFilters();
    }

    // Функции корзины
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }

        updateCartCount();
        showNotification('Товар добавлен в корзину!');
    }

    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCartCount();
        updateCartModal();
    }

    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }

    function updateCartModal() {
        cartItems.innerHTML = '';

        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <div>Корзина пуста</div>
                </div>
            `;
            cartTotal.innerHTML = '';
            return;
        }

        let total = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price} ₽ × ${item.quantity} = ${itemTotal} ₽</div>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <span class="cart-item-quantity">${item.quantity}</span>
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    <button class="cart-remove" data-id="${item.id}">&times;</button>
                </div>
            `;

            cartItems.appendChild(cartItem);
        });

        // Итоговая сумма
        cartTotal.innerHTML = `
            <div class="total-row">
                <span>Товары:</span>
                <span>${total} ₽</span>
            </div>
            <div class="total-row">
                <span>Доставка:</span>
                <span>200 ₽</span>
            </div>
            <div class="total-row total-final">
                <span>Итого:</span>
                <span>${total + 200} ₽</span>
            </div>
            <div class="cart-actions">
                <button class="cart-btn cart-continue">Продолжить покупки</button>
                <button class="cart-btn cart-checkout">Оформить заказ</button>
            </div>
        `;

        // Обработчики для кнопок в корзине
        document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
            btn.addEventListener('click', function () {
                const productId = parseInt(this.getAttribute('data-id'));
                const item = cart.find(item => item.id === productId);
                if (item) {
                    item.quantity += 1;
                    updateCartCount();
                    updateCartModal();
                }
            });
        });

        document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
            btn.addEventListener('click', function () {
                const productId = parseInt(this.getAttribute('data-id'));
                const item = cart.find(item => item.id === productId);
                if (item && item.quantity > 1) {
                    item.quantity -= 1;
                    updateCartCount();
                    updateCartModal();
                }
            });
        });

        document.querySelectorAll('.cart-remove').forEach(btn => {
            btn.addEventListener('click', function () {
                const productId = parseInt(this.getAttribute('data-id'));
                removeFromCart(productId);
            });
        });

        document.querySelector('.cart-continue').addEventListener('click', function () {
            cartModal.classList.remove('active');
        });

        document.querySelector('.cart-checkout').addEventListener('click', function () {
            showNotification('Заказ оформлен! Спасибо за покупку!');
            cart = [];
            updateCartCount();
            updateCartModal();
            setTimeout(() => {
                cartModal.classList.remove('active');
            }, 2000);
        });
    }

    function showNotification(message) {
        notification.textContent = message;
        notification.classList.add('show');

        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    // Инициализация - скрываем все фильтры при загрузке
    document.querySelectorAll('.filter-options').forEach(options => {
        options.style.display = 'none';
    });
});