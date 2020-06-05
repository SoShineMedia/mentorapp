import React, { Component } from 'react';


class App extends Component {
  render() 
  {
      console.log("default view");
    return (
      <div className="App">      
        <div class="content-wrapper" style={{ marginTop: 40+"px" }}>
           
            <div class="content-header">
            
            </div>
          
            <div class="content">
            <div class="container">
                <div class="row">
                <div class="col-lg-8">
                    
                    <div class="timeline">
                    
                    <div class="time-label">
                        <span class="bg-green">23 Aug. 2019</span>
                    </div>
                    <div>
                    
                        <i class="fas fa-envelope bg-blue"></i>
                        
                        <div class="timeline-item">
                        
                        <span class="time"><i class="fas fa-clock"></i> 12:05</span>
                        
                        <h3 class="timeline-header"><a href="#">Support Team</a> sent you an email</h3>
                       
                        <div class="timeline-body">
                            Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                            weebly ning heekya handango imeem plugg dopplr jibjab, movity
                            jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                            quora plaxo ideeli hulu weebly balihoo...
                        </div>
                        
                        <div class="timeline-footer">
                            <a class="btn btn-primary btn-sm">Read more</a>
                            <a class="btn btn-danger btn-sm">Delete</a>
                        </div>
                        </div>
                    </div>
                    
                    <div>
                        <i class="fas fa-clock bg-gray"></i>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-lg-6">
                        
                        <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Recently Added Products</h3>
            
                            <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                <i class="fas fa-minus"></i>
                            </button>
                            <button type="button" class="btn btn-tool" data-card-widget="remove">
                                <i class="fas fa-times"></i>
                            </button>
                            </div>
                        </div>
                        
                        <div class="card-body p-0">
                            <ul class="products-list product-list-in-card pl-2 pr-2">
                            <li class="item">
                                <div class="product-img">
                                <img src="dist/img/default-150x150.png" alt="Product Image" class="img-size-50"/>
                                </div>
                                <div class="product-info">
                                <a href="javascript:void(0)" class="product-title">Samsung TV
                                    <span class="badge badge-warning float-right">$1800</span></a>
                                <span class="product-description">
                                    Samsung 32" 1080p 60Hz LED Smart HDTV.
                                </span>
                                </div>
                            </li>
                            
                            <li class="item">
                                <div class="product-img">
                                <img src="dist/img/default-150x150.png" alt="Product Image" class="img-size-50"/>
                                </div>
                                <div class="product-info">
                                <a href="javascript:void(0)" class="product-title">Bicycle
                                    <span class="badge badge-info float-right">$700</span></a>
                                <span class="product-description">
                                    26" Mongoose Dolomite Men's 7-speed, Navy Blue.
                                </span>
                                </div>
                            </li>
                            
                            <li class="item">
                                <div class="product-img">
                                <img src="dist/img/default-150x150.png" alt="Product Image" class="img-size-50"/>
                                </div>
                                <div class="product-info">
                                <a href="javascript:void(0)" class="product-title">
                                    Xbox One <span class="badge badge-danger float-right">
                                    $350
                                </span>
                                </a>
                                <span class="product-description">
                                    Xbox One Console Bundle with Halo Master Chief Collection.
                                </span>
                                </div>
                            </li>
                           
                            <li class="item">
                                <div class="product-img">
                                <img src="dist/img/default-150x150.png" alt="Product Image" class="img-size-50"/>
                                </div>
                                <div class="product-info">
                                <a href="javascript:void(0)" class="product-title">PlayStation 4
                                    <span class="badge badge-success float-right">$399</span></a>
                                <span class="product-description">
                                    PlayStation 4 500GB Console (PS4)
                                </span>
                                </div>
                            </li>
                            
                            </ul>
                        </div>
                        
                        <div class="card-footer text-center">
                            <a href="javascript:void(0)" class="uppercase">View All Products</a>
                        </div>
                       
                        </div>
                    </div>
                    <div class="col-lg-6">
                        
                        <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Recently Added Products</h3>
            
                            <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                <i class="fas fa-minus"></i>
                            </button>
                            <button type="button" class="btn btn-tool" data-card-widget="remove">
                                <i class="fas fa-times"></i>
                            </button>
                            </div>
                        </div>
                        
                        <div class="card-body p-0">
                            <ul class="products-list product-list-in-card pl-2 pr-2">
                            <li class="item">
                                <div class="product-img">
                                <img src="dist/img/default-150x150.png" alt="Product Image" class="img-size-50"/>
                                </div>
                                <div class="product-info">
                                <a href="javascript:void(0)" class="product-title">Samsung TV
                                    <span class="badge badge-warning float-right">$1800</span></a>
                                <span class="product-description">
                                    Samsung 32" 1080p 60Hz LED Smart HDTV.
                                </span>
                                </div>
                            </li>
                            
                            <li class="item">
                                <div class="product-img">
                                <img src="dist/img/default-150x150.png" alt="Product Image" class="img-size-50"/>
                                </div>
                                <div class="product-info">
                                <a href="javascript:void(0)" class="product-title">Bicycle
                                    <span class="badge badge-info float-right">$700</span></a>
                                <span class="product-description">
                                    26" Mongoose Dolomite Men's 7-speed, Navy Blue.
                                </span>
                                </div>
                            </li>
                            
                            <li class="item">
                                <div class="product-img">
                                <img src="dist/img/default-150x150.png" alt="Product Image" class="img-size-50"/>
                                </div>
                                <div class="product-info">
                                <a href="javascript:void(0)" class="product-title">
                                    Xbox One <span class="badge badge-danger float-right">
                                    $350
                                </span>
                                </a>
                                <span class="product-description">
                                    Xbox One Console Bundle with Halo Master Chief Collection.
                                </span>
                                </div>
                            </li>
                            
                            <li class="item">
                                <div class="product-img">
                                <img src="dist/img/default-150x150.png" alt="Product Image" class="img-size-50"/>
                                </div>
                                <div class="product-info">
                                <a href="javascript:void(0)" class="product-title">PlayStation 4
                                    <span class="badge badge-success float-right">$399</span></a>
                                <span class="product-description">
                                    PlayStation 4 500GB Console (PS4)
                                </span>
                                </div>
                            </li>
                            
                            </ul>
                        </div>
                        
                        <div class="card-footer text-center">
                            <a href="javascript:void(0)" class="uppercase">View All Products</a>
                        </div>
                        
                        </div>
                        
            
                    </div>
                    </div>
                    
                </div>
                <div class="col-lg-4">
                    
                   
                    <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">
                        <i class="ion ion-clipboard mr-1"></i>
                        To Do List
                        </h3>

                        <div class="card-tools">
                        <ul class="pagination pagination-sm">
                            <li class="page-item"><a href="#" class="page-link">&laquo;</a></li>
                            <li class="page-item"><a href="#" class="page-link">1</a></li>
                            <li class="page-item"><a href="#" class="page-link">2</a></li>
                            <li class="page-item"><a href="#" class="page-link">3</a></li>
                            <li class="page-item"><a href="#" class="page-link">&raquo;</a></li>
                        </ul>
                        </div>
                    </div>
                    
                    <div class="card-body">
                        <ul class="todo-list" data-widget="todo-list">
                        <li>
                            
                            <span class="handle">
                            <i class="fas fa-ellipsis-v"></i>
                            <i class="fas fa-ellipsis-v"></i>
                            </span>
                            
                            <div  class="icheck-primary d-inline ml-2">
                            <input type="checkbox" value="" name="todo1" id="todoCheck1"/>
                            <label for="todoCheck1"></label>
                            </div>
                            
                            <span class="text">Design a nice theme</span>
                            
                            <small class="badge badge-danger"><i class="far fa-clock"></i> 2 mins</small>
                            
                            <div class="tools">
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash-o"></i>
                            </div>
                        </li>
                        <li>
                            <span class="handle">
                            <i class="fas fa-ellipsis-v"></i>
                            <i class="fas fa-ellipsis-v"></i>
                            </span>
                            <div  class="icheck-primary d-inline ml-2">
                            <input type="checkbox" value="" name="todo2" id="todoCheck2" checked/>
                            <label for="todoCheck2"></label>
                            </div>
                            <span class="text">Make the theme responsive</span>
                            <small class="badge badge-info"><i class="far fa-clock"></i> 4 hours</small>
                            <div class="tools">
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash-o"></i>
                            </div>
                        </li>
                        <li>
                            <span class="handle">
                            <i class="fas fa-ellipsis-v"></i>
                            <i class="fas fa-ellipsis-v"></i>
                            </span>
                            <div  class="icheck-primary d-inline ml-2">
                            <input type="checkbox" value="" name="todo3" id="todoCheck3"/>
                            <label for="todoCheck3"></label>
                            </div>
                            <span class="text">Let theme shine like a star</span>
                            <small class="badge badge-warning"><i class="far fa-clock"></i> 1 day</small>
                            <div class="tools">
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash-o"></i>
                            </div>
                        </li>
                        <li>
                            <span class="handle">
                            <i class="fas fa-ellipsis-v"></i>
                            <i class="fas fa-ellipsis-v"></i>
                            </span>
                            <div  class="icheck-primary d-inline ml-2">
                            <input type="checkbox" value="" name="todo4" id="todoCheck4"/>
                            <label for="todoCheck4"></label>
                            </div>
                            <span class="text">Let theme shine like a star</span>
                            <small class="badge badge-success"><i class="far fa-clock"></i> 3 days</small>
                            <div class="tools">
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash-o"></i>
                            </div>
                        </li>
                        <li>
                            <span class="handle">
                            <i class="fas fa-ellipsis-v"></i>
                            <i class="fas fa-ellipsis-v"></i>
                            </span>
                            <div  class="icheck-primary d-inline ml-2">
                            <input type="checkbox" value="" name="todo5" id="todoCheck5"/>
                            <label for="todoCheck5"></label>
                            </div>
                            <span class="text">Check your messages and notifications</span>
                            <small class="badge badge-primary"><i class="far fa-clock"></i> 1 week</small>
                            <div class="tools">
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash-o"></i>
                            </div>
                        </li>
                        <li>
                            <span class="handle">
                            <i class="fas fa-ellipsis-v"></i>
                            <i class="fas fa-ellipsis-v"></i>
                            </span>
                            <div  class="icheck-primary d-inline ml-2">
                            <input type="checkbox" value="" name="todo6" id="todoCheck6"/>
                            <label for="todoCheck6"></label>
                            </div>
                            <span class="text">Let theme shine like a star</span>
                            <small class="badge badge-secondary"><i class="far fa-clock"></i> 1 month</small>
                            <div class="tools">
                            <i class="fas fa-edit"></i>
                            <i class="fas fa-trash-o"></i>
                            </div>
                        </li>
                        </ul>
                    </div>
                    
                    <div class="card-footer clearfix">
                        <button type="button" class="btn btn-info float-right"><i class="fas fa-plus"></i> Add item</button>
                    </div>
                    </div>
                    
                    <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Latest Members</h3>

                        <div class="card-tools">
                        <span class="badge badge-danger">8 New Members</span>
                        <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                        </button>
                        <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
                        </button>
                        </div>
                    </div>
                   
                    <div class="card-body p-0">
                        <ul class="users-list clearfix">
                        <li>
                            <img src="dist/img/user1-128x128.jpg" alt="User Image"/>
                            <a class="users-list-name" href="#">Alexander Pierce</a>
                            <span class="users-list-date">Today</span>
                        </li>
                        <li>
                            <img src="dist/img/user8-128x128.jpg" alt="User Image"/>
                            <a class="users-list-name" href="#">Norman</a>
                            <span class="users-list-date">Yesterday</span>
                        </li>
                        <li>
                            <img src="dist/img/user7-128x128.jpg" alt="User Image"/>
                            <a class="users-list-name" href="#">Jane</a>
                            <span class="users-list-date">12 Jan</span>
                        </li>
                        <li>
                            <img src="dist/img/user6-128x128.jpg" alt="User Image"/>
                            <a class="users-list-name" href="#">John</a>
                            <span class="users-list-date">12 Jan</span>
                        </li>
                        <li>
                            <img src="dist/img/user2-160x160.jpg" alt="User Image"/>
                            <a class="users-list-name" href="#">Alexander</a>
                            <span class="users-list-date">13 Jan</span>
                        </li>
                        <li>
                            <img src="dist/img/user5-128x128.jpg" alt="User Image"/>
                            <a class="users-list-name" href="#">Sarah</a>
                            <span class="users-list-date">14 Jan</span>
                        </li>
                        <li>
                            <img src="dist/img/user4-128x128.jpg" alt="User Image"/>
                            <a class="users-list-name" href="#">Nora</a>
                            <span class="users-list-date">15 Jan</span>
                        </li>
                        <li>
                            <img src="dist/img/user3-128x128.jpg" alt="User Image"/>
                            <a class="users-list-name" href="#">Nadia</a>
                            <span class="users-list-date">15 Jan</span>
                        </li>
                        </ul>
                        
                    </div>
                    
                    <div class="card-footer text-center">
                        <a href="javascript::">View All Users</a>
                    </div>
                    
                    </div>
                    
                    <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Recently Added Products</h3>

                        <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse">
                            <i class="fas fa-minus"></i>
                        </button>
                        <button type="button" class="btn btn-tool" data-card-widget="remove">
                            <i class="fas fa-times"></i>
                        </button>
                        </div>
                    </div>
                    
                    <div class="card-body p-0">
                        <ul class="products-list product-list-in-card pl-2 pr-2">
                        <li class="item">
                            <div class="product-img">
                            <img src="dist/img/default-150x150.png" alt="Product Image" class="img-size-50"/>
                            </div>
                            <div class="product-info">
                            <a href="javascript:void(0)" class="product-title">Samsung TV
                                <span class="badge badge-warning float-right">$1800</span></a>
                            <span class="product-description">
                                Samsung 32" 1080p 60Hz LED Smart HDTV.
                            </span>
                            </div>
                        </li>
                        
                        <li class="item">
                            <div class="product-img">
                            <img src="dist/img/default-150x150.png" alt="Product Image" class="img-size-50"/>
                            </div>
                            <div class="product-info">
                            <a href="javascript:void(0)" class="product-title">Bicycle
                                <span class="badge badge-info float-right">$700</span></a>
                            <span class="product-description">
                                26" Mongoose Dolomite Men's 7-speed, Navy Blue.
                            </span>
                            </div>
                        </li>
                        
                        <li class="item">
                            <div class="product-img">
                            <img src="dist/img/default-150x150.png" alt="Product Image" class="img-size-50"/>
                            </div>
                            <div class="product-info">
                            <a href="javascript:void(0)" class="product-title">
                                Xbox One <span class="badge badge-danger float-right">
                                $350
                            </span>
                            </a>
                            <span class="product-description">
                                Xbox One Console Bundle with Halo Master Chief Collection.
                            </span>
                            </div>
                        </li>
                       
                        <li class="item">
                            <div class="product-img">
                            <img src="dist/img/default-150x150.png" alt="Product Image" class="img-size-50"/>
                            </div>
                            <div class="product-info">
                            <a href="javascript:void(0)" class="product-title">PlayStation 4
                                <span class="badge badge-success float-right">$399</span></a>
                            <span class="product-description">
                                PlayStation 4 500GB Console (PS4)
                            </span>
                            </div>
                        </li>
                        
                        </ul>
                    </div>
                    
                    <div class="card-footer text-center">
                        <a href="javascript:void(0)" class="uppercase">View All Products</a>
                    </div>
                    
                    </div>
                    

                </div>
                </div>
                
            </div>
            </div>
            
        </div>
      </div>
    );
  }
}

export default App;
