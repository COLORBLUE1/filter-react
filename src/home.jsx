import "./assets/style/CSS/home.css";
import "./assets/style/CSS/Fonts.css";
import Spline from "@splinetool/react-spline";

export function Home({ texto = "no-text" }) {
  return (
    <header className="tipos-section">
      <nav>
        <ul>
          <li>{texto}</li>
        </ul>
      </nav>
    </header>
  );
}

export function Main() {
  return (
    <section style={{ height: "100vh" }}>
      <div className="canvas">
        <Spline scene="https://prod.spline.design/uaxQoZEoAJwiDmkQ/scene.splinecode" />
      </div>

      <section className="print">
        <div>
          <h1 className="animate__animated animate__fadeInDown">
            Bienvenido a <span>My device</span>
          </h1>
          <p className="animate__animated animate__fadeInUp">
            <span>My Device</span> es tu guía personalizada para encontrar el
            teléfono o computador perfecto que se ajuste a tus necesidades
            específicas. Con una interfaz intuitiva y fácil de usar, esta página
            te ofrece recomendaciones precisas basadas en filtros
            meticulosamente diseñados. Ya sea que busques un smartphone con una
            cámara de alta resolución, una duración de batería excepcional o un
            procesador potente, "My Device" te permite refinar tus preferencias
            con opciones como sistema operativo, tamaño de pantalla,
            almacenamiento y más.
          </p>
          {/* <img src="https://portafolio-v2-three.vercel.app/assets/Recursos-img/Perfil-photos/Perfil_2.png" alt="" /> */}
          {/* <div className="cell-pc">
            <Spline scene="https://prod.spline.design/Wy0tjeteK8XwiKut/scene.splinecode" />
            <Spline scene="https://prod.spline.design/meVuuKWxU-Jefd4X/scene.splinecode" />
          </div>  */}
        </div>

        <div className="contenido"></div>
      </section>
    </section>
  );
}

export function Iconfooter({ urlimg, altimg }) {
  return (
    <div>
      <figure>
        <img
          style={{
            width: "55px",
            height: "55px",
            cursor: "pointer",
            opacity: "0.6",
            transition: "opacity 0.3s, transform 0.3s",
          }}
          src={urlimg}
          alt={altimg}
          onMouseOver={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "scale(1.2)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.opacity = "0.6";
            e.currentTarget.style.transform = "scale(1)";
          }}
        />
      </figure>
    </div>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="items-footer">
        <div className="copyright">
          <strong>
            Creado por <a href="">Camilo sol</a>
          </strong>
        </div>
      </div>
    </footer>
  );
}
