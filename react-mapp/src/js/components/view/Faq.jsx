import React, { Component } from 'react';


class App extends Component {
  render() 
  {
      console.log("default view");
    return (
      <div className="App">
      
        <div class="content-wrapper" style={{ marginTop: 40 +'px'}}>    
          <div class="content-header">
            
          </div>
        
          <div class="content">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  
                  <div class="card card-widget">
                    <div class="card-header">
                      <div class="user-block">
                        <img class="img-circle" src="../dist/img/user1-128x128.jpg" alt="User Image"/>
                        <span class="username"><a href="#">Jonathan Burke Jr.</a></span>
                        <span class="description">Shared publicly - 7:30 PM Today</span>
                      </div>
                      
                      <div class="card-tools">
                        
                      </div>
                      
                    </div>
                    
                    <div class="card-body">
                      
                      <p>Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at</p>

                      <p>the coast of the Semantics, a large language ocean.
                        A small river named Duden flows by their place and supplies
                        it with the necessary regelialia. It is a paradisematic
                        country, in which roasted parts of sentences fly into
                        your mouth.</p>

                      
                      <div class="attachment-block clearfix">
                        <img class="attachment-img" src="../dist/img/photo1.png" alt="Attachment Image"/>

                        <div class="attachment-pushed">
                          <h4 class="attachment-heading"><a href="http://www.lipsum.com/">Lorem ipsum text generator</a></h4>

                          <div class="attachment-text">
                            Description about the attachment can be placed here.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry... <a href="#">more</a>
                          </div>
                          
                        </div>
                        
                      </div>
                      

                      
                      <button type="button" class="btn btn-default btn-sm"><i class="fas fa-share"></i> Share</button>
                      <button type="button" class="btn btn-default btn-sm"><i class="far fa-thumbs-up"></i> Like</button>
                      <span class="float-right text-muted">45 likes - 2 comments</span>
                    </div>
                  
                    <div class="card-footer card-comments">
                      <div class="card-comment">
                        
                        <img class="img-circle img-sm" src="../dist/img/user3-128x128.jpg" alt="User Image"/>

                        <div class="comment-text">
                          <span class="username">
                            Maria Gonzales
                            <span class="text-muted float-right">8:03 PM Today</span>
                          </span>
                          It is a long established fact that a reader will be distracted
                          by the readable content of a page when looking at its layout.
                        </div>
                        
                      </div>
                      
                      <div class="card-comment">
                        
                        <img class="img-circle img-sm" src="../dist/img/user5-128x128.jpg" alt="User Image"/>

                        <div class="comment-text">
                          <span class="username">
                            Nora Havisham
                            <span class="text-muted float-right">8:03 PM Today</span>
                          </span>
                          The point of using Lorem Ipsum is that it hrs a morer-less
                          normal distribution of letters, as opposed to using
                          'Content here, content here', making it look like readable English.
                        </div>
                        
                      </div>
                      
                    </div>
                    
                    <div class="card-footer">
                      <form action="#" method="post">
                        <img class="img-fluid img-circle img-sm" src="../dist/img/user4-128x128.jpg" alt="Alt Text"/>
                        
                        <div class="img-push">
                          <input type="text" class="form-control form-control-sm" placeholder="Press enter to post comment"/>
                        </div>
                      </form>
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
