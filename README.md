jQuery-language-select
======================

Show/hide elements in the page using one jQuery call.

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

## Live demo

[**JSFIDDLE**](http://jsfiddle.net/45NRk/)

## License

See [LICENSE](https://github.com/IonicaBizau/jQuery-language-select/blob/master/LICENSE) file.
