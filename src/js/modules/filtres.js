import noUiSlider from 'nouislider';
export function filtres() {

    document.addEventListener("DOMContentLoaded", () => {
        var html5Slider = document.getElementById('html5');
        noUiSlider.create(html5Slider, {
            start: [65, 9000],
            // tooltips: true,
            connect: true,
            padding: 0,
            range: {
                'min': 65,
                'max': 14490,
            },
        });

        var select = document.getElementById('educational-toys-criterias-price-start-input');

        // Append the option elements
        for (var i = -20; i <= 40; i++) {

            var option = document.createElement("option");
            option.text = i;
            option.value = i;

            select.appendChild(option);
        }

        var inputNumber = document.getElementById('educational-toys-criterias-price-end-input');

        html5Slider.noUiSlider.on('update', function (values, handle) {

            var value = values[handle];

            if (handle) {
                inputNumber.value = value;
            } else {
                select.value = Math.round(value);
            }
        });

        select.addEventListener('change', function () {
            html5Slider.noUiSlider.set([this.value, null]);
        });

        inputNumber.addEventListener('change', function () {
            html5Slider.noUiSlider.set([null, this.value]);
        });
    })

    function arrowCriteriesFunction() {
        [...document.getElementsByClassName('catalogMenu-title-menu-arrow')].forEach(i => i.classList.add("catalogMenu-title-menu-arrow-criterias"));
    }
    arrowCriteriesFunction()

}
