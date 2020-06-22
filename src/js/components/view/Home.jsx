import React, { Component } from 'react';


class App extends Component {
  render() 
  {
      console.log("default view");
    return (
      <div className="App">       
        <div className="content-wrapper">          
          {/*<div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Dashboard v2</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">Dashboard v2</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>*/}
        
          <section className="content">
      <div className="container-fluid">
         { /* Info boxes  */ }
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box">
              <span className="info-box-icon bg-info elevation-1"><i className="fas fa-cog"></i></span>

              <div className="info-box-content">
                <span className="info-box-text">PROJECTS</span>
                <span className="info-box-number">
                  10
                  <small>%</small>
                </span>
              </div>
               { /* /.info-box-content  */ }
            </div>
             { /* /.info-box  */ }
          </div>
           { /* /.col  */ }
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-danger elevation-1"><i className="fas fa-thumbs-up"></i></span>

              <div className="info-box-content">
                <span className="info-box-text">MENTORS</span>
                <span className="info-box-number">41,410</span>
              </div>
               { /* /.info-box-content  */ }
            </div>
             { /* /.info-box  */ }
          </div>
           { /* /.col  */ }

           { /* fix for small devices only  */ }
          <div className="clearfix hidden-md-up"></div>

          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-success elevation-1"><i className="fas fa-shopping-cart"></i></span>

              <div className="info-box-content">
                <span className="info-box-text">GOALS</span>
                <span className="info-box-number">760</span>
              </div>
               { /* /.info-box-content  */ }
            </div>
             { /* /.info-box  */ }
          </div>
           { /* /.col  */ }
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-warning elevation-1"><i className="fas fa-users"></i></span>

              <div className="info-box-content">
                <span className="info-box-text">CONTACTS</span>
                <span className="info-box-number">2,000</span>
              </div>
               { /* /.info-box-content  */ }
            </div>
             { /* /.info-box  */ }
          </div>
           { /* /.col  */ }
        </div>
         { /* /.row  */ }

        

         { /* Main row  */ }
        <div className="row">
           
                
          <div className="col-md-8">
            
            <div className="row">
              
              <div className="col-md-12">
              <div className="time-header">
                        <h3>Recent Activities</h3>
              </div>
              <div className="timeline">
                    <div className="time-label">
                        <span className="bg-green">23 Aug. 2019</span>
                    </div>
                    <div>
                    
                        <i className="fas fa-envelope bg-blue"></i>
                        
                        <div className="timeline-item">
                        
                        <span className="time"><i className="fas fa-clock"></i> 12:05</span>
                        
                        <h3 className="timeline-header"><a href="#">Support Team</a> sent you an email</h3>
                       
                        <div className="timeline-body">
                            Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                            weebly ning heekya handango imeem plugg dopplr jibjab, movity
                            jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                            quora plaxo ideeli hulu weebly balihoo...
                        </div>
                        
                        <div className="timeline-footer">
                            <a className="btn btn-primary btn-sm">Read more</a>
                            <a className="btn btn-danger btn-sm">Delete</a>
                        </div>
                        </div>
                    </div>
                    
                    <div>
                        <i className="fas fa-clock bg-gray"></i>
                    </div>
                    </div>
                    
                 
              </div>
               { /* /.col  */ }
            </div>
             { /* /.row  */ }
            
          </div>
           { /* /.col  */ }

          <div className="col-md-4">
          { /* USERS LIST  */ }
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Mentors</h3>

                    <div className="card-tools">
                      <span className="badge badge-danger">8 New Members</span>
                      <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i>
                      </button>
                      <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                   { /* /.card-header  */ }
                  <div className="card-body p-0">
                    <ul className="users-list clearfix">
                      <li>
                        <img src="dist/img/user1-128x128.jpg" alt="User Image"/>
                        <a className="users-list-name" href="#">Alexander Pierce</a>
                        <span className="users-list-date">Today</span>
                      </li>
                      <li>
                        <img src="dist/img/user8-128x128.jpg" alt="User Image"/>
                        <a className="users-list-name" href="#">Norman</a>
                        <span className="users-list-date">Yesterday</span>
                      </li>
                      <li>
                        <img src="dist/img/user7-128x128.jpg" alt="User Image"/>
                        <a className="users-list-name" href="#">Jane</a>
                        <span className="users-list-date">12 Jan</span>
                      </li>
                      <li>
                        <img src="dist/img/user6-128x128.jpg" alt="User Image"/>
                        <a className="users-list-name" href="#">John</a>
                        <span className="users-list-date">12 Jan</span>
                      </li>
                      <li>
                        <img src="dist/img/user2-160x160.jpg" alt="User Image"/>
                        <a className="users-list-name" href="#">Alexander</a>
                        <span className="users-list-date">13 Jan</span>
                      </li>
                      <li>
                        <img src="dist/img/user5-128x128.jpg" alt="User Image"/>
                        <a className="users-list-name" href="#">Sarah</a>
                        <span className="users-list-date">14 Jan</span>
                      </li>
                      <li>
                        <img src="dist/img/user4-128x128.jpg" alt="User Image"/>
                        <a className="users-list-name" href="#">Nora</a>
                        <span className="users-list-date">15 Jan</span>
                      </li>
                      <li>
                        <img src="dist/img/user3-128x128.jpg" alt="User Image"/>
                        <a className="users-list-name" href="#">Nadia</a>
                        <span className="users-list-date">15 Jan</span>
                      </li>
                    </ul>
                     { /* /.users-list  */ }
                  </div>
                   { /* /.card-body  */ }
                  <div className="card-footer text-center">
                    <a href="#">View All Users</a>
                  </div>
                   { /* /.card-footer  */ }
                </div>
                 { /*/.card  */ }
      
          </div>
           { /* /.col  */ }
        </div>
         { /* /.row  */ }
      </div> { /*/. container-fluid  */ }
    </section>
        </div>        
      </div>
    );
  }
}

export default App;
