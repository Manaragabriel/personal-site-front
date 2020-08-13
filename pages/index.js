import Header from '../components/header';
import { useState, useEffect } from 'react';



function HomePage() {
  const [isVisible,  setIsVisible] = useState({about: false, portifolio:false});
  
  useEffect(function ()  {
      window.onscroll = onScroll
    
  });


  const onScroll = (event) => {
    console.log(document.documentElement.scrollTop)
    if(document.documentElement.scrollTop > 400){
      setIsVisible({portifolio:true});
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
                <h3  className={ 'text-center  font-weight-bold ' + (isVisible.portifolio ? 'visible slide-in-right ' : 'invisible')  }>Meu portifólio</h3>
                <div class="row">
                  <div  className={ 'col-12 bg-white rounded p-2 ' + (isVisible.portifolio ? 'visible slide-in-right ' : 'invisible')  }>
                     <div class="row">
                        <div class="col-12 col-lg-3">
                            <div class="image-container-valore text-center">
                              <img class="h-100 slide-in-left" id="gabriel-photo" src="/valore.png" />
                            </div>
                        </div>

                        <div class="col-12 col-lg-9">
                            <h4 class="font-weight-bold">Desenvolvedor Web - NSC Valore(Trabalhando atualmente)</h4>
                            <p>Exercendo a função de desenvolvedor web, no qual trabalho com as tecnologias PHP,Codeigniter, Wordpress, Node e Vue js
                              Trabalho prestando manutenção em sites, APP'S PWA e desenvolvendo Plugins para Wordpress
                            </p>
                        </div>
                     </div>
                  </div>
                </div>
            </div>
          </section>
        </div>
    )
  }
  
  export default HomePage