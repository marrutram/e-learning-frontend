import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';



class SignIn extends Component {
    componentWillMount(){
        document.getElementById('body').className='bg-gradient-primary'
      }

      handleSignIn = () => {
        this.props.history.push("/home");
    }

    render() {
        return (
            <div className="container">
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
                          <form onSubmit={this.handleSignIn} className="user">
                            <div className="form-group">
                              <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Usuario"/>
                            </div>
                            <div className="form-group">
                              <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Contraseña"/>
                            </div>
                            <div className="form-group">
                              <div className="custom-control custom-checkbox small">
                                <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                <label className="custom-control-label" for="customCheck">Recordar</label>
                              </div>
                            </div>
                            <button  type="submit" className="btn btn-primary btn-user btn-block">
                              Ingresar
                            </button>
                            <hr/>
                          </form>
                          <hr/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )
    }
}

export default withRouter(SignIn);