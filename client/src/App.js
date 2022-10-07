import React, { useEffect, useState } from 'react';
import "./App.css";
import Axios from 'axios'; /* Pour recupere ou envoye les donnée */
import { Title } from './styles';
import { Footer } from './components/Footer'


function App() {

  const [nom, setNom] = useState('');
  const [nomList, setNomList] = useState([]);

  useEffect( () =>{
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setNomList(response.data);
    })
  }, [nomList])

  const submitReview = () => {
    Axios.post('http://localhost:3001/api/insert', {
      nom: nom,
    });
      alert("Le nom été saisi");
  };


  return (
    <div className="App">
      <div>
        <div className='bgimg-1'>
          <Title>
          Le Retour du Roi
          </Title>
        </div>

        <div className='section'>
          <h3 className='titleBorder'> Iolcos, Grèce antique, 515 avant JC.</h3>
          <p>Jason est exténué. Sur un papyrus, il a dressé la liste de plus de 150 gaillards et ne sait toujours pas comment il va s’en sortir pour choisir son équipage. Nous sommes en 515 avant JC à Iolcos, un petit village de Thessaly. Le jour est enfin venu pour Jason de venger son père et de récupérer le trône de Iolcos. Il y a de nombreuses années, Pélias, l’actuel roi de Iolcos a usurpé le trône à son père. Evidemment, Pélias n’a pas l’intention de céder son titre aussi facilement au jeune Jason. Il lui lance donc un défi : aller récupérer la toison d’or située à plus de 1300 kilomètres, en Colchide.

          Pour rejoindre Colchide, Jason doit naviguer sur la mer noir. Il a fait construire un puissant navire pour l’expédition, l’Argo. Il lui reste maintenant à trouver les équipiers. Il en faut 50 pour diriger le bateau : Castor, Pollux, Heracles, Erginos, Euryale, Hylas… C’est un véritable casse tête.</p>
        </div>

          <div className='bgimg-2'>
            <div className='container'>
                <div className='container-input'>
                  <h2> Ajouter un(e) Argonaute</h2>
                  <label>Nom de l'Argonaute </label>
                  <input type="text" name="argonaute" onChange={(e) => {
                    setNom(e.target.value);
                  }}/>
                  
                  <button onClick={submitReview}>Ajouté</button>
                </div>
                <div className='container-text'>
                  <h3>Membres de l'équipage</h3>
                  <ul>
                  {nomList.map((val) =>{
                    return <li key={val.id}>{val.nom}</li>
                  })}
                  </ul>
                </div>
            </div>
          </div>

        <div className='section'>
          <h3 className='titleBorder'> To be continue ...</h3>

        </div>

        <div className='bgimg-3'>
          <div className='caption'>
              <span className='titleBorder'>
                  Bienvenue à Wild Code School
              </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
