import React from 'react'
import logo1 from './logo1.png';

const Landing = () => {
    return (
        <nav class="contenedorNav navbar navbar-expand-lg navbar-light bg-light">
              <a class="contenedorLogo navbar-brand" href="index.html">
                  <img src={logo1} alt="logoHeader"></img>
              </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                  <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="sobre_mi.html">Quienes somos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="productos.html">Productos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contacto.html">Contacto</a>
                </li>
            </ul>
          </div>
        </nav>  
    )
}

export default Landing