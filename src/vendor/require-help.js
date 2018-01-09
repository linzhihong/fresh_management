require.config({
	//	根目录
	baseUrl:"../../",
　　paths: {
　　　　"jquery": "vendor/jquery/jquery-1.9.1",
		"Vue":"vendor/vue/vue.min",
		"vue_resource":"vendor/vue/vue-resource",
		"vue_router":"vendor/vue/vue-router.min",
		 "hui":'vendor/H-ui/static/h-ui/js/H-ui.min',
        "hui_admin":'vendor/H-ui/static/h-ui.admin/js/H-ui.admin',
        "layer":'vendor/H-ui/lib/layer/2.4/layer',
        "jquery_contextmenu":'vendor/H-ui/lib/jquery.contextmenu/jquery.contextmenu.r2',
        "jquery_validate":'vendor/H-ui/lib/jquery.validation/1.14.0/jquery.validate',
        "WdatePicker":'vendor/H-ui/lib/My97DatePicker/4.8/WdatePicker',
        "echarts":'vendor/H-ui/lib/echarts/3.4.0/echarts-all',
		"bootstrap":'vendor/bootstrap/js/bootstrap.min',
		"paging":'vendor/page/paging',
		"text": 'vendor/require/text',
		"css": 'vendor/require/css',
　　},
    priority: ['text', 'css'],//优先引入的
	shim: {
		"jquery": {
            exports: "jquery"
       },
        "bootstrap": {
            deps: ['jquery','css!vendor/bootstrap/css/bootstrap.css'],
            exports: 'bootstrap'
        },
		"hui_admin": {
            deps: ['jquery','hui'],
            exports: 'hui_admin'
        },
        "hui": {
            deps: ['jquery','css!vendor/H-ui/static/h-ui.admin/css/H-ui.admin.css','css!vendor/H-ui/static/h-ui/css/H-ui.min.css','css!vendor/H-ui/lib/Hui-iconfont/1.0.8/iconfont.css'],
            exports: 'hui'
        },
        "layer": {
            deps: ['jquery','css!vendor/H-ui/lib/layer/2.4/skin/layer.css'],
            exports: 'layer'
        },
        "jquery_contextmenu": {
            deps: ['jquery'],
            exports: 'jquery_contextmenu'
        },
         "WdatePicker": {
            deps: ['jquery'],
            exports: 'WdatePicker'
        },
        "paging": {
            deps: ['jquery'],
            exports: 'paging'
        },
        "vue_router": {
            deps: ['jquery'],
            exports: 'vue_router'
        }
        
　　}
});