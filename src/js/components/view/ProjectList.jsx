import React, { Component } from 'react';


class ProjectList extends Component {
  render() 
  {
      
    return (
        
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Projects</h3>
  
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i className="fas fa-minus"></i></button>
              <button type="button" className="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                <i className="fas fa-times"></i></button>
            </div>
          </div>
          <div className="card-body p-0">
            <table className="table table-striped projects">
                <thead>
                    <tr>
                        <th >
                            #
                        </th>
                        <th >
                            Project Name
                        </th>
                        <th >
                            Team Members
                        </th>
                        <th>
                            Project Progress
                        </th>
                        <th  className="text-center">
                            Status
                        </th>
                        <th >
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            #
                        </td>
                        <td>
                            <a>
                                AdminLTE v3
                            </a>
                            <br/>
                            <small>
                                Created 01.01.2019
                            </small>
                        </td>
                        <td>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar.png"/>
                                </li>
                                <li className="list-inline-item">
                                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar2.png"/>
                                </li>
                                <li className="list-inline-item">
                                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar3.png"/>
                                </li>
                                <li className="list-inline-item">
                                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar04.png"/>
                                </li>
                            </ul>
                        </td>
                        <td className="project_progress">
                            <div className="progress progress-sm">
                                <div className="progress-bar bg-green" role="progressbar" aria-volumenow="57" aria-volumemin="0" aria-volumemax="100" >
                                </div>
                            </div>
                            <small>
                                57% Complete
                            </small>
                        </td>
                        <td className="project-state">
                            <span className="badge badge-success">Success</span>
                        </td>
                        <td className="project-actions text-right">
                            <a className="btn btn-primary btn-sm" href="#">
                                <i className="fas fa-folder">
                                </i>
                                View
                            </a>
                            <a className="btn btn-info btn-sm" href="#">
                                <i className="fas fa-pencil-alt">
                                </i>
                                Edit
                            </a>
                            <a className="btn btn-danger btn-sm" href="#">
                                <i className="fas fa-trash">
                                </i>
                                Delete
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            #
                        </td>
                        <td>
                            <a>
                                AdminLTE v3
                            </a>
                            <br/>
                            <small>
                                Created 01.01.2019
                            </small>
                        </td>
                        <td>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar.png" />
                                </li>
                                <li className="list-inline-item">
                                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar2.png" />
                                </li>
                            </ul>
                        </td>
                        <td className="project_progress">
                            <div className="progress progress-sm">
                                <div className="progress-bar bg-green" role="progressbar" aria-volumenow="47" aria-volumemin="0" aria-volumemax="100">
                                </div>
                            </div>
                            <small>
                                47% Complete
                            </small>
                        </td>
                        <td className="project-state">
                            <span className="badge badge-success">Success</span>
                        </td>
                        <td className="project-actions text-right">
                            <a className="btn btn-primary btn-sm" href="#">
                                <i className="fas fa-folder">
                                </i>
                                View
                            </a>
                            <a className="btn btn-info btn-sm" href="#">
                                <i className="fas fa-pencil-alt">
                                </i>
                                Edit
                            </a>
                            <a className="btn btn-danger btn-sm" href="#">
                                <i className="fas fa-trash">
                                </i>
                                Delete
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            #
                        </td>
                        <td>
                            <a>
                                AdminLTE v3
                            </a>
                            <br/>
                            <small>
                                Created 01.01.2019
                            </small>
                        </td>
                        <td>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar.png" />
                                </li>
                                <li className="list-inline-item">
                                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar2.png" />
                                </li>
                                <li className="list-inline-item">
                                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar3.png" />
                                </li>
                            </ul>
                        </td>
                        <td className="project_progress">
                            <div className="progress progress-sm">
                                <div className="progress-bar bg-green" role="progressbar" aria-volumenow="77" aria-volumemin="0" aria-volumemax="100">
                                </div>
                            </div>
                            <small>
                                77% Complete
                            </small>
                        </td>
                        <td className="project-state">
                            <span className="badge badge-success">Success</span>
                        </td>
                        <td className="project-actions text-right">
                            <a className="btn btn-primary btn-sm" href="#">
                                <i className="fas fa-folder">
                                </i>
                                View
                            </a>
                            <a className="btn btn-info btn-sm" href="#">
                                <i className="fas fa-pencil-alt">
                                </i>
                                Edit
                            </a>
                            <a className="btn btn-danger btn-sm" href="#">
                                <i className="fas fa-trash">
                                </i>
                                Delete
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            #
                        </td>
                        <td>
                            <a>
                                AdminLTE v3
                            </a>
                            <br/>
                            <small>
                                Created 01.01.2019
                            </small>
                        </td>
                        <td>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar.png" />
                                </li>
                                <li className="list-inline-item">
                                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar2.png" />
                                </li>
                                <li className="list-inline-item">
                                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar3.png" />
                                </li>
                                <li className="list-inline-item">
                                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar04.png" />
                                </li>
                            </ul>
                        </td>
                        <td className="project_progress">
                            <div className="progress progress-sm">
                                <div className="progress-bar bg-green" role="progressbar" aria-volumenow="60" aria-volumemin="0" aria-volumemax="100" >
                                </div>
                            </div>
                            <small>
                                60% Complete
                            </small>
                        </td>
                        <td className="project-state">
                            <span className="badge badge-success">Success</span>
                        </td>
                        <td className="project-actions text-right">
                            <a className="btn btn-primary btn-sm" href="#">
                                <i className="fas fa-folder">
                                </i>
                                View
                            </a>
                            <a className="btn btn-info btn-sm" href="#">
                                <i className="fas fa-pencil-alt">
                                </i>
                                Edit
                            </a>
                            <a className="btn btn-danger btn-sm" href="#">
                                <i className="fas fa-trash">
                                </i>
                                Delete
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            #
                        </td>
                        <td>
                            <a>
                                AdminLTE v3
                            </a>
                            <br/>
                            <small>
                                Created 01.01.2019
                            </small>
                        </td>
                        <td>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar.png" />
                                </li>
                                <li className="list-inline-item">
                                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar04.png" />
                                </li>
                                <li className="list-inline-item">
                                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar5.png" />
                                </li>
                            </ul>
                        </td>
                        <td className="project_progress">
                            <div className="progress progress-sm">
                                <div className="progress-bar bg-green" role="progressbar" aria-volumenow="12" aria-volumemin="0" aria-volumemax="100" >
                                </div>
                            </div>
                            <small>
                                12% Complete
                            </small>
                        </td>
                        <td className="project-state">
                            <span className="badge badge-success">Success</span>
                        </td>
                        <td className="project-actions text-right">
                            <a className="btn btn-primary btn-sm" href="#">
                                <i className="fas fa-folder">
                                </i>
                                View
                            </a>
                            <a className="btn btn-info btn-sm" href="#">
                                <i className="fas fa-pencil-alt">
                                </i>
                                Edit
                            </a>
                            <a className="btn btn-danger btn-sm" href="#">
                                <i className="fas fa-trash">
                                </i>
                                Delete
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            #
                        </td>
                        <td>
                            <a>
                                AdminLTE v3
                            </a>
                            <br/>
                            <small>
                                Created 01.01.2019
                            </small>
                        </td>
                        <td>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar.png" />
                                </li>
                                <li className="list-inline-item">
                                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar2.png" />
                                </li>
                                <li className="list-inline-item">
                                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar3.png" />
                                </li>
                                <li className="list-inline-item">
                                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar04.png" />
                                </li>
                            </ul>
                        </td>
                        <td className="project_progress">
                            <div className="progress progress-sm">
                                <div className="progress-bar bg-green" role="progressbar" aria-volumenow="35" aria-volumemin="0" aria-volumemax="100" >
                                </div>
                            </div>
                            <small>
                                35% Complete
                            </small>
                        </td>
                        <td className="project-state">
                            <span className="badge badge-success">Success</span>
                        </td>
                        <td className="project-actions text-right">
                            <a className="btn btn-primary btn-sm" href="#">
                                <i className="fas fa-folder">
                                </i>
                                View
                            </a>
                            <a className="btn btn-info btn-sm" href="#">
                                <i className="fas fa-pencil-alt">
                                </i>
                                Edit
                            </a>
                            <a className="btn btn-danger btn-sm" href="#">
                                <i className="fas fa-trash">
                                </i>
                                Delete
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            #
                        </td>
                        <td>
                            <a>
                                AdminLTE v3
                            </a>
                            <br/>
                            <small>
                                Created 01.01.2019
                            </small>
                        </td>
                        <td>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar04.png" />
                                </li>
                                <li className="list-inline-item">
                                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar5.png" />
                                </li>
                            </ul>
                        </td>
                        <td className="project_progress">
                            <div className="progress progress-sm">
                                <div className="progress-bar bg-green" role="progressbar" aria-volumenow="87" aria-volumemin="0" aria-volumemax="100" >
                                </div>
                            </div>
                            <small>
                                87% Complete
                            </small>
                        </td>
                        <td className="project-state">
                            <span className="badge badge-success">Success</span>
                        </td>
                        <td className="project-actions text-right">
                            <a className="btn btn-primary btn-sm" href="#">
                                <i className="fas fa-folder">
                                </i>
                                View
                            </a>
                            <a className="btn btn-info btn-sm" href="#">
                                <i className="fas fa-pencil-alt">
                                </i>
                                Edit
                            </a>
                            <a className="btn btn-danger btn-sm" href="#">
                                <i className="fas fa-trash">
                                </i>
                                Delete
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            #
                        </td>
                        <td>
                            <a>
                                AdminLTE v3
                            </a>
                            <br/>
                            <small>
                                Created 01.01.2019
                            </small>
                        </td>
                        <td>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar.png" />
                                </li>
                                <li className="list-inline-item">
                                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar3.png" />
                                </li>
                                <li className="list-inline-item">
                                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar04.png" />
                                </li>
                            </ul>
                        </td>
                        <td className="project_progress">
                            <div className="progress progress-sm">
                                <div className="progress-bar bg-green" role="progressbar" aria-volumenow="77" aria-volumemin="0" aria-volumemax="100">
                                </div>
                            </div>
                            <small>
                                77% Complete
                            </small>
                        </td>
                        <td className="project-state">
                            <span className="badge badge-success">Success</span>
                        </td>
                        <td className="project-actions text-right">
                            <a className="btn btn-primary btn-sm" href="#">
                                <i className="fas fa-folder">
                                </i>
                                View
                            </a>
                            <a className="btn btn-info btn-sm" href="#">
                                <i className="fas fa-pencil-alt">
                                </i>
                                Edit
                            </a>
                            <a className="btn btn-danger btn-sm" href="#">
                                <i className="fas fa-trash">
                                </i>
                                Delete
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            #
                        </td>
                        <td>
                            <a>
                                AdminLTE v3
                            </a>
                            <br/>
                            <small>
                                Created 01.01.2019
                            </small>
                        </td>
                        <td>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar.png" />
                                </li>
                                <li className="list-inline-item">
                                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar3.png" />
                                </li>
                                <li className="list-inline-item">
                                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar04.png" />
                                </li>
                                <li className="list-inline-item">
                                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar5.png" />
                                </li>
                            </ul>
                        </td>
                        <td className="project_progress">
                            <div className="progress progress-sm">
                                <div className="progress-bar bg-green" role="progressbar" aria-volumenow="77" aria-volumemin="0" aria-volumemax="100">
                                </div>
                            </div>
                            <small>
                                77% Complete
                            </small>
                        </td>
                        <td className="project-state">
                            <span className="badge badge-success">Success</span>
                        </td>
                        <td className="project-actions text-right">
                            <a className="btn btn-primary btn-sm" href="#">
                                <i className="fas fa-folder">
                                </i>
                                View
                            </a>
                            <a className="btn btn-info btn-sm" href="#">
                                <i className="fas fa-pencil-alt">
                                </i>
                                Edit
                            </a>
                            <a className="btn btn-danger btn-sm" href="#">
                                <i className="fas fa-trash">
                                </i>
                                Delete
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
          </div>
          {/* /.card-body */}
        </div>
       
    );
  }
}

export default ProjectList;
