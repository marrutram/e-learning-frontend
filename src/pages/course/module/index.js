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
                title: 'Técnicas de negociación',
                collapseId: "negotiation_techniques",
                desc: 'Competencia a desarrollar: Aplicar técnicas de negociación  basadas en los siete principios del método propuesto por la  Universidad de Harvard. \n',
                image: '../img/negotiation_techniques.png',
                progress: 10,
                to: '/course/effective_communication/1',
                modules: [
                    {
                        title: 'Bienvenidad',
                        description: 'Modulo de bienvenidad',
                        collapseId: "negotiation_techniques",
                        to: '/class/effective_communication/1',
                    },
                    {
                        title: 'Modulo I',
                        description: 'Modulo de bienvenidad',
                        collapseId: "negotiation_techniques",
                        to: '/class/effective_communication/1',
                    },
                    {
                        title: 'Modulo 2',
                        description: 'Modulo de bienvenidad',
                        collapseId: "negotiation_techniques",
                        to: '/class/effective_communication/1',
                    },
                    {
                        title: 'Modulo 3',
                        description: 'Modulo de bienvenidad',
                        collapseId: "negotiation_techniques",
                        to: '/class/effective_communication/1',
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
                                    <div className="row ml-0">
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