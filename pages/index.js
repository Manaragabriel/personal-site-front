import Header from '../components/header';
import { useState, useEffect } from 'react';



function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(function ()  {
      window.onscroll = onScroll
    
  });


  const onScroll = (event) => {
    console.log(document.documentElement.scrollTop)
    if(document.documentElement.scrollTop > 400){
      setIsVisible(true);
    }
    console.log(isVisible);
  }
 

  return (
        <div>
          <Header/>
          <section id="about" class="d-flex align-items-center">
              <div class="container">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="image-container">
                      <img class="h-100 slide-in-left" id="gabriel-photo" src="/eu.jpg" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <h4 class="font-italic font-weight-bold font-blue slide-in-right">Um pouco da minha história...</h4>
                    <p class="font-white slide-in-right">
                      Nasci na cidade de Mogi Mirim(SP), desde pequeno sempre fui fascinado por tecnologia, decidir entrar na área de programação, e desde então continuo estudando e trabalhando nesta área.
                      Gosto bastante de programação Web e Mobile, bem como adoro também desafios para adquirir mais conhecimento e expêriencias
                    </p>
                  </div>
                </div>
              </div> 
          </section>

          <section id="portifolio" class="py-4">
            <div class="container">
                <h4  className={ 'text-center  font-weight-bold ' + (isVisible ? 'visible slide-in-right ' : 'invisible')  }>Meu portifólio</h4>
                <div class="row">
                  
                </div>
            </div>
          </section>
        </div>
    )
  }
  
  export default HomePage