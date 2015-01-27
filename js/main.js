$(document).ready(function(){

	var note_count = 0;

	$(document).on('click','#create',function(){
		create_note();
	})

	$(document).on('click','#bold',function(){
		bold(this);
	});

	$(document).on('click','#italics',function(){
		italics(this);
	})

	$(document).on('click','#underline',function(){
		underline(this);
	})

	$(document).on('click','#font ul li',function(){	
		change_font($(this).attr('val'), this);
	})

	$(document).on('click','#color ul li',function(){	
		change_background_color($(this).attr('val'), this);
	})

	$(document).on('click','#delete',function(){
		note_delete(this);
	})

	$(document).on('click, hover, focus', '.sticker-box', function(){
		$('.edit-bar').addClass('hidden');
		$(this).parent().find('.edit-bar').removeClass('hidden');
	})




	/******************************************* Functions Definitions ******************************************/

	/******** Create Note **********/
	function create_note() {
		var sticker = $(document).find('#sticker-template').clone();
		sticker.draggable();
		var left_margin = note_count*270 + 20;
		sticker.css({
			'left': left_margin
		});
		$('.main-body').append(sticker);
		note_count++;
	}

	/******** Bold **********/
	function bold(element) {
		$(element).parent().parent().find('.sticker-box').removeClass('italics underline');
		$(element).parent().parent().find('.sticker-box').addClass('bold');
	}

	/******** Italics **********/
	function italics(element) {
		$(element).parent().parent().find('.sticker-box').removeClass('bold underline');
		$(element).parent().parent().find('.sticker-box').addClass('italics');
	}

	/******** Underline **********/
	function underline(element) {
		$(element).parent().parent().find('.sticker-box').removeClass('italics bold');
		$(element).parent().parent().find('.sticker-box').addClass('underline');	
	}

	/******** Change Background Color **********/
	function change_font(font_code, element) {
		$(element).parent().parent().parent().parent().find('.sticker-box').removeClass('ft-12 ft-14 ft-18 ft-24');
		$(element).parent().parent().parent().parent().find('.sticker-box').addClass(font_code);	
	}

	/******** Change Background Color **********/
	function change_background_color(color_code, element) {
		$(element).parent().parent().parent().parent().find('.sticker-box').removeClass('st-grey st-white st-blue st-yellow');
		$(element).parent().parent().parent().parent().find('.sticker-box').addClass(color_code);	
	}

	/******** Delete Note **********/
	function note_delete(element) {
		$(element).parent().parent().remove();
	}

})