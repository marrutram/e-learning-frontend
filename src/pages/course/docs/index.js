import React from 'react';
import './index.scss';
import {Link} from 'react-router-dom';
import Sidebar from "../../../components/Navigation/Sidebar";
import Topbar from "../../../components/Navigation/Topbar";
import PageHeading from "../../../components/PageHeading";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const ViewDoc = () => {
    const path = window.location.href.split('/')
    const pathUrl = path[6] + "/" + path[7] + "/" +  path[8];
    const url = "https://bucket-courses.s3.amazonaws.com/course/" + pathUrl;
    const title = path[8]
    const docs = [
        { uri: url}
    ];
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

                        <PageHeading title="Mis Documentos" />

                        <div className="card shadow mb-4">
                            <div className="card-header py-3 doc-card-header">
                                    <Link className="btn btn-primary" to={to}>
                                        <i className="fas fa-arrow-left fa-sm"></i>
                                    </Link>
                                    <h6 className="m-0 font-weight-bold text-primary doc-title">
                                        {title}
                                    </h6>
                            </div>
                            <div className="card-body">
                                <div className="col-lg-12">
                                    <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default ViewDoc;