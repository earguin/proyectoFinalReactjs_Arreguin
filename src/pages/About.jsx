import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {

    AOS.init();

    return (
        <div className='About'>
            <h1>Acerca de</h1>
            <div className='contentAbout1'>

                <div className='imgIzq'><img data-aos="flip-left" data-aos-duration="1000" src={`../assets/edificio.jpg`}></img></div>
                <div className='txtDer' data-aos="fade-up" data-aos-duration="1500">
                    <p>Los libros, la Revista Bibliographica, las Jornadas Académicas y la Gaceta Bibliográfica son varias  
                        publicaciones seriadas auspiciada en diferentes etapas del año editadas por el Instituto de Investigaciones Bibliográficas</p>
                    <p>Tenemos una ya tradición en la proyección de la investigación sobre temas vinculados con la bibliografía en su más amplia extensión. 
                        Entre las líneas de investigación privilegiadas por la revista están la bibliografía, la hemerografía, la historia del libro, de la edición y de la prensa, 
                        la bibliología y temas referentes al proceso de producción del libro impreso, manuscrito (codicología, paleografía, conformación de archivos documentales, etc.) 
                        y el estudio de las fuentes de la cultura escrita, incluidos los fenómenos inherentes a la transmisión y recepción de los textos, así como 
                        cuestiones relacionadas con la preservación documental en todas las plataformas, en México y el resto del mundo.</p></div>

            </div>

        </div>
    );
};



export default About;
