define(['qlik','./properties', './app','jquery'], function (qlik, props, app, $) {
    return {
        definition:props,
        paint:function($element, layout){

            //import assets
            $('body').append('<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/icon.min.css">');
            $('head').append('<link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">');
            //make app stable
            $("#app").remove();


            //get KPI name as title
            const hyperCube = layout.qHyperCube;
            const title = hyperCube.qMeasureInfo[0].qFallbackTitle;

            const callBack = app.AppComponent.initApp($element.get(0), title);
            // require(['https://cdn.ckeditor.com/4.11.4/basic/ckeditor.js'], function(){
            //     callBack(CKEDITOR)
            //     //window["ckeditor"] = CKEDITOR;
            // });
        }
    }
});
