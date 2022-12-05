import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from "../../../components/Navigation/Sidebar";
import Topbar from "../../../components/Navigation/Topbar";
import PageHeading from "../../../components/PageHeading";
import CardCollapse from "../../../components/Cards/Collapse";
import './index.scss';

const CourseModule = () => {
    const item =
        {
            course: {
                title: 'Presentación efectiva',
                collapseId: "effective_presentation",
                module: '4 Módulos',
                desc: 'Herramientas necesarias para la administración de un grato clima organizacional, logrando desarrollar herramientas prácticas para la administración de conflictos y desarrollar. ',
                image: '../img/effective_presentation.png',
                progress: 10,
                to: '/course/effective_communication/1',
                modules: [
                    {
                        title: 'Modulo I',
                        description: 'Características y tipos de reuniones',
                        collapseId: "negotiation_techniques",
                        to: '/class/effective_communication/1',
                    },
                    {
                        title: 'Módulo II',
                        description: 'Desarrollando una reunión efectiva',
                        collapseId: "negotiation_techniques",
                        to: '/class/effective_communication/2',
                    },
                    {
                        title: 'Módulo III',
                        description: '¿Cómo hacer una presentación?',
                        collapseId: "negotiation_techniques",
                        to: '/class/effective_communication/3',
                    },
                    {
                        title: 'Módulo IV',
                        description: 'Técnicas claves para una presentación efectiva',
                        collapseId: "negotiation_techniques",
                        to: '/class/effective_communication/4',
                    }
                ]
            },
        };
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

                                <PageHeading title={item.course.title} />

                                {/* <!-- Content Row --> */}

                                <div className="container-fluid">
                                    <div className="row ml-3">
                                        <div className="col-lg-4">
                                            <div className="carousel__slide-item-img-link row" >
                                                <img src={item.course.image} alt={item.course.title} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            {item.course.progress &&
                                                <div className="progress row">
                                                    <div className="progress-bar" role="progressbar" style={{width: item.course.progress +'%'}}  aria-valuemin="0" aria-valuemax="100">
                                                        {item.course.progress}%
                                                    </div>
                                                </div>

                                            }

                                            <div className="row">
                                                <br/>
                                                <p className="text-carousel">{item.course.desc}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {item.course.modules.map((pos, i) => (
                                        <div className="col-lg-12" key={"module_"+i}>
                                            <CardCollapse title={pos.title} collapseId={pos.collapseId+i}>
                                                <Link className="row" to={pos.to}>
                                                    <div className="col-2">
                                                        <i className="fas fa-play fa-fw "></i>
                                                    </div>
                                                    <div className="col-10">
                                                        <p>{pos.description}</p>
                                                    </div>
                                                </Link>
                                            </CardCollapse>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
};

export default CourseModule;