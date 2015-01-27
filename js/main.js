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

	$(document).on('click','#font ul li',function(){	
		change_font($(this).attr('val'));
	})


	$(document).on('click','#color ul li',function(){	
		change_background_color($(this).attr('val'));
	})

	$(document).on('click','#delete',function(){
		note_delete();
	})




	/******************************************* Functions Definitions ******************************************/

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
	function change_font(font_code) {
		$('.sticker-box').removeClass('ft-12 ft-14 ft-18 ft-24')
		$('.sticker-box').addClass(font_code);	
	}

	/******** Change Background Color **********/
	function change_background_color(color_code) {
		$('.sticker-box').removeClass('st-grey st-white st-blue st-pink')
		$('.sticker-box').addClass(color_code);	
	}

	/******** Delete Note **********/
	function note_delete() {
		$('.sticker').remove();
	}

})