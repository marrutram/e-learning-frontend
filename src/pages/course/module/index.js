import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from "../../../components/Navigation/Sidebar";
import Topbar from "../../../components/Navigation/Topbar";
import PageHeading from "../../../components/PageHeading";
import CardCollapse from "../../../components/Cards/Collapse";
import './index.scss';

const CourseModule = () => {
    const collection = {
        1: {
            course: {
                title: 'Presentación efectiva',
                collapseId: "effective_presentation",
                module: '4 Módulos',
                desc: 'Herramientas necesarias para la administración de un grato clima organizacional, logrando desarrollar herramientas prácticas para la administración de conflictos y desarrollar. ',
                image: '../img/effective_presentation.png',
                progress: 10,
                to: '/class/course/1/effective_communication/1',
                modules: [
                    {
                        title: 'Modulo I',
                        description: 'Características y tipos de reuniones',
                        collapseId: "negotiation_techniques",
                        to: '/document/class/effective_communication/1',
                    },
                    {
                        title: 'Módulo II',
                        description: 'Desarrollando una reunión efectiva',
                        collapseId: "negotiation_techniques",
                        to: '/1/document/class/effective_communication/2',
                    },
                    {
                        title: 'Módulo III',
                        description: '¿Cómo hacer una presentación?',
                        collapseId: "negotiation_techniques",
                        to: '/1/document/class/effective_communication/3',
                    },
                    {
                        title: 'Módulo IV',
                        description: 'Técnicas claves para una presentación efectiva',
                        collapseId: "negotiation_techniques",
                        to: '/1/document/class/effective_communication/4',
                    }
                ]
            },
        },
        2: {
            course: {
                title: 'Herramientas digitales',
                collapseId: "digital_tools",
                module: '3 Módulos',
                desc: "Obtenga más información sobre cómo tomar decisiones empresariales. Alcanzará sus objetivos rápidamente, ganará confianza y aprenderá a su propio ritmo.",
                image: '../img/digital_tools.png',
                progress: 50,
                to: '/class/course/2/digital_tools/1',
                modules: [
                    {
                        title: 'Modulo I',
                        description: 'Mis Herramientas',
                        collapseId: "digital_tools",
                        to: '/class/course/2/digital_tools/1',
                        download: [
                            {
                                icon: "fas fa-play fa-fw",
                                title: 'Infografía',
                                to: null,
                            },
                            {
                                icon: "fas fa-book fa-fw",
                                title: 'Resumen temático',
                                to: '/document/course/2/digital_tools/thematic_summary/thematic_summary_1.pdf',
                            },
                            {
                                icon: "fas fa-map fa-fw",
                                title: 'Glosario',
                                to: '/document/course/2/digital_tools/glossary/glossary_1.pdf',
                            },
                            {
                                icon: "fas fa-clipboard fa-fw",
                                title: 'Casos práctico',
                                to: '/document/course/2/digital_tools/practical_cases/practical_cases_1.docx',
                            },
                            {
                                icon: "fas fa-pen fa-fw",
                                title: 'Evaluacion de módulo',
                                to: '/document/course/2/digital_tools/module_evaluation/module_evaluation_1.docx',
                            }
                        ],
                    },
                    {
                        title: 'Módulo II',
                        description: 'Problemas Frecuentes de conexión',
                        collapseId: "digital_tools",
                        to: '/class/course/2/digital_tools/2',
                        download: [
                            {
                                icon: "fas fa-play fa-fw",
                                title: 'Infografía',
                                to: null,
                            },
                            {
                                icon: "fas fa-book fa-fw",
                                title: 'Resumen temático',
                                to: '/document/course/2/digital_tools/thematic_summary/thematic_summary_2.pdf',
                            },
                            {
                                icon: "fas fa-map fa-fw",
                                title: 'Glosario',
                                to: '/document/course/2/digital_tools/glossary/glossary_2.pdf',
                            },
                            {
                                icon: "fas fa-clipboard fa-fw",
                                title: 'Casos práctico',
                                to: '/document/course/2/digital_tools/practical_cases/practical_cases_2.docx',
                            },
                            {
                                icon: "fas fa-pen fa-fw",
                                title: 'Evaluacion de módulo',
                                to: '/document/course/2/digital_tools/module_evaluation/module_evaluation_2.docx',
                            }
                        ],
                    },
                    {
                        title: 'Módulo III',
                        description: 'Manos a la Obra',
                        collapseId: "digital_tools",
                        to: '/class/course/2/digital_tools/3',
                        download: [
                            {
                                icon: "fas fa-play fa-fw",
                                title: 'Infografía',
                                to: null,
                            },
                            {
                                icon: "fas fa-book fa-fw",
                                title: 'Resumen temático',
                                to: '/document/course/2/digital_tools/thematic_summary/thematic_summary_3.pdf',
                            },
                            {
                                icon: "fas fa-map fa-fw",
                                title: 'Glosario',
                                to: '/document/course/2/digital_tools/glossary/glossary_3.pdf',
                            },
                            {
                                icon: "fas fa-clipboard fa-fw",
                                title: 'Casos práctico',
                                to: '/document/course/2/digital_tools/practical_cases/practical_cases_3.docx',
                            },
                            {
                                icon: "fas fa-pen fa-fw",
                                title: 'Evaluacion de módulo',
                                to: '/document/course/2/digital_tools/module_evaluation/module_evaluation_3.docx',
                            }
                        ],
                    }
                ]
            },
        }};
        const path = window.location.href.split('/')
        const item = collection[path[4]];
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
                                            <CardCollapse title={pos.title + ": " + pos.description} collapseId={pos.collapseId+i}>
                                                <Link className="row mb-1" to={pos.to}>
                                                    <div className="col-2">
                                                        <i className="fas fa-play fa-fw "></i>
                                                    </div>
                                                    <div className="col-10">
                                                        <p>{pos.description}</p>
                                                    </div>
                                                </Link>
                                                {pos.download.map((item, i) => item.to && (
                                                <Link className="row mb-1" to={item.to}>
                                                    <div className="col-2">
                                                        <i className={item.icon} ></i>
                                                    </div>
                                                    <div className="col-10">
                                                        <p>{item.title}</p>
                                                    </div>
                                                    </Link>
                                                ))}
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