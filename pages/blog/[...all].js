import Header from '../../components/header';
import Footer from '../../components/footer';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquareAlt , faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head';
import { withRouter, useRouter } from 'next/router';

function BlogPage({post}) {
    

    

    return (

        <div>
            <Header/> 

            <Head>
              <title>{post.title} - Gabriel Manara | Desenvolvedor</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              <meta property="og:title" content={post.title + "Gabriel Manara | Desenvolvedor"} key="title" />
              <meta name="author" content="Gabriel Manara" />
              <meta name="description" content={post.content.substring(0, 30)} />
              <meta name="keywords" content="sites, web, desenvolvimento, ecommerce, api, mobile, aplicativos, app" />
              <meta property="og:author" content="Gabriel Manara" />
              <meta property="og:description" content={post.content.substring(0, 30)}  />
              <meta property="og:keywords" content="sites, web, desenvolvimento, ecommerce, api, mobile, aplicativos, app" />
           </Head>

            <section id="blog-title" class="d-flex align-items-center">
              <div class="container">
              
                  <h2 class="font-weight-bold text-white">{post.title}</h2>
                  <h4 class="font-weight-bold text-white m-0">{post.subtitle}</h4>
            
            
                

              </div> 
          </section>   
          <section id="content" class="d-flex align-items-center p-5">
              <div class="container">
                <div class="row">
                    {post.content}
                 
                </div>
              </div> 
          </section>   

          <Footer/>
        </div>
    )
}

BlogPage.getInitialProps = async ({ query }) => {
  const postId = query.all[1]
  const res = await fetch('http://gabriel-manara-api.herokuapp.com/api/post/'+postId)
  const json = await res.json()
  return { post: json }
}

export default BlogPage