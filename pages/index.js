import Header from '../components/header';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquareAlt , faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons'


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
                  <div class="col-lg-6 d-flex justify-content-center">
                    <div class="image-container-gabriel img-background rounded-circle"  style={{"background-image": "url('/eu.jpg')"}}>
                      
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

          <section id="portifolio" class="py-5">
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

          <section id="conhecimentos" class="py-5">
            <div class="container">
                <h3  className={ 'text-center  font-weight-bold font-white ' + (isVisible.portifolio ? 'visible slide-in-right ' : 'invisible')  }>Conhecimentos</h3>
                <div class="row">
                  <div class="col-lg-4">
                      <div class=" card image-container img-background" style={{"background-image": "url('/php.png')"}}>
                         
                      </div>
             
                  </div>

                  <div class="col-lg-4">
                      <div class="card text-center image-container img-background" style={{"background-image": "url('/node.png')"}}>
                         
                      </div>
                     
                  </div>

                  <div class="col-lg-4">
                    <div class="card text-center image-container">
                          <img src="/vue.png" class="h-100" />
                      </div>
                     
                  </div>

                  <div class="col-lg-4">
                      <div class="card text-center image-container">
                         <img src="/codeigniter.png" class="h-100" />
                      </div>
                     
                  </div>

                  <div class="col-lg-4">
                      <div class="card text-center image-container">
                           <img src="/wordpress.png" class="h-100" />
                      </div>
                    
                  </div>

                  <div class="col-lg-4">
                      <div class="card text-center image-container">
                          <img src="/react.png" class="h-100" />
                      </div>
                     
                  </div>

                </div>
            </div>
          </section>

          <section id="contact" class="p-5">
                <div class="container">
                  <h3  className={ 'text-center  font-weight-bold font-white ' + (isVisible.portifolio ? 'visible slide-in-right ' : 'invisible')  }>Entre em contato comigo!</h3>
                  <div class="col-lg-12 bg-white-low-blue rounded py-3">
                    <p>Precisa de um site, um ecommerce ou algum sistema? Venha conversar comigo, <span class="font-weight-bold">FAÇO CONSULTORIA GRÁTIS</span> </p>

                    <form>
                     <div class="row">
                        <div class="col-lg-6">
                           <div className={'d-flex'}>
                              <span className={'font-40'}><FontAwesomeIcon  icon={ faPhoneSquareAlt}></FontAwesomeIcon></span>
                              <div className={'ml-2 mb-0 d-flex align-items-center'}>
                                  <a className={'font-weight-bold'} href="https://api.whatsapp.com/send?phone=+5519983708165">(19) 98370-8165</a>
                              </div>

                           </div>

                           <div className={'d-flex'}>

                              <span className={'font-40'}><FontAwesomeIcon  icon={ faEnvelope }></FontAwesomeIcon></span>
                              <div className={'ml-2 mb-0 d-flex align-items-center'}>
                                  <a className={'font-weight-bold'} href="mailto:gabrielmanara2010@hotmail.com">gabrielmanara2010@hotmail.com</a>
                              </div>

                           </div>

                           <div className={'d-flex'}>
                             
                             <span className={'font-40'}><FontAwesomeIcon  icon={ faMap }></FontAwesomeIcon></span>
                             <div className={'ml-2 mb-0 d-flex align-items-center'}>
                                 <span className={'font-weight-bold'} >Moro em: Mogi Mirim / SP</span>
                             </div>

                          </div>
                           
                        </div>
                        <div class="col-lg-6">
                            <div class="col-lg-12">
                              <div class="form-group">
                                  <label class="font-weight-bold" htmlFor={"name"}>Digite seu nome:</label>
                                  <input type="text" class="form-control form-control-border" name="name" id="name"/>
                              </div>
                          </div>
                          <div class="col-lg-12">
                              <div class="form-group">
                                  <label class="font-weight-bold" htmlFor={"email"}>Digite seu email:</label>
                                  <input type="email" class="form-control form-control-border" name="email" id="email"/>
                              </div>
                          </div>
                          <div class="col-lg-12">
                              <div class="form-group">
                                  <label class="font-weight-bold" htmlFor={"phone"}>Digite seu telefone:</label>
                                  <input type="text" class="form-control form-control-border" name="phone" id="phone"/>
                              </div>
                          </div>
                          <div class="col-lg-12">
                              <div class="form-group">
                                  <label class="font-weight-bold" htmlFor={"location"}>Sua localização:</label>
                                  <input type="text" class="form-control form-control-border" name="location" id="location"/>
                              </div>
                          </div>
                          <div class="col-lg-12">
                              <div class="form-group">
                                  <label class="font-weight-bold" htmlFor={"message"}>Mensagem:</label>
                                  <textarea  class="form-control form-control-border" name="message" id="message"></textarea>
                              </div>
                          </div>
                          <div class="text-right col-12">
                              <div class="form-group">
                                <input type="submit" class="btn bg-dark" value="Enviar"/>
                              </div>
                          </div>
                        </div>
                     </div>

                    </form>
                  </div>
                </div>
          </section>

        </div>
    )
  }
  
  export default HomePage