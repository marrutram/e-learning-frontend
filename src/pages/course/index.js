import React, { Component } from 'react';
import CardCollapse from '../../components/Cards/Collapse';
import {Link} from 'react-router-dom';
import PageHeading from '../../components/PageHeading';

//Navigation
import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';

const items = [
    {
        course: {
            title: 'Técnicas de negociación',
            collapseId: "negotiation_techniques",
            module: '3 Módulos',
            desc: 'Competencia a desarrollar: Aplicar técnicas de negociación  basadas en los siete principios del método propuesto por la  Universidad de Harvard. \n',
            image: './img/negotiation_techniques.png',
            progress: 10,
            to: '/module/1'
        },
    },
    {
        course: {
            title: "Herramientas digitales",
            collapseId: "digital_tools",
            module: '3 Módulos',
            desc: "Obtenga más información sobre cómo tomar decisiones empresariales. Alcanzará sus objetivos rápidamente, ganará confianza y aprenderá a su propio ritmo.",
            image: './img/digital_tools.png',
            progress: 30,
            to: '/module/1'
        },
    },
    {
        course: {
            title: 'Manejo y prevencion del estres',
            collapseId: "stress_management_prevention",
            module: '2 Módulos',
            desc: 'Conoces como armar equipos de trabajo y colaborar vía chat y canales de información; en lugar de sólo correo electrónico y carpetas de archivos.',
            image: './img/stress_management_prevention.png',
            progress: 50,
            to: '/module/1'
        },
    },
    {
        course: {
            title: 'Presentación efectiva',
            collapseId: "effective_presentation",
            module: '4 Módulos',
            desc: 'Herramientas necesarias para la administración de un grato clima organizacional, logrando desarrollar herramientas prácticas para la administración de conflictos y desarrollar. ',
            image: './img/effective_presentation.png',
            progress: 10,
            to: '/module/1'
        },
    },
    {
        course: {
            title: 'Gestion Eficaz del Tiempo',
            collapseId: "effective_time_management",
            module: '5 Módulos',
            desc: 'Desarrolla habilidades que le permitan colaborar gestión de distintas unidades de negocios. Adquirir técnicas para mejorar la productividad y rendimiento del tiempo.',
            image: './img/effective_time_management.png',
            progress: 90,
            to: '/module/1'
        },
    },
];

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
                                    {items.map((pos, i) => (
                                        <div className="col-lg-12" key={"course_"+i}>
                                            <CardCollapse title={pos.course.title} collapseId={pos.course.collapseId}>
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div className="carousel__slide-item-img-link row" >
                                                            <Link className="nav-link" to={pos.course.to}>
                                                                <img src={pos.course.image} alt={pos.course.title} />
                                                            </Link>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <div className="row">
                                                            <h4>{pos.course.title}</h4>
                                                        </div>
                                                        {pos.course.module &&
                                                            <div className="row">
                                                                <h6>{pos.course.module}</h6>
                                                            </div>
                                                        }
                                                        {pos.course.progress &&
                                                            <div className="progress row">
                                                                <div className="progress-bar" role="progressbar" style={{width: pos.course.progress +'%'}}  aria-valuemin="0" aria-valuemax="100">
                                                                    {pos.course.progress}%
                                                                </div>
                                                            </div>
                                                        }
                                                        <br/>
                                                        <div className="row">
                                                            <p className="text-carousel">{pos.course.desc}</p>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2"></div>
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
    }
}

export default Cards;