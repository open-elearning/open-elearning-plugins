	
	var out = document.getElementById("finalcode");
	
	function init(){
		
		var str = '||||||||||';
		if(out.value!=''){
			str=out.value + '||||||||||';
		}else{
			setTimeout(function(){init();},200);
			return false;
		}
		
		var r = str.split('|');
		
		if(r.length>1){
			
			$("#d1").val(r[1]);
			$("#d2").val(r[2]);
			$("#d3").val(r[3]);
			$("#d4").val(r[4]);
			$("#d5").val(r[5]);
			$("#d6").val(r[6]);
			$("#d7").val(r[7]);
			$("#d8").val(r[8]);
			$("#d9").val(r[9]);
			$("#d10").val(r[10]);
			
			var fcheck = r[0];
			
			if(fcheck.indexOf("1")!=-1){
				document.getElementById('checkboxnextpage').checked = true;
			}else{
				document.getElementById('checkboxnextpage').checked = false;
			}
			
	
		}else{
			$("#d1").val('OPEN');
			$("#d2").val('ELEARNING');
			$("#d3").val('CHAMILO');
		}
		
		if(r[1]==''){
			$("#d1").val('OPEN');
			$("#d2").val('ELEARNING');
			$("#d3").val('CHAMILO');
		}
		
		main();
		
	}
	
	function main(){
		
		var fcheck = "";
		
		if(document.getElementById('checkboxnextpage').checked){
		fcheck = "1";}
		
		var f = fcheck+'|'+gstr(1)+'|'+gstr(2)+'|'+gstr(3)+'|'+gstr(4)+'|'+gstr(5)+'|'+gstr(6)+'|'+gstr(7)+'|'+gstr(8)+'|'+gstr(9)+'|'+gstr(10);
		
		out.value = f;
		
		setTimeout(function(){main();},200);
		
	}
	
	function gstr(i){
		var txt = $("#d" + i).val();
		txt = txt.replace(/[^a-zA-Z]/g, "");
		return txt;
	}
	
	setTimeout(function(){
		init();
	},300);
	