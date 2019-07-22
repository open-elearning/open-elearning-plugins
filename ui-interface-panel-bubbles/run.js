/*OeL 2019*/

function openBodyAppendBubbles(){
    
    var h = $( ".panelBubblesUiInner" ).width();
	
    if(h<200){
        $(".panelBubblesUi").animate({
            left: "210px"
          },500,function(){
        });
        $(".panelBubblesUiInner").animate({
            left: "0px",width:"200px"
          },500,function(){
        });
    }else{
        $( ".panelBubblesUi" ).animate({
            left: "0px"
          },500,function(){
          
        });
        $( ".panelBubblesUiInner" ).animate({
            left: "-12px",width:"0px"
          },500,function(){
        });
    }

}

var bodyAppendPanel = "<div class='panelBubblesUi' onClick='openBodyAppendBubbles()' style='' >";

bodyAppendPanel += "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAbCAYAAAB4Kn/lAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAcwAAAHMBY8FD/gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAWdEVYdEF1dGhvcgBFZHNvbiBBLiBTYW50b3MtsSSrAAAAHHRFWHREZXNjcmlwdGlvbgBBIExpdHRsZSBHLU1vbmV5aVz0PAAAABh0RVh0Q3JlYXRpb24gVGltZQAxMi8wNy8yMDA15YdZBQAABFxJREFUSInVlVtsVEUYx38zc87Z7q3bbrflZlvAgLSWglYSi1AbvETQkBiwmhgNvBgv8Vne9AETeTDR8MCD0cTEiDaIUZSQGCBEiYnEULmICkoBLWW57Ha7u93dM2fGhwWylmIJPvl/mcmX+X75fzPfzAim0SAsBlYJmGXAAEMnYMcb1flNJaYKfgJ3CnhBwHpg/hRLjgLvAp8OQH5a8G4IjcNbAl4B3OmqAUaA9QPw/U3Bg6CAncDaWwDW6kwM7loD5dqgrJlvug0oQHseBiYHa8HP3gb0mnr/DTz3P4Cf3AWRG8CDkATCt0KwgHEURtZ6YmYRHr0BDDTfDGSUQnsu2nMpx6L4kTCB44CSBK6D9lyMUkh4oDbPuTpOTAYGSmGVxEqBNJbAUUhfg7UgoeJ5qEAjAoNRkkDKML7/T8cFSAP+dYchj8B1QQhAYJREBhaBrYYApfVV5worJJeE2EBN+0qAjVBKu67vey7GcwiUQmCwUgIWCwRSgq3usQgMwoLyNVZIjCtJKhndWF//9jWwANgPzplIXUkJoWQQYBwHqXV173SAsBYch/K8dnLNTYTGC8TOjyIvXa5WZcEPuYwZ658oFGdsg4wDcCxW19ekrTKCKjQIqtaQnI24HHcE7ff0kGhJAbDv1G+0Lu6kRUri43mOnTrN7EgdOpN1Z6r63eRyvQ7ABSNeTXgOZSG56LmMRqPM6b4bEnG+O/krfwqLnSiwhBQW+Dl3BWMNbQsW4TclOZ0d55wSHLqSYTG6652Q+7LaD85oNPrediW9vbEoqa4ODhdKLJzXhkQwN5miWSlmJ5tY89gqOjoW4BZ95idT109KAOcyGS7lC6SF9GbrQKq2cHjLASn6jwKFik9Iudzb3kolCIiEPNra7uC+JV20pBqpi0QoVzSRkEPv/cvQWjOWzeEpyaHTwxQqPvXG0lvxh52gUvnJlwJktaWPnz/PgpZmWhoTdHd30rN8OUJKSsUil9NpctksK1b2IZRD86w5dI78xRe79pDOFwDo8X2dFeI19a21R/qk7Moq2VkUAm0MfqBZ2d1F/yMP40ViKNfDUQ6xWIR4xMON1uNG4iCgLhRiLJNh39AROsuVoYW+fn2r7+92AD4ql59a7YoHi8J9oiDE0wVjWvv7lyOVg9EahMCaAGstWIs1mqA8gQ001hoaEnG6Q6F1ey5e2Xmgto8nSb60bu1zm54f+MCLx6VSTvUeWUPg+/gTeYrZIvn0ZfK5Atnxcbv1868G9w7//sxUb0WtzLbPvvzwoUUds5qTiTdDZSMnCkUquTxaaxASNxZBNcYo1YfI2RIjQWXzZIiaAgxAXLmjFybGHw83Rhv9OiXcVJzwjAYaWlNEWxqwdQ7Do+nSlu07+n8ZPvvj5Pwpf+la9fUs/XrD6lWrF7bNEa5SVLRGSsnQyT9GPv7m4LKDhw+PTJU3LRgQyURi3YqlnZsbY7F5+YmSm8mPvb/vhyMvAsEt5P9P9Delj6ghdb1zHAAAAABJRU5ErkJggg==' />";

bodyAppendPanel += "</div>";

bodyAppendPanel += "<div class='panelBubblesUiInner' ></div>";
$('body').append(bodyAppendPanel);
