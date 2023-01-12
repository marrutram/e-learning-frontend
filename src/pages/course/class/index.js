import React from 'react';
import './index.scss';
import Sidebar from "../../../components/Navigation/Sidebar";
import Topbar from "../../../components/Navigation/Topbar";
import PageHeading from "../../../components/PageHeading";
import {Link} from "react-router-dom";

export default function Class() {
    const item =
        {
            effective_communication: {
                1: {
                    title: 'Modulo I',
                    description: 'Características y tipos de reuniones',
                    url: "https://bucket-courses.s3.amazonaws.com/course/effective_presentation/scorm/scorm_1/story.html"
                },
                2: {
                    title: 'Módulo II',
                    description: 'Desarrollando una reunión efectiva',
                    url: "https://bucket-courses.s3.amazonaws.com/course/effective_presentation/scorm/scorm_2/story.html"
                },
                3: {
                    title: 'Módulo III',
                    description: '¿Cómo hacer una presentación?',
                    url: "https://bucket-courses.s3.amazonaws.com/course/effective_presentation/scorm/scorm_3/story.html"
                },
                4: {
                    title: 'Módulo IV',
                    description: 'Técnicas claves para una presentación efectiva',
                    url: "https://bucket-courses.s3.amazonaws.com/course/effective_presentation/scorm/scorm_3/story.html"
                }
            },
            digital_tools: {
                1: {
                    title: 'Modulo I',
                    description: 'Mis Herramientas',
                    url: "https://bucket-courses.s3.amazonaws.com/course/digital_tools/scorm/scorm_1/story.html"
                },
                2: {
                    title: 'Módulo II',
                    description: 'Problemas Frecuentes de conexión',
                    url: "https://bucket-courses.s3.amazonaws.com/course/digital_tools/scorm/scorm_2/story.html"
                },
                3: {
                    title: 'Módulo III',
                    description: 'Manos a la Obra',
                    url: "https://bucket-courses.s3.amazonaws.com/course/digital_tools/scorm/scorm_3/story.html"
                }
            },
        };
    const path = window.location.href.split('/')
    const currentClass = item[path[6]][path[7]];
    const numberModulo = path[5];
    const to = "/course/" + numberModulo;
    return  <div>
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

                        <div className="card shadow mb-4">
                            <div className="card-header py-3 class-card-header">
                                <Link className="btn btn-primary" to={to}>
                                    <i className="fas fa-arrow-left fa-sm"></i>
                                </Link>
                                <h6 className="m-0 font-weight-bold text-primary class-title">{currentClass.title}: {currentClass.description}</h6>
                            </div>
                            <div className="card-body">
                                <div className="col-lg-12 scorm">
                                    <iframe width="700" height="400" src={currentClass.url} title="W3Schools Free Online Web Tutorials">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};
