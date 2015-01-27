$(document).ready(function(){

	$(document).on('click','#create',function(){
		create_note();
	})

	$(document).on('click','#bold',function(){
		bold();
	});

	$(document).on('click','#italics',function(){
		italics();
	})

	$(document).on('click','#underline',function(){
		underline();
	})



	$(document).on('click','#color',function(){
		change_background_color();
	})

	$(document).on('click','#delete',function(){
		note_delete();
	})




	/******** Create Note **********/
	function create_note() {
		var sticker = $(document).find('#sticker-template').clone();
		$('.main-body').append(sticker);
	}



	/******** Bold **********/
	function bold() {
		$('.sticker-box').addClass('bold');
	}

	/******** Italics **********/
	function italics() {
		$('.sticker-box').addClass('italics');
	}

	/******** Underline **********/
	function underline() {
		$('.sticker-box').addClass('underline');	
	}

	/******** Change Background Color **********/
	function change_background_color() {
		$('.sticker-box').addClass('st-grey');	
	}

	/******** Delete Note **********/
	function note_delete() {
		$('.sticker').remove();
	}

})