import "./assets/style/CSS/login.css";
import "./assets/style/CSS/Fonts.css";
import { FaRegUserCircle } from "react-icons/fa";
import { GiPadlockOpen } from "react-icons/gi";

// Componente de Login con React y Material UI
export function Login() {
  return (
    <div>
      <section className="login-container">
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label id="label-username" htmlFor="username">
              <h4>User</h4>
            </label>
            <div className="input-div">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
              />
              <GiPadlockOpen className="icon" />
            </div>
          </div>
          <div className="form-group">
            <label id="label-password" htmlFor="password">
              <h4>Password</h4>
            </label>
            <div className="input-div">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              <FaRegUserCircle className="icon" />
            </div>
            <a href="" className="password-olvide">
              ¿Olvidaste la contraseña?
            </a>
          </div>

          <button h type="submit">Login</button>
          <h4 className="nocloud">
            ¿No tienes cuenta? <a href="">Regirtrarse</a>
          </h4>
        </form>
      </section>

      {/* Registro */}

      <section style={{display:""}} className="register-container">
        <h1>Registrarse</h1>
        <form>
          <div className="form-group">
            <label id="label-username" htmlFor="username">
              <h4>User</h4>
            </label>
            <div className="input-div">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
              />
              <GiPadlockOpen className="icon" />
            </div>
          </div>

          <div className="form-group">
            <label id="label-username" htmlFor="username">
              <h4>Email</h4>
            </label>
            <div className="input-div">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
              />
              <GiPadlockOpen className="icon" />
            </div>
          </div>

          <div className="form-group">
            <label id="label-password" htmlFor="password">
              <h4>Password</h4>
            </label>
            <div className="input-div">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              <FaRegUserCircle className="icon" />
            </div>
          </div>

          <div className="form-group">
            <label id="label-password" htmlFor="password">
              <h4>Confirmar password</h4>
            </label>
            <div className="input-div">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              <FaRegUserCircle className="icon" />
            </div>
          </div>
          <button type="submit">Registrarme</button>
        </form>
      </section>
    </div>
  );
}
