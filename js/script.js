const menuData = {
    combos: {
        title: 'Combos',
        items: [
            { name: 'Combo Beefeater', description: '4 gelo + red bull sabores', price: '270,00', image: 'img/beefeter.jpg' },
            { name: 'Combo Beefeater Pink', description: '4 gelo + red bull sabores', price: '300,00', image: 'img/beefeter sabor.jpg' },
            { name: 'Combo Tanqueray', description: '4 gelo + red bull sabores', price: '300,00', image: 'img/tanquery.jpg' },
            { name: 'Combo Tanqueray Royale', description: '4 gelo + red bull sabores', price: '340,00' },
            { name: 'Combo Tanqueray Bossa Nova', description: '4 gelo + red bull sabores', price: '340,00' },
            { name: 'Combo Absolut', description: '4 gelo + red bull sabores', price: '230,00', image: 'img/absolut.jpg' },
            { name: 'Combo Ciroc Blue', description: '4 gelo + red bull sabores', price: '340,00', image: 'img/ciroc.jpg' },
            { name: 'Combo Ciroc Red Berry', description: '4 gelo + red bull sabores', price: '380,00', image: 'img/ciroc_sabor.jpg' },
            { name: 'Combo Grey Goose', description: '4 gelo + red bull sabores', price: '300,00', image: 'img/grey_goose_azul.jpg' },
            { name: 'Combo Black Label', description: '4 gelo + red bull', price: '340,00', image: 'img/black.jpg' },
            { name: 'Combo Double Black', description: '4 gelo + red bull', price: '380,00' },
            { name: 'Combo Buchannas', description: '4 gelo + red bull', price: '360,00', image: 'img/buchanas.jpg' },
            { name: 'Combo Chivas', description: '4 gelo + red bull', price: '300,00', image: 'img/chivas.jpg' },
            { name: 'Combo Gold Label', description: '4 gelo + red bull', price: '500,00', image: 'img/goldlabel.jpg' },
            { name: 'Combo Jack Daniels', description: '4 gelo + red bull', price: '300,00', image: 'img/jack.jpg' },
            { name: 'Combo Jack Honey', description: '4 gelo + red bull', price: '330,00' },
            { name: 'Combo Jack Maçã Verde', description: '4 gelo + red bull', price: '330,00' },
            { name: 'Combo Jack BlackBerry', description: '4 gelo + red bull', price: '370,00' },
            { name: 'Combo Old Parr', description: '4 gelo + red bull', price: '300,00', image: 'img/oldpar.jpg' },
            { name: 'Combo Red Label', description: '4 gelo + red bull', price: '250,00', image: 'img/red label.jpg' },
            { name: 'Combo Royal Salute', description: 'Garrafa 1.100', price: '1.200,00' },
        ]
    },
    porcoes: {
        title: 'Porções',
        items: [
            { name: 'Batata Frita', description: '500g', price: '30,00' },
            { name: 'Batata Frita C Calabresa', description: '500g', price: '40,00' },
            { name: 'Batata Frita C/ Cheddar e Bacon', description: '500g', price: '45,00', image: 'img/batata.jpg', featured: 'Sugestão da Casa' },
            { name: 'Calabresa', description: '500g', price: '40,00', image: 'img/calabresa.jpg' },
            { name: 'Cebola Empanada', description: '500g', price: '30,00', image: 'img/cebolav2.jpg' },
            { name: 'Porção de Coxinha', description: '', price: '35,00' },
        ]
    },
    drinks: {
        title: 'Drinks',
        items: [
            { name: 'Caipirinha', description: 'Cachaça com Morango, Kiwi, Maracujá, Limão ou Frutas Vermelhas', price: '25,00', image: 'img/caipirinha_morango.jpg' },
            { name: 'Caipiroska', description: 'Vodka com Morango, Kiwi, Maracujá, Limão ou Frutas Vermelhas', price: '30,00', image: 'img/caipirinha_mara.jpg' },
            { name: 'Sakeirinha', description: 'Vodka com Morango, Kiwi, Maracujá, Limão ou Frutas Vermelhas', price: '30,00', image: 'img/caipirinha_limao.jpg' },
            { name: 'Whiskey Sour', description: 'Bourbon, limão-siciliano, xarope de açúcar e Angostura.', price: '40,00', image: 'img/whiskey_sour.jpg' },
            { name: 'Clericot', description: 'Espumante, Licor 43, morango, kiwi e água com gás.', price: '40,00', image: 'img/cleri.jpg' },
            { name: 'Aperol Spritz', description: 'Aperol, espumante, água com gás e laranja.', price: '40,00' },
            { name: 'Negroni', description: 'Gin, Campari, vermute rosso e suco de laranja.', price: '45,00'},
            { name: 'Chá da Noite', description: 'Gin, Monin de morango, suco de limão, suco de laranja, tônica e chá de frutas vermelhas.', price: '55,00' },
            { name: 'Lagoa Azul', description: 'Vodka, Curaçao Blue, soda de limão e suco de limão.', price: '40,00'},
            { name: 'Lillet Wild Berry', description: 'Lillet, Monin de frutas vermelhas, água tônica, frutas e canela em pau.', price: '55,00'},
            { name: 'Moscow Mule', description: 'Vodka, suco de limão, gengibre e água com gás.', price: '40,00'},
            { name: 'Sem Álcool', description: 'Monin, Schweppes e fruta da preferência.', price: '35,00'},
        ]
    },
    clubedogin: {
        title: 'Clube do Gin',
        items: [
            { name: 'Gin Ballena', description: '', price: '45,00', image: 'img/balena.jpg', featured: 'Exclusivo' },
            { name: 'Gin Clássico', description: 'Gin, Tônica', price: '40,00' },
            { name: 'Gin Mulle', description: 'Gin, limão siciliano, schweppes citrus e espuma de gengibre.', price: '45,00' },
            { name: 'Gin Rose', description: 'Gin, xarope de rosas francesas e tônica', price: '45,00', image: 'img/gin.jpg', featured: 'Sugestão da Casa' },
            { name: 'Gin Tropical', description: 'Gin, mix de frutas e red bull tropical', price: '45,00', image: 'img/gintropical.webp' },
        ]
    },
    doses: {
        title: 'Doses',
        collapsible: true,
        items: [
            { name: 'Dose Absolut', description: '1 Red bull + 1 gelo sabores', price: '35,00' },
            { name: 'Dose Beefeater', description: '1 Red bull + 1 gelo sabores', price: '40,00' },
            { name: 'Dose Beefeater Pink', description: '1 Red bull + 1 gelo sabores', price: '45,00' },
            { name: 'Dose Black Label', description: '1 Red bull + 1 gelo sabores', price: '45,00' },
            { name: 'Dose Double Black', description: '1 Red bull + 1 gelo sabores', price: '60,00' },
            { name: 'Dose Buchannas', description: '1 Red bull + 1 gelo sabores', price: '45,00' },
            { name: 'Dose Chivas', description: '1 Red bull + 1 gelo sabores', price: '40,00' },
            { name: 'Dose Ciroc Blue', description: '1 Red bull + 1 gelo sabores', price: '45,00' },
            { name: 'Dose Ciroc Red Berry', description: '1 Red bull + 1 gelo sabores', price: '60,00' },
            { name: 'Dose Gold Label', description: '1 Red bull + 1 gelo sabores', price: '90,00' },
            { name: 'Dose Grey Goose', description: '1 Red bull + 1 gelo sabores', price: '45,00' },
            { name: 'Dose Jack Daniels', description: '1 Red bull + 1 gelo sabores', price: '40,00' },
            { name: 'Dose Jack Honey', description: '1 Red bull + 1 gelo sabores', price: '45,00' },
            { name: 'Dose Jack Maçã Verde', description: '1 Red bull + 1 gelo sabores', price: '45,00' },
            { name: 'Dose Jack BlackBerry', description: '1 Red bull + 1 gelo sabores', price: '60,00' },
            { name: 'Dose Old Parr', description: '1 Red bull + 1 gelo sabores', price: '40,00' },
            { name: 'Dose Red Label', description: '1 Red bull + 1 gelo sabores', price: '35,00' },
            { name: 'Dose Tanqueray', description: '1 Red bull + 1 gelo sabores', price: '40,00' },
            { name: 'Dose Tanqueray Royale', description: '1 Red bull + 1 gelo sabores', price: '50,00' },
            { name: 'Dose Tanqueray Bossa Nova', description: '1 Red bull + 1 gelo sabores', price: '50,00' },
            { name: 'Gelo Tropical', description: '', price: '6,00' },
            { name: 'Gelo Coco', description: '', price: '4,00' },
            { name: 'Gelo Maracujá', description: '', price: '4,00' },
            { name: 'Gelo Melancia', description: '', price: '4,00' },
            { name: 'Dose P Ballena', description: '', price: '32,00' },
            { name: 'Dose P Licor 43', description: '', price: '25,00' },
            { name: 'Dose P Licor 43 Chocolate', description: '', price: '30,00' },
            { name: 'Dose P Tequila Ouro', description: '', price: '22,00' },
        ]
    },
    cervejas: {
        title: 'Cervejas',
        items: [
            { name: 'Balde Heineken Long neck (5 Unidades)', price: '55,00', image: 'img/heineken_2.jpg' },
            { name: 'Balde Budweiser Long neck (5 Unidades)', price: '45,00', image: 'img/bud.jpg' },
            { name: 'Balde Corona Long neck (5 Unidades)', price: '65,00', image: 'img/corona.jpg' },
        ]
    },
    longnecks: {
        title: 'Long Necks',
        items: [
            { name: 'Budweiser Long Neck', price: '10,00' },
            { name: 'Corona Long Neck', price: '14,00' },
            { name: 'Heineken Long Neck Zero', price: '12,00' },
            { name: 'Skol Beats Sense', price: '12,00' },
            { name: 'Ice', price: '12,00' },
        ]
    },
    roshs: {
        title: 'Sessão',
        collapsible: true,
        items: [
            { name: 'Aluguel', price: '30,00' },
            { name: 'Aluguel Love 66', price: '40,00' },
            { name: 'Troca Love 66', price: '35,00' },
            { name: 'Essências Ziggy / Onix', description: 'Banana e açaí, Cherry, Coru magic, Frutas verdes, Tutti frutti, Grapp, Hapocalyx mint, High fusion, High herry, Hortelã, Laranja e morango, Limão, Manga tropical, Maçã, Pera, Tropical, Watermelon bomb, Frutas amarelas, Laranja, High passion, Duas goibas, Jabuticaba', price: '25,00' },
            { name: 'Essências Sense', description: 'Melão com kiwi, Uva ice, Morango com melancia, Tutti frutti, Pera ice', price: '25,00' },
            { name: 'Trident', price: '4,00' },
            { name: 'Halls', price: '4,00' },
        ]
    },
    softdrinks: {
        title: 'Bebidas não Alcoólicas',
        items: [
            { name: 'Água Mineral', price: '4,00' },
            { name: 'Água com Gás', price: '5,00' },
            { name: 'Refrigerantes Lata', description: 'Coca-Cola, Coca Zero, Fanta, Guaraná', price: '6,00' },
            { name: 'Schweppes Lata', price: '7,00' },
            { name: 'Red Bull', description: 'Tradicional / Sabores', price: '13,00' },
            { name: 'Red Bull Morango e Pêssego', price: '15,00' },
            { name: 'Red Bull Blueberry', price: '15,00' },
            { name: 'Monster Tradicional', price: '13,00' },
            { name: 'Monster Mango Loco', price: '13,00' },
            { name: 'Suco Jarra', description: 'Limão, Maracujá, Morango', price: '15,00' },
        ]
    },
    extras: {
        title: 'Diversos / Extras',
        items: [
            { name: 'Pow Pow (Confete de Festa)', description: '1 por R$30 ou 4 por R$100', price: '30,00' },
            { name: 'Sinalizador', description: '', price: '20,00' },
        ]
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const menuContainer = document.getElementById('menu-container');
    const searchInput = document.getElementById('search-input');
    const noResults = document.getElementById('no-results');
    const navLinks = document.querySelectorAll('.nav-link');
    const navContainer = document.getElementById('nav-container');

    function renderMenu(data) {
        menuContainer.innerHTML = '';
        let hasVisibleItems = false;
        let itemDelay = 0;

        const sectionIdToTitleMap = {
            clubedogin: 'drinks',
        };

        for (const categoryKey in data) {
            const category = data[categoryKey];
            if (!category.items || category.items.length === 0) continue;

            hasVisibleItems = true;

            const sectionId = sectionIdToTitleMap[categoryKey] || categoryKey;

            const sectionElement = document.createElement('section');
            sectionElement.id = categoryKey;
            sectionElement.className = 'menu-section pt-4 mb-8 animated-item';
            sectionElement.style.animationDelay = `${itemDelay * 50}ms`;
            itemDelay++;

            let categoryHTML = `<h2 class="text-3xl font-bold text-gold mb-6 border-b-2 border-gold/20 pb-2">${category.title}</h2>`;

            const hasImageItems = category.items.some(item => item.image);
            const itemsContainerClass = hasImageItems ? 'grid grid-cols-1 gap-4' : 'flex flex-col';

            const itemsHTML = category.items.map(item => {
                itemDelay++;
                const animationClass = category.collapsible ? '' : 'animated-item';
                const animationStyle = category.collapsible ? '' : `style="animation-delay: ${itemDelay * 30}ms"`;

                if (item.image) {
                    return `
                        <div class="product-card bg-[#222] rounded-lg overflow-hidden flex items-center transition-transform duration-300 hover:scale-105 ${animationClass}" ${animationStyle} data-name="${item.name}" data-description="${item.description || ''}">
                            <img src="${item.image}" alt="${item.name}" class="w-28 h-32 object-cover">
                            <div class="p-4 flex-1 relative">
                                ${item.featured ? `<span class="absolute top-0 right-0 bg-gold text-black text-xs font-semibold px-2 py-1 rounded-bl-lg">${item.featured}</span>` : ''}
                                <h3 class="product-name text-xl font-semibold">${item.name}</h3>
                                <p class="product-desc text-sm text-gray-400 mt-1">${item.description || ''}</p>
                                <p class="text-lg font-bold text-gold mt-2">R$ ${item.price}</p>
                            </div>
                        </div>`;
                } else {
                    return `
                        <div class="product-list-item flex justify-between items-center py-3 border-b border-gray-800 ${animationClass}" ${animationStyle} data-name="${item.name}" data-description="${item.description || ''}">
                            <div>
                                <h3 class="product-name text-lg font-medium">${item.name}</h3>
                                ${item.description ? `<p class="product-desc text-sm text-gray-400 mt-1">${item.description}</p>` : ''}
                            </div>
                            <p class="text-lg font-bold text-gold flex-shrink-0 ml-4">R$ ${item.price}</p>
                        </div>`;
                }
            }).join('');

            if (category.collapsible) {
                sectionElement.innerHTML = `
                    <details class="group" open>
                        <summary class="flex justify-between items-center list-none cursor-pointer">
                            <h2 class="text-3xl font-bold text-gold mb-2 pb-2">${category.title}</h2>
                            <span class="chevron text-gold transform group-open:rotate-90 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>
                            </span>
                        </summary>
                        <div class="mt-4 space-y-2">${itemsHTML}</div>
                    </details>`;
            } else {
                sectionElement.innerHTML = categoryHTML + `<div class="${itemsContainerClass}">${itemsHTML}</div>`;
            }
            menuContainer.appendChild(sectionElement);
        }
        noResults.style.display = hasVisibleItems ? 'none' : 'block';
    }

    function filterMenu() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const filteredData = {};

        for (const categoryKey in menuData) {
            const category = menuData[categoryKey];
            const filteredItems = category.items.filter(item =>
                item.name.toLowerCase().includes(searchTerm) ||
                (item.description && item.description.toLowerCase().includes(searchTerm))
            );

            if (filteredItems.length > 0) {
                filteredData[categoryKey] = { ...category, items: filteredItems };
            }
        }
        renderMenu(filteredData);
    }

    const updateActiveLink = () => {
        const sections = document.querySelectorAll('.menu-section');
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - navContainer.offsetHeight - 40) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href').substring(1);
            if (linkHref === current || (current === 'clubedogin' && linkHref === 'drinks')) {
                link.classList.add('active');
            }
        });
    };

    searchInput.addEventListener('input', filterMenu);
    window.addEventListener('scroll', updateActiveLink);

    renderMenu(menuData);
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }
});