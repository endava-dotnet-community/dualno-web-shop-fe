const searchButton = document.querySelector('.logo-group1 img');
const container = document.querySelector('.logo-group1');
const input = container.querySelector('input');
const searchPopup = container.querySelector('.search-popup');
const searchPopupResults = searchPopup.querySelector('.search-popup-results');

let backendSearchData = {};

searchButton.addEventListener('click', () => {
    container.classList.toggle('active');
    searchPopup.classList.remove('active');
    input.value = "";
});

input.addEventListener('keyup', (e) => {
    if (e.code === 'Enter') {
        searchPopup.classList.toggle('active');

        console.log('addAPICall');
        const mockedBackendData = {
            data: [
                {
                    name: "product1",
                    type: "category1",
                },
                {
                    name: "product2",
                    type: "category1",
                },
                {
                    name: "product3",
                    type: "category1",
                },
            ],
        };
        backendSearchData = mockedBackendData;

        const arrayResultsString = backendSearchData.data.map((currentResult) =>
            `<div class="ws-product-row">
                <div class="img-name-type-group">
                    <div class="productRowImage">
                        <img src="../image/MainPage/product.png" alt="">
                    </div>
                    <div>
                        <div class="productRowName">
                        <p>${currentResult.name}</p>
                        </div>
                        <div class="productRowType">
                        <p>${currentResult.type}</p>
                        </div>
                    </div>
                </div>
            </div>`
        );
        let resultsString = "";

        arrayResultsString.forEach((current) => {
            resultsString += current;
        })

        searchPopupResults.innerHTML = resultsString;
    }
});