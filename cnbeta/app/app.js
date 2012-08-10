var util = require('../util');

/**
 * 调度action
 * @param  {[type]} name   控制器名称,没有任何过滤,应该只接受字符,不接受变量
 * @param  {[type]} req    [description]
 * @param  {[type]} res    [description]
 * @param  {[type]} config [description]
 * @return {[type]}        [description]
 */
exports.action = function(name, req, res, config){
	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	var ret = require('./actions/' + name)(req, res, config);
	if(util.isString(ret)){
		return res.end(ret);
	}
	if(util.isObject(ret) || util.isArray(ret)){
		res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
		return res.end(JSON.stringify(ret));
	}
	
};