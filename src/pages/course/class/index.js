import React from 'react';
import './index.scss';
import Sidebar from "../../../components/Navigation/Sidebar";
import Topbar from "../../../components/Navigation/Topbar";
import PageHeading from "../../../components/PageHeading";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const Class = () => {
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
                                <iframe width="600" height="400" src={`https://bucket-courses.s3.amazonaws.com/effective_communication/scorm/scorm_one/story.html`} title="W3Schools Free Online Web Tutorials">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default Class;