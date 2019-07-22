
/*OeL 2019*/
var bodyAppendPanel = "<div class='panelToolsUi' onClick='openBodyAppendPanel()' style='' >Property</div>";

bodyAppendPanel += "<div class='panelToolsUiInner' ></div>";
$('body').append(bodyAppendPanel);

function openBodyAppendPanel(){
    
    var h = $( ".panelToolsUiInner" ).height();

    if(h<200){
        $(".panelToolsUi").animate({
            bottom: "200px"
          },500,function(){
        });
        $(".panelToolsUiInner").animate({
            bottom: "0px",height:"200px"
          },500,function(){
        });
    }else{
        $( ".panelToolsUi" ).animate({
            bottom: "0px"
          },500,function(){
          
        });
        $( ".panelToolsUiInner" ).animate({
            bottom: "0px",height:"0px"
          },500,function(){
        });
    }



}