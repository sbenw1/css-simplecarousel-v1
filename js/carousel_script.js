
/*
*	The main carousel script.
*
*/

class CarouselScript {
	
	constructor(){
		
		this.img_list = [];
		this.cntr = 0;
		
		//	Get the image HTML.
		var img1 = document.getElementById("img1");
		var img2 = document.getElementById("img2");
		var img3 = document.getElementById("img3");
		var img4 = document.getElementById("img4");
		var img5 = document.getElementById("img5");
		
		//	Add them to global array.
		this.img_list.push(img1);
		this.img_list.push(img2);
		this.img_list.push(img3);
		this.img_list.push(img4);
		this.img_list.push(img5);
		
		//	Loop through and hide.
		for(let i = 0; i < this.img_list.length; i++){
			document.getElementById(this.img_list[i].id).style.display = "none";
		}
		
		document.getElementById(this.img_list[this.cntr].id).style.display = "block";
		
		this.ChangeLabel();
		this.AssignButtons();
		
	}
	
	/*
	*	Previous button.
	*	If the user clicks again while the counter is at 0, set
	*	counter to max and then loop through.
	*/
	PrevButton(){
		
		document.getElementById(this.img_list[this.cntr].id).style.display = "none";
		
		if(this.cntr > 0){
			this.cntr--;
		}
		
		if(this.cntr == 0){
			this.cntr = this.img_list.length-1;
		}
		
		document.getElementById(this.img_list[this.cntr].id).style.display = "block";
		
		this.ChangeLabel();
		
	}
	
	/*
	*	Next button.
	*	If the user clicks again while the counter is at max, set
	*	counter to 0 and then loop through.
	*/
	NextButton(){
		
		document.getElementById(this.img_list[this.cntr].id).style.display = "none";
		
		if(this.cntr < this.img_list.length){
			this.cntr++;
		}
		
		if(this.cntr == this.img_list.length){
			this.cntr = 0;
		}
		
		document.getElementById(this.img_list[this.cntr].id).style.display = "block";
		
		this.ChangeLabel();
		
	}
	
	/*
	*	ChangeLabel
	*	Replaces the HTML label text.
	*/
	ChangeLabel(){
		
		let currentstr = this.cntr + 1;
		let lengthstr = this.img_list.length;
		
		let msg = "Image " + currentstr + " of " + lengthstr + ".";
		document.getElementById("lblCounter").innerHTML = msg;
		
	}
	
	/*
	*	Assign buttons
	*	A function that assigns functionality to HTML buttons.
	*	Needs to be in a closure to get the context of the class
	*	instance.
	*/
	AssignButtons(){
		
		(function(cntxt){
			
			document.getElementById("btnPrevious").addEventListener("click", function(){
				cntxt.PrevButton();
			});
			
			document.getElementById("btnNext").addEventListener("click", function(){
				cntxt.NextButton();
			});
		
		}(this));
		
	}
	
}


function init(){
	
	var cs = new CarouselScript();
	
}

init();
