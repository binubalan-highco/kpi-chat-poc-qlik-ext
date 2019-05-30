define(['qlik','./properties', './app','jquery'], function (qlik, props, app, $) {
    return {
        definition:props,
        paint:function($element, layout){

            //import assets
            $('body').append('<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/icon.min.css">');

            //make app stable
            $("#app").remove();


            //get KPI name as title
            const hyperCube = layout.qHyperCube;
            const title = hyperCube.qMeasureInfo[0].qFallbackTitle;

            app.AppComponent.initApp($element.get(0), title);
        }
    }
});
