import React, { Component } from 'react';

//Navigation
import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';

import PageHeading from '../../components/PageHeading';
import Carousel from '../../components/Carousel'
import CarouselProgress from "../../components/CarouselProgress";

class Home extends Component {
  componentWillMount() {
    document.getElementById('body').className = 'page-top'
  }

  render() {
    return (
      <div>
        {/* <!-- Page Wrapper --> */}
        <div id="wrapper">

          {/* <!-- Sidebar --> */}
          <Sidebar />
          {/* <!-- End of Sidebar --> */}

          {/* <!-- Content Wrapper --> */}
          <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

              {/* <!-- Topbar --> */}
              <Topbar />
              {/* <!-- End of Topbar --> */}


              <div className="container-fluid">

                {/* <!-- Page Heading --> */}

                <PageHeading title="Mis Cursos" />

                <div className="container-fluid">
                  <Carousel/>
                </div>

              </div>

              <div className="container-fluid">

                {/* <!-- Page Heading --> */}

                <PageHeading title="Cursos en Desarrollo" />

                <div className="container-fluid">
                  <CarouselProgress/>
                </div>

              </div>
            </div>
            {/* <!-- End of Main Content --> */}

            {/* <!-- Footer --> */}
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright &copy; e-learning 2019</span>
                </div>
              </div>
            </footer>
            {/* <!-- End of Footer --> */}

          </div>
          {/* <!-- End of Content Wrapper --> */}

        </div>
        {/* <!-- End of Page Wrapper --> */}

        {/* <!-- Scroll to Top Button--> */}
        <a className="scroll-to-top rounded" href="e-learning-frontend/src/pages/Dashboard/index#page-top">
          <i className="fas fa-angle-up"></i>
        </a></div>
    )
  }
}

export default Home;