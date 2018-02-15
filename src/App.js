import React from 'react'
import Sarake from './sarake'

class App extends React.Component {
  
  render() {
   
    return (
      

<div>
<div class="header">
  <h1>CV</h1>
</div>

<div class="row">
    <div class="columnside">
      <img class="img" src={require('./kuvaCV.jpg')} height="300" width="200"/>
      <div class="overflow">
      <h2>Petteri Pääkkönen</h2>
      <h4>Yhteystiedot</h4>
      <p>0505906877</p>
      <p>petteri.paakkonen@helsinki.fi</p>
      </div>
        
      
    </div>
    <div class="columncenter">
        <div>
            <h2>Tietoja minusta</h2>
                <p>Olen 29-vuotias helsinkiläinen. Opiskelen valtiotieteellisessä tiedekunnassa sosiologiaa kuudetta vuotta. 
                Tutkinnostani uupuu enää pro gradu -tutkielma sekä muutamia kursseja. Sivuaineina olen lukenut taloustiedettä
                ja tietojenkäsittelytiedettä. Tietojenkäsittelytieteen opintojen myötä olen innostunut ohjelmoinnista, 
                joten nyt haen työtä alalta.
                </p>
            <h3>Osaaminen</h3>
                <p>Olen suorittanut noin 50 opintopistettä tietojenkäsittelystä. Alle olen koostanut aineopinnoissa
                suorittamieni kurssien harjoitustöitä. Linkki github sivulleni  <a href="https://github.com/pidrmasiin">https://github.com/pidrmasiin</a>
                </p>
        </div>
        <table class="table">
            <tr>
                <th>Kieli/tekniikka</th>
                <th>Tietokanta</th>
                <th>Linkki githubiin</th>
                <th>Linkki websovellukseen</th>
            </tr>
            <Sarake 
                kieli="Java/SpringBoot"
                db="PostgreSQL"
                glink="https://github.com/pidrmasiin/uutiset"
                applink="https://uutista.herokuapp.com/"
                appname="Uutissovellus"
            />
            <Sarake 
                kieli="Javascript/React"
                db="MongoDB (noSQL)"
                glink="https://github.com/pidrmasiin/luetteloBackend"
                applink="https://luetteloback.herokuapp.com/"
                appname="Puhelinluettelo"
            />
            <Sarake 
                kieli="PHP/Twig"
                db="PostgreSQL "
                glink="https://github.com/pidrmasiin/Tsoha-Bootstrap"
                appname="Vaalikone (ei pystyssä)"
            />
            <Sarake 
                kieli="Java"
                db="Ei tietokantaa"
                glink="https://github.com/pidrmasiin/holdemHelp"
                appname="Työpöytäsovellus"
            />
        </table>
        <div>
            <h3>Muuta</h3>
                <p>Tunnen myös HTML:n ja CSS:n sekä REST-rajapinnan toimintaperiaatteet. Tämän sivun olen tehnyt Reactilla.
                Tässä linkki githubiin. <a href=""></a>
                </p>
        </div>
    </div>
  </div>
</div>

    )
  }
}

export default App