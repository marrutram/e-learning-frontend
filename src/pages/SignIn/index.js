import React, { useContext } from 'react';
import { useHistory, useLocation, Link } from "react-router-dom";
import { globalC } from "../../context";
import './index.scss';

export default function SignIn() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");
    const location = useLocation();
    const history = useHistory();
    const { authLogin, loginData } = useContext(globalC);

    if (authLogin) {
        const { from } = location.state || { from: { pathname: "/home" } };
        history.replace(from);
    }
    document.getElementById('body').className='bg-gradient-primary'

    const handleClick = () => {
        if (username==="admin" && password === "1234") loginData()
        else if (username != "" && password != "") setErrorMessage("usuario/contraseña incorrecta")
    }

    return (
        <div className="container sign-in">
            {/* <!-- Outer Row --> */}
            <div className="row justify-content-center">

                <div className="col-xl-10 col-lg-12 col-md-9">

                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            {/* <!-- Nested Row within Card Body --> */}
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Bienvenidos</h1>
                                        </div>
                                        <form className="user">
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-user"
                                                       id="username" aria-describedby="emailHelp"
                                                       placeholder="Usuario" required onChange={e =>setUsername(e.target.value)}/>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user"
                                                       id="password" placeholder="Contraseña" required onChange={e =>setPassword(e.target.value)}/>
                                            </div>
                                            {errorMessage &&
                                                <p style={{color:'red'}}>{errorMessage}</p>
                                            }
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input"
                                                           id="customCheck"/>
                                                    <label className="custom-control-label"
                                                           htmlFor="customCheck">Recordar</label>
                                                </div>
                                            </div>
                                            <button type="submit" onClick={handleClick} className="btn btn-primary btn-user btn-block">
                                                Ingresar
                                            </button>
                                            <hr/>
                                            <hr/>
                                            <a href="index.html" className="btn btn-google btn-user btn-block">
                                                <i className="fab fa-google fa-fw"></i> Login with Google
                                            </a>
                                            <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                                <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                            </a>
                                        </form>
                                        <hr/>
                                        <div className="text-center">
                                            <a className="small" href="forgot-password.html">Olvido contraseña ?</a>
                                        </div>
                                        <div className="text-center">
                                            <Link className="small" to="/signup">Crear Cuenta!</Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}