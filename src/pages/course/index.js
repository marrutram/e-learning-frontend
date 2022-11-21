import React, { Component } from 'react';
import CardCollapse from '../../components/Cards/Collapse';

import PageHeading from '../../components/PageHeading';

//Navigation
import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';

class Cards extends Component {
    render() {
        return (
            <div>
                <div id="wrapper">

                    {/* <!-- Sidebar --> */}
                    <Sidebar />
                    <div id="content-wrapper" className="d-flex flex-column">

                        {/* <!-- Main Content --> */}
                        <div id="content">

                            {/* <!-- Topbar --> */}
                            <Topbar />
                            {/* <!-- End of Topbar --> */}

                            {/* <!-- Begin Page Content --> */}
                            <div className="container-fluid">

                                {/* <!-- Page Heading --> */}

                                <PageHeading title="Mis Cursos" />

                                {/* <!-- Content Row --> */}

                                <div className="row">
                                    <div className="col-lg-12">
                                        <CardCollapse title="Módulo 1">
                                            The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!
                                        </CardCollapse>
                                    </div>
                                    <div className="col-lg-12">
                                        <CardCollapse title="Módulo 2">
                                            The styling for this basic card example is created by using default
                                            Bootstrap utility classes. By using utility classes, the style of the card
                                            component can be easily modified with no need for any custom CSS!
                                        </CardCollapse>
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

export default Cards;