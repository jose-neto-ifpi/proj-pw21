import React from "react";
import Link from "./ninartes";


class Home extends React.Component {
  
  render() {
    return (
<body>
  <div class="container">
    <header class="header">
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <ul class="cabecalho__menu">
            <li class="cabecalho__item-menu"><Link href="/"><a>Voltar para a Home</a> </Link></li>
            <li class="cabecalho__item-menu"><a href="produtos.html">Produtos</a></li>
            <li class="cabecalho__item-menu"><a href="#">Meus Pedidos</a></li>
          </ul>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </header>

    <main class="container mb-4">


      <h1> AteliÃª NinArtes </h1>
      <figure>
        <img class="img-thumbnail mx-auto d-block" src="images/logo.jpeg" alt="Nossa Logomarca"/>
        <figcaption>AteliÃª Nina Artes</figcaption>
      </figure>

      <div class="card text-white bg-secondary mb-3">
        <h3 class="card-header"> Depoimentos de Clientes </h3>
        <div class="card-body">
          <div id="carouselDepoimentos" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">

                <img src="images/depoimentos/foto2.png" class="img-thumbnail mx-auto d-block w-50 p-3"
                  alt="Depoimentos de Clientes" object-fit="contain"/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>LaÃ§os Encantados</h5>
                  <p>Estou encantada com tanta delicadeza!</p>
                </div>


              </div>

              <div class="carousel-item">
                <img src="images/depoimentos/foto3.png" class="img-thumbnail mx-auto d-block w-50 p-3"
                  alt="Depoimentos de Clientes"/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>LaÃ§os Com Amor</h5>
                  <p>Ã‰ muito amor e carinho em uma Ãºnica peÃ§a! </p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="images/depoimentos/foto4.png" class="img-thumbnail mx-auto d-block w-50 p-3"
                  alt="Depoimentos de Clientes"/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Niver da Lara!</h5>
                  <p>Minha festa ficou mais especial com essa linda princesa! </p>
                </div>
              </div>

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselDepoimentos"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselDepoimentos"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>


        </div>
      </div>

      <h2> Produto Artesanal em Biscuit </h2>
      <div class="card text-dark bg-light border-secondary mb-3 ">
        <h3 class="card-header" data-bs-toggle="collapse" data-bs-target="#lista_produtos"> Confira nossos produtos.
        </h3>
        <div class="card-body">
          <ul id="lista_produtos" class="collapse show">
            <li>Itens de DecoraÃ§Ã£o.</li>
            <li>LembraÃ§as para aniversÃ¡rio.</li>
            <li>Topo de Bolos.</li>
            <li>Apliques para laÃ§os.</li>
          </ul>
        </div>
      </div>
      <div class="card">
        <h3 class="card-header" data-bs-toggle="collapse" data-bs-target="#nossa_historia"> Nossa HistÃ³ria</h3>
        <div id="nossa_historia" class="collapse">
          <div class="card-body">
            <p>
              O AteliÃª NinArtes Ã© uma galeria que jÃ¡ conta com oito anos
              no mercado. Nossos produtos sÃ£o 100% artesanal, feitos com
              muito carinho e dedicaÃ§Ã£o.
            </p>
            <p>
              Temos clientes em diversos paÃ­ses do mundo,
              entre eles Estados Unidos, AustrÃ¡lia, MÃ©xico e Peru.
            </p>
          </div>
        </div>
      </div>


      <h3> Compra Garantida! </h3>
      <ol>
        <li> Entrega RÃ¡pida. </li>
        <li> VÃ¡rias opÃ§Ãµes de Pagamento. </li>
        <li> Suporte em nossos canais de comunicaÃ§Ã£o. </li>
        <li> Garantia de Origem. </li>
      </ol>

      <section>
        <h2>Contato</h2>
        <p>Entre em contato com nossa loja!</p>
        <form>
          <div class="form-group">

            <label for="contato-nome">Nome:</label>
            <input class="form-control" id="contato-nome" type="text" placeholder="Seu nome"/>
          </div>
          <div class="form-group">
            <label for="contato-email">E-mail:</label>
            <input class="form-control" id="contato-email" type="text" placeholder="Seu e-mail"/>
          </div>
          <div class="form-group">
            <label for="contato-email">Mensagem:</label>
            <input class="form-control" id="contato-email" type="text-area" placeholder="Digite aqui sua mensagem"/>
          </div>
          <div class="form-group">
            <button type="button" class="btn btn-primary">Enviar</button>
          </div>
        </form>

      </section>

    </main>


    <footer class="rodape">


    </footer>
    {/*<!--<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script> -->*/}
    <script src="bootstrap-5/js/bootstrap.js"></script>
  </div>
</body>
)
}
}