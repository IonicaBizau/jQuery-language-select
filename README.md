# jquery-language-select [![Support this project][donate-now]][paypal-donations]

Easily build multilangual pages and select the language.

## Installation

```sh
$ npm i --save jquery-language-select
```

## Example
```html
<script src="path/to/jQuery-language-select.js"></script>
<p data-language="fr">Salut!</p>
<p data-language="en">Hi!</p>

<select id="select">
    <option value="fr">French</option>
    <option value="en">Enlish</option>
</select>
<script>
  // select French as initial language
  $.setLanguage({attribute: "data-language", lang: "fr"});

  // on change
  $("#select").on("change", function () {
    // set the new language
    $.setLanguage({
      attribute: "data-language",
      lang: $(this).val()
    });
  });
</script>
```

## Documentation

### `setLanguage(options)`
Sets the language to the specified language.

#### Params
- **String|Object** `options`: The language value or an object containing:
 - `attribute` (String): The atribute name (default: `data-lang`).
 - `lang` (String): The language value (default: `en`).

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md