import React from 'react';
import style from "./Home.module.css"
import Cart from './Cart';

const Home = () => {
  return (
    
    <div>
      <Cart name="dilli" age={26} discription="A challenging position in a progressive organization where I get to utilize my talents and provides me with an
opportunity for personal and professional growth."/>
          <div id={style.bgrimg}>
      <h4>WE GENERATE</h4>
      <h1>MOST CREATIVE IDEAS</h1>
    </div>

    <section>
      <div id={style.about}>
        <div className={style.top}>
          <h1>About <span>Matrical</span> Technologies</h1>
          <p>Matrical Technologies, a Bangalore based company leverages on its extensive expertise in engineering, design, digital markeeting & it
            services capabilities with exemplary domain and technical knowledge providing cost effective solutions, winding in value addition and 
            customer satisfaction across industry steeps.</p>
        </div>
        <div className={style.middle}>
          <div><img src="https://www.matrical.in/assets/img/company3.jpg" alt='about'  /></div>
          <div>
            <p>Engineering solutions being our core competence, addressing towards 
              our clients assistance to obtain featured engineering design solutions 
              within stipulated time frame resulting in enhancing operational efficiency, 
              reliability and potentially creating valuable market for tradable credits.</p>
            <p>Matrical Technologies is dedicated to provide value added solution across 
              the globe with our vast engineering, manufacturing, IT and Digital 
              Marketing solutions.We help companies in each stage of the Product Life 
              Cycle starting with the preliminary study required to conceptualize and 
              understand the product. Our integrated offerings span industries. We 
              deliver custom-made solutions depending on what your needs are. Our 
              Engineering and Design team of experts help you reduce your time to 
              market and cut operating costs while improving process and product 
              efficiency.</p>
          </div>
        </div>
        <div class={style.bottom}>
          <div>
            <h3>Our <span>Vission</span></h3>
            <ul>
              <li><i class="fa-solid fa-check"></i>To reach global market by providing cutting edge 
                solution and services in product development life 
                cycle.</li>
            </ul>
          </div>
          <div>
            <h3>Our <span>Mission</span></h3>
            <ul>
              <li><i class="fa-solid fa-check"></i>Client’s assistance to obtain featured engineering 
                design solutions, applications, services, marketing 
                within stipulated time frame resulting in enhancing 
                quality and operational efficiency.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <article>
    <div id={style.arti}>
        <h3>OUR <span>EXPERTISE</span></h3>
        <div className={style.above}>
          <div>
            <h4><span>DIGITAL</span> SERVICES</h4>
            <ul>
              <li><i class="fa-solid fa-check"></i>Search Engine Optimisation (SEO)</li>
              <li><i class="fa-solid fa-check"></i>Social Media Marketing (SMM)</li>
              <li><i class="fa-solid fa-check"></i>PPC ad campaigns</li>
              <li><i class="fa-solid fa-check"></i>Display Advertisements</li>
            </ul>
          </div>
          <div>
            <h4><span>IT</span> SERVICES</h4>
            <ul>
              <li><i class="fa-solid fa-check"></i>Mobile APP development</li>
              <li><i class="fa-solid fa-check"></i>Website development</li>
              <li><i class="fa-solid fa-check"></i>Data Science</li>
              <li><i class="fa-solid fa-check"></i>Machine Learning</li>
            </ul>
          </div>
        </div>
        <div className={style.below}>
          <div>
            <h4><span>ENGINEERING</span> SERVICES</h4>
            <ul>
              <li><i class="fa-solid fa-check"></i>Aerospace</li>
              <li><i class="fa-solid fa-check"></i>Automotive</li>
              <li><i class="fa-solid fa-check"></i>Heavy Machinery</li>
              <li><i class="fa-solid fa-check"></i>Manufacturing</li>
            </ul>
          </div>
          <div>
            <h4><span>CONSTRUCTIONAL</span> SERVICES</h4>
            <ul>
              <li><i class="fa-solid fa-check"></i>Commercial</li>
              <li><i class="fa-solid fa-check"></i>Residential</li>
              <li><i class="fa-solid fa-check"></i>Villas</li>
              <li><i class="fa-solid fa-check"></i>Apartments</li>
            </ul>
          </div>
        </div>
      </div>
    </article>

    </div>
  )
}

export default Home