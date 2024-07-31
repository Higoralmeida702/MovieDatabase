import './Home.css'
import { useNavigate } from 'react-router-dom';


 
const Home = () => {
     const navigate = useNavigate();
     const handleNavigate = () => {
        navigate('/movies');
      };

    return (
        <div>

        <div className='apresentacao'>
            <h1 className='titulo'> Filmes,Series, Esportes e muito mais</h1>
            <p className='subTitulo'>Explore o mundo do cinema e da TV com nosso poderoso motor de busca e descoberta. Aqui, você encontrará uma vasta coleção de informações detalhadas sobre filmes, séries de TV, atores e muito mais. Nosso site oferece</p>
            <button onClick={handleNavigate} className='buttonDescubra'>Descubra +</button>
        </div>
            <section className='siteDetails'>
                <div className='siteDetailsContent'>
                    <img src="/Images/happykid.jpeg" alt="" className='imageHome'/>
                    <h1>Fique dentro das tendências</h1>
                    <p>Descubra os filmes e séries que estão em alta no momento, com listas atualizadas semanalmente.</p>
                </div>
                <div className='siteDetailsContent'>
                    <img src="/Images/ironman.avif" alt="" className='imageHome'/>
                    <h1>Saiba dos últimos lançamentos:</h1>
                    <p>Fique por dentro dos últimos lançamentos nos cinemas e nas plataformas de streaming.</p>
                </div>
                <div className='siteDetailsContent'>
                    <img src="/Images/moviecast.png" alt="" className='imageHome'/>
                    <h1>Busca de Filmes e Séries</h1>
                    <p>Encontre informações completas sobre seus filmes e séries de TV favoritos, incluindo sinopses, elenco, trailers e imagens</p>
                </div>
                <div className='siteDetailsContent'>
                    <img src="/Images/lupa.png" alt="" className='imageHome'/>
                    <h1>Busca de Filmes e Séries</h1>
                    <p>Encontre informações completas sobre seus filmes e séries de TV favoritos, incluindo sinopses, elenco, trailers e imagens</p>
                </div>
            </section>
        </div>
    )
}

export default Home