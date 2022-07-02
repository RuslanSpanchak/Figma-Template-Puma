$("#shoes_all").hide(0)
$("#shoes_female").hide(0)
$("#shoes_kids").hide(0)

$("#categories_all").click(function() {

	$(this).addClass("sections_categories_text_active");
	$("#categories_male").removeClass("sections_categories_text_active");
	$("#categories_female").removeClass("sections_categories_text_active");
	$("#categories_kids").removeClass("sections_categories_text_active");

	$("#shoes_all").show(0)
	$("#shoes_male").hide(0)
	$("#shoes_female").hide(0)
	$("#shoes_kids").hide(0)

});

$("#categories_male").click(function() {

	$(this).addClass("sections_categories_text_active");
	$("#categories_all").removeClass("sections_categories_text_active");
	$("#categories_female").removeClass("sections_categories_text_active");
	$("#categories_kids").removeClass("sections_categories_text_active");

	$("#shoes_all").hide(0)
	$("#shoes_male").show(0)
	$("#shoes_female").hide(0)
	$("#shoes_kids").hide(0)

});

$("#categories_female").click(function() {

	$(this).addClass("sections_categories_text_active");
	$("#categories_all").removeClass("sections_categories_text_active");
	$("#categories_male").removeClass("sections_categories_text_active");
	$("#categories_kids").removeClass("sections_categories_text_active");

	$("#shoes_all").hide(0)
	$("#shoes_male").hide(0)
	$("#shoes_female").show(0)
	$("#shoes_kids").hide(0)

});

$("#categories_kids").click(function() {

	$(this).addClass("sections_categories_text_active");
	$("#categories_all").removeClass("sections_categories_text_active");
	$("#categories_male").removeClass("sections_categories_text_active");
	$("#categories_female").removeClass("sections_categories_text_active");

	$("#shoes_all").hide(0)
	$("#shoes_male").hide(0)
	$("#shoes_female").hide(0)
	$("#shoes_kids").show(0)

});