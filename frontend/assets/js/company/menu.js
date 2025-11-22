document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById('menu-content');

    nav.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div class="container-fluid">

                <a class="navbar-brand" href="#">
                    <img class="rounded-5"
                        src="https://static.vecteezy.com/system/resources/thumbnails/050/544/573/small/the-logo-for-a-company-that-sells-financial-products-free-png.png"
                        alt="Bootstrap" width="50" height="40">
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/index.html">
                                <i class="bi bi-arrow-bar-left me-2"></i>Página Inicial
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="./company.html">
                                <i class="bi bi-info-square me-2"></i>Información
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./form.html">
                                <i class="bi bi-ui-radios me-2"></i>Formulario
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./news.html">
                                <i class="bi bi-newspaper me-2"></i>Noticias
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>    
    `;
});