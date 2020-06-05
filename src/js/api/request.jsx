const axios = require('axios')

//export request
//enpoint = request.api.name;
//request.get(endpoint,params)
export const urls = {
    main: "",
}
export const apiEndpoints = {
    register:{
        base:'',
        method:'post',
        link:'/register',
        params:[]
    },
    login:{
        base:'',
        method:'post',
        link:'/login',
        params:[]
    },
    reset:{
        base:'',
        method:'post',
        link:'/login',
        params:[]
    },
    profile:{
        view:{
            base:'',
            method:'get',
            link:'',
            params:[]
        },
        update:{
            base:'',
            method:'put',
            link:'',
            params:[]
        },
        deactivate:{
            base:'',
            method:'delete',
            link:'',
            params:[]
        }
    },
    project:{
        view:{
            base:'',
            method:'get',
            link:'',
            params:[]
        },
        list:{
            base:'',
            method:'get',
            link:'',
            params:[]
        },
        create:{
            base:'',
            method:'post',
            link:'',
            params:[]
        },
        update:{
            base:'',
            method:'put',
            link:'',
            params:[]
        },
        delete:{
            base:'',
            method:'post',
            link:'',
            params:[]
        }       
       
    },
    mentor:{
        view:{
            base:'',
            method:'get',
            link:'',
            params:[]
        },
        list:{
            base:'',
            method:'get',
            link:'',
            params:[]
        },
        create:{
            base:'',
            method:'post',
            link:'',
            params:[]
        },
        update:{
            base:'',
            method:'put',
            link:'',
            params:[]
        },
        delete:{
            base:'',
            method:'post',
            link:'',
            params:[]
        }       
       
    },
    faq:{
        view:{
            base:'',
            method:'get',
            link:'',
            params:[]
        },
        list:{
            base:'',
            method:'get',
            link:'',
            params:[]
        },
        create:{
            base:'',
            method:'post',
            link:'',
            params:[]
        },
        update:{
            base:'',
            method:'put',
            link:'',
            params:[]
        },
        delete:{
            base:'',
            method:'post',
            link:'',
            params:[]
        }       
       
    },
    message:{
        view:{
            base:'',
            method:'get',
            link:'',
            params:[]
        },
        list:{
            base:'',
            method:'get',
            link:'',
            params:[]
        },
        create:{
            base:'',
            method:'post',
            link:'',
            params:[]
        },
        update:{
            base:'',
            method:'put',
            link:'',
            params:[]
        },
        delete:{
            base:'',
            method:'post',
            link:'',
            params:[]
        }       
       
    },
}

let net = null;
export const request = async (endpoint, params) => 
{
  return new Promise((resolve, reject) => 
  {
    let args = { params: {}};
    if (Array.isArray(params)) {
      params.forEach((value, i) => {
        if(value!==''){args.params[endpoint.params[i]] = value;}
      });
      
    }
    
    if ( net == null) {
       net = axios.create({
          baseURL: url[endpoint.base],
          timeout: 1000,
          });
    }

    if (net && endpoint.method!==null) {

      net[endpoint.method](endpoint.link, args)
      .then((response) => {
        
        if (response.status == 200 && response.data){
            resolve(response.data);
        }
        else {
          reject("ERR: Bad API get response.");
        }
      })
      .catch((error) => {
        console.log(error);
        reject("ERR: Bad API get response.")
      });
    } else {
      reject("ERR: API not initialized");
    }
  });
}

export const socket = async () => {
    
}