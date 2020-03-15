// Fordítások
const texts = {
  en:
    '"The freedom of Mankind does not lie in the fact that we can do what we want, but that we do not have to do that which we do not want."',
  hu:
    '"Nem az a szabadság, hogy azt teheted, amit akarsz, hanem hogy nem kell megtenned, amit nem akarsz."',
  de:
    '"Die Freiheit des Menschen liegt nicht darin, dasser tun kann, was er will, sondern das er nicht tun muss, was er nicht will."'
};

$(function() {
  $(document).on("change", "#language-selector", function(event) {
    // A <option> tag amire kattintott
    const clickedLanguage = $(event.currentTarget);
    // A <option> tagben a "value" értéke (hu,en,de)
    const language = clickedLanguage.val();
    // Az idézet helye <p> tag
    const szoveg = $(".quote");
    // Fordítás behelyezése a <p> tagbe
    szoveg.text(texts[language]);
  });
});
