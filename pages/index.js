import Header from '../components/header';
import Footer from '../components/footer';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquareAlt , faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head';

function HomePage({posts}) {
  const [isVisible,  setIsVisible] = useState({about: false, portifolio:false});
 
  useEffect(function ()  {
      window.onscroll = onScroll
    
  });


  const onScroll = (event) => {

    if(document.documentElement.scrollTop > 400){
      setIsVisible({portifolio:true});
    }

  }
  return (
        <div>
          <Head>
              <title>Gabriel Manara | Desenvolvedor</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              <meta property="og:title" content="Gabriel Manara | Desenvolvedor" key="title" />
              <meta name="author" content="Gabriel Manara" />
              <meta name="description" content="Site oficial de Gabriel Manara, desenvolvedor Web" />
              <meta name="keywords" content="sites, web, desenvolvimento, ecommerce, api, mobile, aplicativos, app" />
              <meta property="og:author" content="Gabriel Manara" />
              <meta property="og:description" content="Site oficial de Gabriel Manara, desenvolvedor Web" />
              <meta property="og:keywords" content="sites, web, desenvolvimento, ecommerce, api, mobile, aplicativos, app" />
           </Head>
 
          <Header/>
          <section id="about" class="d-flex align-items-center ">
              <div class="container">
                <div class="row">
                  <div class="col-lg-6 d-flex justify-content-center">
                    <div class="mt-80 image-container-gabriel img-background rounded-circle"  style={{"backgroundImage": "url('/eu.jpg')"}}>
                      <img alt="" src="/eu.jpg" class="h-100" id="gabriel-photo" />
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
                  <div  className={ 'col-lg-12  rounded  ' + (isVisible.portifolio ? 'visible slide-in-right ' : 'invisible')  }>
                     
                      <div className={'card p-2'}>
                        <div class="row">
                          <div class="col-12 col-lg-3">
                                <div class="image-container-valore text-center">
                                  <img alt="" class="h-100 slide-in-left" id="gabriel-photo" src="/valore.png" />
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
            </div>
          </section>

          <section id="conhecimentos" class="py-5">
            <div class="container">
                <h3  className={ 'text-center  font-weight-bold font-white ' + (isVisible.portifolio ? 'visible slide-in-right ' : 'invisible')  }>Conhecimentos</h3>
                <div class="row">
                  <div class="col-lg-4">
                      <div class=" card image-container img-background" style={{"background-image": "url('/laravel.png')"}}>
                         
                      </div>
             
                  </div>

                  <div class="col-lg-4">
                      <div class="card text-center image-container img-background" style={{"background-image": "url('/node.png')"}}>
                         
                      </div>
                     
                  </div>

                  <div class="col-lg-4">
                    <div class="card text-center image-container">
                          <img alt="" src="/vue.png" class="h-100" />
                      </div>
                     
                  </div>

                  <div class="col-lg-4">
                      <div class="card text-center image-container">
                         <img alt="" src="/codeigniter.png" class="h-100" />
                      </div>
                     
                  </div>

                  <div class="col-lg-4">
                      <div class="card text-center image-container">
                           <img alt="" src="/wordpress.png" class="h-100" />
                      </div>
                    
                  </div>

                  <div class="col-lg-4">
                      <div class="card text-center image-container">
                          <img alt="" src="/react.png" class="h-100" />
                      </div>
                     
                  </div>

                </div>
            </div>
          </section>

          <section id="contact" class="p-3">
                <div class="container">
                  <h3  className={ 'text-center  font-weight-bold font-white ' + (isVisible.portifolio ? 'visible slide-in-right ' : 'invisible')  }>Entre em contato comigo!</h3>
                  <div class="col-lg-12 p-2 bg-white-low-blue rounded py-3">
                    <p>Precisa de um site, um ecommerce ou algum sistema? Venha conversar comigo, <span class="font-weight-bold">FAÇO CONSULTORIA GRÁTIS</span> </p>

                    <form>
                     <div class="row">
                        <div class="col-lg-4">
                           <div className={'d-flex'}>
                              <span className={'font-40'}><FontAwesomeIcon  icon={ faPhoneSquareAlt}></FontAwesomeIcon></span>
                              <div className={'ml-2 mb-0 d-flex align-items-center'}>
                                  <a className={'font-weight-bold'} href="https://api.whatsapp.com/send?phone=+5519983708165">(19) 98370-8165</a>
                              </div>

                           </div>

                           
                        </div>

                        <div class="col-lg-4">
                          
                            <div className={'d-flex'}>

                              <span className={'font-40'}><FontAwesomeIcon  icon={ faEnvelope }></FontAwesomeIcon></span>
                              <div className={'ml-2 mb-0 d-flex align-items-center'}>
                                  <a className={'font-weight-bold'} href="mailto:gabrielmanara2010@hotmail.com">gabrielmanara2010@hotmail.com</a>
                              </div>

                            </div>

                        </div>

                        <div class="col-lg-4">

                           <div className={'d-flex'}>
                             
                             <span className={'font-40'}><FontAwesomeIcon  icon={ faMap }></FontAwesomeIcon></span>
                             <div className={'ml-2 mb-0 d-flex align-items-center'}>
                                 <span className={'font-weight-bold'} >Moro em: Mogi Mirim / SP</span>
                             </div>

                          </div>

                        </div>


                     </div>

                    </form>
                  </div>
                </div>
          </section>

          <section id="blog" class="p-5">
              <div class="container">
                <h3  className={ 'text-center  font-weight-bold ' + (isVisible.portifolio ? 'visible slide-in-right ' : 'invisible')  }>Blog!</h3>
                <div class="row">
                  {posts.data.map((value) => {
                
                    return (
                      <div class="col-lg-4">
                        <div class="card p-3">
                          <div class="image-container">
                                <img alt="" src={'http://gabriel-manara-api.herokuapp.com/uploads/'+value.image} class="h-100" />
                            </div>
                            <a class="font-weight-bold h4" href={'blog/'+value.title.replace(/\s+/g,'-')+'/'+value.id}>{value.title}</a>
                            <br/>
                            <a class="btn btn-default" href={'blog/'+value.title.replace(/\s+/g,'-')+'/'+value.id}>Leia mais</a>
                        </div>
                      </div>
                    )

                  } )}

                  
                </div>
              </div>
          </section>
          
          <Footer />

        </div>
    )
  }

  HomePage.getInitialProps = async (ctx) => {
    const res = await fetch('http://gabriel-manara-api.herokuapp.com/api/post/')
    const json = await res.json()
    console.log(">>>>>>>>>>>>>>>>>>>>>",json)
    return { posts: json }
  }
 
  export default HomePage