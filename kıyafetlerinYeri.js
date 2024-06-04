document.addEventListener('DOMContentLoaded', function() {
    // Arama kutusu elemanını ve arama sonuçlarını seç
    const searchInput = document.querySelector('.search-cart input');
    const searchResults = document.getElementById('search-results');

    // Ürün verilerini içeren bir dizi oluştur
    const products = [
        { name: 'Toji sweat', price: '500', image: 'toji.png', link: 'toji.html' },
        { name: 'Guts Miyamato', price: '500', image: 'gutsmiyamato.png', link: 'gutsmiyamato.html' },
        { name: 'Zod sweat', price: '400', image: 'zod b ön.jpg', link: 'tishort.html' }
        // Diğer ürünleri buraya ekleyin
    ];

    // Arama kutusuna her tuşa basıldığında çalışacak fonksiyon
    searchInput.addEventListener('input', function(event) {
        // Aranan metni al
        const searchText = event.target.value.toLowerCase();

        // Arama sonuçlarını temizle
        searchResults.innerHTML = '';

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
});

document.querySelector('.search-cart button').addEventListener('click', function() {
    var searchResultsWrapper = document.querySelector('.search-results-wrapper');
    var searchResults = document.querySelector('.search-results');

    // Arama sonuçları varsa ve görünürse gizle, yoksa göster
    if (searchResultsWrapper && searchResults) {
        if (searchResultsWrapper.style.display === 'block') {
            searchResultsWrapper.style.display = 'none';
            searchResults.style.display = 'none';
        } else {
            searchResultsWrapper.style.display = 'block';
            searchResults.style.display = 'block';
        }
    }
});
// Arama kutusunu temizlemek için bir işlev
function clearSearch() {
    const searchInput = document.querySelector('.search-cart input');
    searchInput.value = ''; // Arama kutusunu temizle
}
