/**
 * jquery.fancy-checkbox.js
 *
 * Wraps the checkbox(es) into a <div> w/ CSS classes 'fancy-checkbox'
 * (and 'checked' if appropriate) as styling hooks for nicer checkboxes.
 *
 * The <input> should be hidden using CSS:
 *
 *   opacity:0;
 *   filter:alpha(opacity=0); // IE
 *
 * Usage:
 *
 * $("input[type=checkbox]").fancy();
 *
 */
(function($) {

  $.fn.fancy = function() {
    return this.each(function() {
      var $input = $(this),
          $cont  = $('<div class="fancy-checkbox"/>');

      if($input.is(":checked")) {
        $cont.addClass("checked");
      }

      $input
        .wrap($cont)
        .change(function() {
          if($(this).is(":checked")) {
            $(this).parent().addClass("checked");
          } else {
            $(this).parent().removeClass("checked");
          }
        });
    });
  };

})(jQuery);