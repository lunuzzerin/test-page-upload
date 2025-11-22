document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("questionForm");
    const imageModal = document.getElementById("imageModal");
    const quantityResponse = document.getElementById("quantityResponse");

    form.addEventListener("submit",
        function (event) {
            event.preventDefault();

            const responses = [
                {
                    key: 'responseFirstQuestion',
                    value: '4'
                },
                {
                    key: 'responseSecondQuestion',
                    value: '2'
                },
                {
                    key: 'responseThirdQuestion',
                    value: '2'
                },
                {
                    key: 'responseFourthQuestion',
                    value: '1'
                },
                {
                    key: 'responseFivethQuestion',
                    value: '2'
                },
                {
                    key: 'responseSixthQuestion',
                    value: '3'
                }
            ]

            let successResponse = 0;

            const data = new FormData(form);

            for (let [name, value] of data) {
                const response = responses.find(r => r.key === name && r.value == value);

                if (!response) {
                    continue;
                }

                successResponse++;
            }

            quantityResponse.textContent = successResponse;

            switch (true) {
                case successResponse >= 3 && successResponse <= 5:
                    imageModal.src = "https://media.tenor.com/-_Lq7EzFHCkAAAAM/dos-two.gif";
                    break;
                case successResponse <= 2:
                    imageModal.src = "https://lh6.googleusercontent.com/proxy/gVFpliSgVF22lE1q2ugvmFDpUD0y7mu5lo7LZZvFOU_BFpJdfBuFoX5iMKOUnx8QdYX-kjsNLvLKqqlO7Kn2_HEXHwXJ";
                    break;
                default:
                    imageModal.src = "https://i.pinimg.com/originals/0d/62/79/0d6279af6ad18436b4514e86153f6265.gif";
                    break;
            }

            const modal = new bootstrap.Modal('#modalShow')
            modal.show();
        }
    );
});