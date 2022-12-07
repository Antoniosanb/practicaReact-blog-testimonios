
import './App.css';
import Testimonio from './componentes/Testimonio';
import contenidos from './utilitis/contenidoTestimientos.js';

function App() {
  return (
    <div className="App">
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      {contenidos.map((contenido, i) => {
        return (
            <Testimonio imagenSrc={contenido.imagenSrc}
              nombre={contenido.nombre}
              pais={contenido.pais}
              cargo={contenido.cargo}
              empresa={contenido.empresa}
              testimonio={contenido.testimonio}
              key={i}
            />
        )
      })}

      {/*<Testimonio imagenSrc="testimonio-sarah.png"
        nombre="Sarah Chima" 
        pais="Nigeria" 
        cargo="Ingeniera de Software" 
        empresa= "ChatDesk" 
        testimonio="freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."
      />
      <Testimonio imagenSrc="testimonio-emma.png"
        nombre="Emma Bostian" 
        pais="Suecia" 
        cargo="Ingeniera de Software" 
        empresa= "Spotify" 
        testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
      />*/}
    </div>
  );
}

export default App;
