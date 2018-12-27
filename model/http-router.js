const url = require('url');

let routerMap = {
    get: {},
    post: {}
};

let formatPath = (path)=>{
    if(!path){
        return;
    }

    if(!path.startsWith('/')){
        path = '/'+ path;
    }
    if(!path.endsWith('/')){
        path = path + '/';
    }
    return path;
};

let app = (req, res)=>{
    let method = req.method.toLowerCase();
    let path = url.parse(req.url).pathname;
    
    path = formatPath(path)
    if(!path){
        return;
    }

    let callback = routerMap[method] && routerMap[method][path];
    if(callback){
        callback(req, res);
    }else{
        app.errorRouter(req, res);
    }
};

app.get = (path, callback)=>{
    path = formatPath(path);
    if(!path){
        return;
    }

    routerMap.get[path] = callback;
};

app.post = (path, callback)=>{
    path = formatPath(path);
    if(!path){
        return;
    }

    routerMap.post[path] = callback;
};

app.errorRouter = (req, res)=>{
    res.end('<h1>Error 404</h1>')
};

module.exports = app;