import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickMenuOpen } from '../../../redux/actions';
import './index.scss';

class Sidebar extends Component {
  render() {
    const { clickMenuOpen, toggled } = this.props;
    return (
      <ul className={toggled ? 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled' : 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'} id="accordionSidebar">

        {/* <!-- Sidebar - Brand --> */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
          <div className="sidebar-brand-icon">
              <img className="img-profile rounded-circle" src="../../img/logo_white.png" />
          </div>
          <div className="sidebar-brand-text mx-2">E-Learning Solutions</div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item">
          <Link className="nav-link" to="/home">
            <i className="fas fa-fw fa-home"></i>
            <span>Inicio</span></Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Nav Item - Charts --> */}
        <li className="nav-item">
          <Link className="nav-link" to="/charts">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Mis Programas</span></Link>
        </li>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider" />

        {/* <!-- Nav Item - Tables --> */}
          <li className="nav-item">
              <Link className="nav-link" to="/course">
                  <i className="fas fa-fw fa-file"></i>
                  <span>Mis Cursos</span></Link>
          </li>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider" />

          {/* <!-- Nav Item - Tables --> */}
          <li className="nav-item">
              <a className="nav-link" href="tables.html">
                  <i className="fas fa-fw fa-table"></i>
                  <span>Noticias</span></a>
          </li>
          {/* <!-- Divider --> */}
          <hr className="sidebar-divider" />
          {/* <!-- Nav Item - Tables --> */}
          <li className="nav-item">
              <a className="nav-link" href="tables.html">
                  <i className="fas fa-fw fa-folder-open"></i>
                  <span>Biblioteca</span></a>
          </li>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider" />
          {/* <!-- Nav Item - Tables --> */}
          <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                  <i className="fas fa-fw fa-chart-pie"></i>
                  <span>Desempeño</span>
              </Link>
          </li>
          {/* <!-- Divider --> */}

          <hr className="sidebar-divider" />
          {/* <!-- Nav Item - Tables --> */}
          <li className="nav-item">
              <a className="nav-link" href="tables.html">
                  <i className="fas fa-fw fa-star"></i>
                  <span>Clima</span></a>
          </li>
        <hr className="sidebar-divider d-none d-md-block" />

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div className="text-center d-none d-md-inline">
          <button onClick={() => { clickMenuOpen() }} className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

      </ul>)
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickMenuOpen }, dispatch);

const mapStateToProps = store => ({
  toggled: store.menuState.menuOpen
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);