
var fctFinishGameWordFind = false;
var isFinishGameWordFind = "";
var eventFinishGameWordFind = false;
function onPaint(obj){
	
	var h = '';

	h += '<div id="mainpuzzlewords" role="main" class="bloc' + obj.id + '" >';
	h += '<ul id="wordslist">';
    h += ' <li style="display:none;" ><button id="add-word">Add word</button></li>';
    h += '</ul>';
	h += '<div id="puzzle"></div>';
    h += '<fieldset style="display:none;" id="controls" >';
    h += '<button id="solvePuzzle" >?</button>';
    h += '</fieldset>';
    h += '</div>';
	
	setTimeout("appliqueGameWordFind(" + obj.id + ")",2000);
	
	return h;
	
}

function endTurnGameWordFind(){
	if(fctFinishGameWordFind){
		fctFinishGameWordFind = false;
		setTimeout(function(){LUDI.nextPage();},1000);
	}
	eventFinishGameWordFind = true;
}

function endTurnGoPage0(){
	if(eventFinishGameWordFind){
		eventFinishGameWordFind = false;
		LUDI.goPage(0);
	}
	
}

function appliqueGameWordFind(i){
	
	var obj = CObjets[i];
	
	var samplewords = ['openelearning','creative','elegante','farceuse','joviale'];
	
	if(obj.fields[0].indexOf("1")!=-1){
		fctFinishGameWordFind = true;
	}else{
		fctFinishGameWordFind = false;
	}
	
	if(obj.fields[1]!=''){
		samplewords = new Array();
		samplewords.push(obj.fields[1]);
		if(obj.fields[2]!=''){
			samplewords.push(obj.fields[2]);
		}
		if(obj.fields[3]!=''){
			samplewords.push(obj.fields[3]);
		}
		if(obj.fields[4]!=''){
			samplewords.push(obj.fields[4]);
		}
		if(obj.fields[5]!=''){
			samplewords.push(obj.fields[5]);
		}
		if(obj.fields[6]!=''){
			samplewords.push(obj.fields[6]);
		}
		if(obj.fields[7]!=''){
			samplewords.push(obj.fields[7]);
		}
		if(obj.fields[8]!=''){
			samplewords.push(obj.fields[8]);
		}
		if(obj.fields[9]!=''){
			samplewords.push(obj.fields[9]);
		}
	}
	
	
	samplewords.forEach(function (word, index){
		WordFindGame.insertWordBefore($('#add-word').parent(), word);
	})
	
    /* Init */
    function recreate() {
        $('#result-message').removeClass();
        var fillBlanks, game;

       try {
            game = new WordFindGame('#puzzle', {
                allowedMissingWords: 1,
                maxGridGrowth: 10,
                fillBlanks: fillBlanks,
                allowExtraBlanks: ['none', 'secret-word-plus-blanks'],
                maxAttempts: 100,
            });
        }catch (error){
			
            //$('#result-message').text(` ${error}, try to specify less ones`).css({color: 'red'});
            return;
		}
        wordfind.print(game);
        if(window.game){
            var emptySquaresCount = WordFindGame.emptySquaresCount();
            //alert('Error there are empty squares');
        }
        window.game = game;
    }
    recreate();
   
	$( "#solvePuzzle" ).click(function() {
	  game.solve()
	});
}

function onZoom(obj){
	
}

function isOK(obj){
	return true;
}

if(!Array.prototype.map){
    Array.prototype.map = function (callback, thisArg) {
        return $.isArray(thisArg) ? $.map(thisArg, callback) : [];
    };
}
