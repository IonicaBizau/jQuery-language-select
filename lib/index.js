(function ($) {

    /**
     * setLanguage
     * Sets the language to the specified language.
     *
     * @name setLanguage
     * @function
     * @param {String|Object} options The language value or an object containing:
     *
     *  - `attribute` (String): The atribute name (default: `data-lang`).
     *  - `lang` (String): The language value (default: `en`).
     */
    $.setLanguage = function (options) {
        if(typeof options !== 'object'){
            throw new Error('Options should be an object');
        }
        // Merge options
        var config = $.extend({
            attribute: "data-lang",
            lang: "en"
        }, options);

        // Hide all elements with this attirbute
        $("[" + config.attribute + "]").hide();

        // Show the elements with this language
        $("[" + config.attribute + "='" + config.lang + "']").show();

        return this; // allow method chaining
    };
})($);
