<?php require_once 'header.php' ?>

<div class="page-home">
    <img class="line-home" src="assets/img/line-home.svg" alt="">
    <section class="container">
        <div class="row justify-content-center">
            <div class="col-md-9 text-center">
                <small class="text-small">Desarrollador web</small>
                <h1 class="mt-3 slogan">Hola mi nombre es Jesus Ocaña <br> <span class="brown">soy desarrollador web</span> </h1>
            </div>
            <div class="col-md-12 d-flex justify-content-center mt-3">
                <a class="btn-primary" href="portfolio.php">Mi trabajo <img src="assets/img/arrow-small.svg" alt=""></a>
            </div>
        </div>
    </section>
    <section class="bg-black">
        <div class="container my-5">
            <img class="banner" src="assets/img/banner.jpg" alt="">
        </div>
        <div class="container pt-5 pb-5">
            <div class="row">
                <div class="col-md-12 col-lg-5 offset-md-1">
                    <h2 class="light">¿Como puedo ayudarte?</h2>
                    <p class="gray">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium tempore, asperiores mollitia molestias officia maiores perferendis eius, voluptatum aspernatur, totam ab maxime consequatur architecto recusandae tenetur ea perspiciatis reprehenderit labore.</p>
                    <a class="btn-third" href="services.php">Servicios <img src="assets/img/arrow-small.svg" alt=""></a>
                </div>
                <div class="col-md-12 col-lg-5 offset-md-1 mt-5 mt-lg-0">
                    <div class="d-flex justify-content-around">
                        <div class="services">
                            <span class="text-small">Diseño</span>
                            <ul>
                                <li>Diseño web</li>
                                <li>Maquetación</li>
                                <li>Prototipado</li>
                            </ul>
                        </div>
                        <div class="services">
                            <span class="text-small">Desarollo</span>
                            <ul>
                                <li>Desarrollo web</li>
                            </ul>
                        </div>
                        <div class="services d-none d-md-block">
                            <span class="text-small">Frameworks y CMS</span>
                            <ul>
                                <li>Drupal 8</li>
                                <li>Wordpress</li>
                                <li>Laravel</li>
                                <li>Node JS</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="recently-work">
        <div class="container">
            <div class="row">
                <div class="col-md-12 d-flex justify-content-center align-items-center text-center flex-column flex-md-row title">
                    <h2>Trabajos recientes</h2> <a class="btn-secondary ml-3" href="#!">Ver más <img src="assets/img/arrow-small-light.svg" alt=""></a>
                </div>

                <div class="col-lg-6 my-5">
                    <div class="case">
                        <div class="my-3">
                            <span>Sitio web</span>
                        </div>
                        <div class="case-content">
                            <h3 class="title">Eskape <br>  <p style="color: #A48A5B;">Website</p></h3>
                        
                            <img src="assets/img/case-1.png" alt="">
                        </div>
                        <div class="case-view">
                            <!-- <div class="arrow">
                            </div> -->
                            <a href="details.php">Ver Trabajo</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 my-5">
                    <div class="case">
                        <div class="my-3">
                            <span>Sitio web</span>
                        </div>
                        <div class="case-content">
                            <h3 class="title">Eskape <br>  <p style="color: #A48A5B;">Website</p></h3>
                        
                            <img src="assets/img/case-1.png" alt="">
                        </div>
                        <div class="case-view">
                            <!-- <div class="arrow">
                            </div> -->
                            <a href="details.php">Ver Trabajo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="work-together">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <small class="text-small">¿Te gusta mi trabajo?</small>
                    <h2 class="mt-2">Hagamos algo <span style="color: #A48A5B;">increible</span></h2> <a class="btn-secondary mt-3" href="contact.php">Contacto <img src="assets/img/arrow-small-light.svg" alt=""></a>
                </div>
            </div>
        </div>
    </section>
</div>
<?php require_once 'footer.php' ?>
