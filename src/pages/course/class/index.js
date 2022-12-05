import React from 'react';
import './index.scss';
import Sidebar from "../../../components/Navigation/Sidebar";
import Topbar from "../../../components/Navigation/Topbar";
import PageHeading from "../../../components/PageHeading";

export default function Class() {
    const item =
        {
            effective_communication: {
                1: {
                    url: "https://bucket-courses.s3.amazonaws.com/course/effective_presentation/scorm/scorm_1/story.html"
                },
                2: {
                    url: "https://bucket-courses.s3.amazonaws.com/course/effective_presentation/scorm/scorm_2/story.html"
                },
                3: {
                    url: "https://bucket-courses.s3.amazonaws.com/course/effective_presentation/scorm/scorm_3/story.html"
                },
                4: {
                    url: "https://bucket-courses.s3.amazonaws.com/course/effective_presentation/scorm/scorm_3/story.html"
                }
            },
        };
    const path = window.location.href.split('/')
    const currentClass = item[path[4]][path[5]];
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

                        {/* <!-- Content Row --> */}

                        <div className="row">
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
};
