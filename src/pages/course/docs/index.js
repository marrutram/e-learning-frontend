import React from 'react';
import './index.scss';
import Sidebar from "../../../components/Navigation/Sidebar";
import Topbar from "../../../components/Navigation/Topbar";
import PageHeading from "../../../components/PageHeading";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const ViewDoc = () => {
    const url = "https://bucket-courses.s3.amazonaws.com/course/digital_tools/glossary/glossary_1.pdf"
    const docs = [
        { uri: url}
    ];

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
                            <div className="col-lg-12">
                                <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />;
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default ViewDoc;