/**
 * jquery.input-example.js
 *
 * Adds the 'showExamples()' method to jQuery collections.
 * Calling will set the 'value' attributes of all elements
 * using the custom 'data-input-example' attribute if given.
 *
 * Sets the CSS class 'with-input-example' when example is showing.
 *
 * Usage:
 *
 * $("input[type=text]").showExamples();
 *
 */

(function($) {

  $.fn.showExamples = function() {
    return this
      .each(function() {
        var example = $(this).attr("data-input-example");
        if(example && $(this).val() == "") {
          $(this).val(example).addClass("with-input-example");
        }
      })
      .focus(function() {
        var example = $(this).attr("data-input-example");
        if(example && $(this).val() == example) {
          $(this).val("").removeClass("with-input-example");
        }
      })
      .blur(function() {
        var example = $(this).attr("data-input-example");
        if(example && $(this).val() == "") {
          $(this).val(example).addClass("with-input-example");
        }
      });
  };

})(jQuery);

