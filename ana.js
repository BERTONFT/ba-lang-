document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const img = product.querySelector('img');
        img.addEventListener('mouseover', function() {
            img.src = 'path_to_your_hover_image.png';
        });
        img.addEventListener('mouseout', function() {
            img.src = 'path_to_your_original_image.png';
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".hero img");
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove("visible");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("visible");
    }

    setInterval(showNextImage, 8000); // 5 saniye
});

document.addEventListener('DOMContentLoaded', function() {
    var dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(function(toggle) {
        var dropdown = toggle.querySelector('.dropdown');

        toggle.addEventListener('click', function(event) {
            event.stopPropagation();
            closeAllDropdowns();
            toggle.classList.add('show');
        });

        dropdown.addEventListener('mouseleave', function() {
            toggle.classList.remove('show');
        });
    });

    document.addEventListener('click', function() {
        closeAllDropdowns();
    });

    function closeAllDropdowns() {
        dropdownToggles.forEach(function(toggle) {
            toggle.classList.remove('show');
        });
    }
});
function showSearchResults() {
    var overlay = document.querySelector('.search-results-overlay');
    var results = document.querySelector('.search-results');

    overlay.style.display = 'block';
    results.style.display = 'block';
}

function hideSearchResults() {
    var overlay = document.querySelector('.search-results-overlay');
    var results = document.querySelector('.search-results');

    overlay.style.display = 'none';
    results.style.display = 'none';
}

document.querySelector('.search-cart input').addEventListener('input', function() {
    var searchValue = this.value.toLowerCase();
    var products = document.querySelectorAll('.product p:first-child');

    products.forEach(function(product) {
        var productName = product.textContent.toLowerCase();
        if (productName.includes(searchValue)) {
            product.parentElement.style.display = 'block';
        } else {
            product.parentElement.style.display = 'none';
        }
    });

    // Arama sonuçları gösterilsin
    showSearchResults();
});
function updateProductCount() {
    var products = document.querySelectorAll('.product p:first-child');
    var productCount = 0;

    products.forEach(function(product) {
        if (product.parentElement.style.display !== 'none') {
            productCount++;
        }
    });

    var button = document.querySelector('.search-cart button');
    button.textContent = productCount + ' ürün';
}

document.querySelector('.search-cart input').addEventListener('input', function() {
    var searchValue = this.value.toLowerCase();
    var products = document.querySelectorAll('.product p:first-child');

    products.forEach(function(product) {
        var productName = product.textContent.toLowerCase();
        if (productName.includes(searchValue)) {
            product.parentElement.style.display = 'block';
        } else {
            product.parentElement.style.display = 'none';
        }
    });

    // Arama sonuçlarını göster
    showSearchResults();

    // Ürün sayısını güncelle
    updateProductCount();
});
document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const img = product.querySelector('img');
        img.addEventListener('mouseover', function() {
            img.src = 'path_to_your_hover_image.png';
        });
        img.addEventListener('mouseout', function() {
            img.src = 'path_to_your_original_image.png';
        });
    });
});
document.querySelectorAll('.product-tags a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.querySelectorAll('.product-description p').forEach(p => {
            p.style.display = 'none';
        });
        document.getElementById(targetId + '-info').style.display = 'block';
    });
});

// Arama kutusu elemanını seç
const searchInput = document.querySelector('.search-cart input');

// Arama sonuçlarını göstereceğimiz alanı seç
const searchResults = document.getElementById('search-results');

// Arama kutusuna her tuşa basıldığında çalışacak fonksiyon
searchInput.addEventListener('input', function(event) {
    // Aranan metni al
    const searchText = event.target.value.toLowerCase();

    // Arama sonuçlarını temizle
    searchResults.innerHTML = '';

    // Tüm ürünlerin olduğu bir dizi varsayalım
    const products = [
        { name: 'Toji sweat', price: '500', image: 'toji.png', link: 'toji.html' },
        { name: 'Guts Miyamato', price: '500', image: 'gutsmiyamato.png', link: 'gutsmiyamato.html' },
        { name: 'Zod sweat', price: '400', image: 'zod b ön.jpg', link: 'tishort.html' }
        // Diğer ürünleri buraya ekleyin
    ];

    // Her bir ürünü kontrol et
    products.forEach(product => {
        // Ürün adını küçük harfe çevir
        const productName = product.name.toLowerCase();
        
        // Aranan metin ürün adında geçiyorsa
        if (productName.includes(searchText)) {
            // Arama sonuçlarına ürünü ekle
            searchResults.innerHTML += `
                <div class="product-category">
                    <a href="${product.link}">
                        <div class="product">
                            <img src="${product.image}" alt="${product.name}">
                            <p>${product.name}</p>
                            <p>${product.price}</p>
                        </div>
                    </a>
                </div>
            `;
        }
    });
});
function showSearchResults() {
    var overlay = document.querySelector('.search-results-overlay');
    var results = document.querySelector('.search-results');

    overlay.style.display = 'block';
    results.style.display = 'block';
}

function hideSearchResults() {
    var overlay = document.querySelector('.search-results-overlay');
    var results = document.querySelector('.search-results');

    overlay.style.display = 'none';
    results.style.display = 'none';
}

document.querySelector('.search-cart input').addEventListener('input', function() {
    var searchValue = this.value.toLowerCase();
    var products = document.querySelectorAll('.product p:first-child');

    products.forEach(function(product) {
        var productName = product.textContent.toLowerCase();
        if (productName.includes(searchValue)) {
            product.parentElement.style.display = 'block';
        } else {
            product.parentElement.style.display = 'none';
        }
    });

    // Arama sonuçları gösterilsin
    showSearchResults();
});
function updateProductCount() {
    var products = document.querySelectorAll('.product p:first-child');
    var productCount = 0;

    products.forEach(function(product) {
        if (product.parentElement.style.display !== 'none') {
            productCount++;
        }
    });

    var button = document.querySelector('.search-cart button');
    button.textContent = productCount + ' ürün';
}

document.querySelector('.search-cart input').addEventListener('input', function() {
    var searchValue = this.value.toLowerCase();
    var products = document.querySelectorAll('.product p:first-child');

    products.forEach(function(product) {
        var productName = product.textContent.toLowerCase();
        if (productName.includes(searchValue)) {
            product.parentElement.style.display = 'block';
        } else {
            product.parentElement.style.display = 'none';
        }
    });

    // Arama sonuçlarını göster
    showSearchResults();

    // Ürün sayısını güncelle
    updateProductCount();
});
function clearSearch() {
    const searchInput = document.querySelector('.search-cart input');
    searchInput.value = ''; // Arama kutusunu temizle
}
