/**
 * jquery.input-placeholder.js
 *
 * - Adds the 'showPlaceholder()' method to jQuery collections.
 *   Calling will set the 'value' attributes of all elements
 *   using HTML5's  'placeholder' attribute if given.
 *
 * - Future-proof: Checks for native browser support first.
 *
 * Usage:
 *
 * $("input[type=text]").showPlaceholder();
 *
 */

(function($) {

  $.fn.showPlaceholder = function() {
    // Check for native browser support
    var supported = ("placeholder" in document.createElement("input"));
    if(supported) { return true; }

    return this
      .each(function() {
        var placeholder = $(this).attr("placeholder");
        if(placeholder && $(this).val() == "") {
          $(this).val(placeholder);
        }
      })
      .focus(function() {
        var placeholder = $(this).attr("placeholder");
        if(placeholder && $(this).val() == placeholder) {
          $(this).val("");
        }
      })
      .blur(function() {
        var placeholder = $(this).attr("placeholder");
        if(placeholder && $(this).val() == "") {
          $(this).val(placeholder);
        }
      });
  };

})(jQuery);
