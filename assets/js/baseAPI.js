// 注意：每次调用$.get或$.post或$.ajax()的时候，会先调用这个函数
// 在这个函数中，可以拿到我们给ajax提供的配置对象
$.ajaxPrefilter(function(options){
    
    options.url = 'http://api-breakingnews-web.itheima.net'+options.url
    console.log(options.url)
})
