$(function() {
  // Dissimulation des réponses
  $('.reponse').hide();

  // Mise en forme des div du QCM
  var q = $('.question');
  q.css('background', '#9EEAE0');
  q.css('border-style', 'groove');
  q.css('border-width', '4px');
  q.css('width', '900px');
  q.css('height', '175px');
  q.css('margin', '20px');

  $('.texte').css('float', 'left');
  $('.texte').css('width', '90%');
  $('.question img').css('float', 'right');
  $('.question img').css('margin-top', '80px');

  // Action au survol du lien « Tester les réponses »
  $('a').hover(
    function() {
      $('.reponse').show();
      if ($(':radio[id="r1"]:checked').val()) {
        $('#img1').attr('src', 'img/bon.png');
        $('#reponse1').css('color', 'green');
      }
      else {
        $('#img1').attr('src', 'img/mauvais.png');
        $('#reponse1').css('color', 'red');
      }
      if ($(':radio[id="r4"]:checked').val()) {
        $('#img2').attr('src', 'img/bon.png');
        $('#reponse2').css('color', 'green');
      }
      else {
        $('#img2').attr('src', 'img/mauvais.png');
        $('#reponse2').css('color', 'red');
      }
      if ($(':radio[id="r8"]:checked').val()) {
        $('#img3').attr('src', 'img/bon.png');
        $('#reponse3').css('color', 'green');
      }
      else {
        $('#img3').attr('src', 'img/mauvais.png');
        $('#reponse3').css('color', 'red');
      }
    },
    function() {
      $('.reponse').hide();
      $('.question img').each(function() {
        $(this).attr('src', 'img/question.png');
      });
    }
  );
});

//FAQ
const allCross = document.querySelectorAll('.visible-pannel img');

allCross.forEach(element => {
    element.addEventListener('click', function(){
        const height = this.parentNode.parentNode.childNodes[3].scrollHeight;
        const currentChoice = this.parentNode.parentNode.childNodes[3];

        if(this.src.includes('plus-solid')){
            this.src = 'img/minus-solid.svg';
            gsap.to(currentChoice, {duration: 0.2, height: height + 40, opacity: 1, padding: '20px 15px'})
        } else if (this.src.includes('minus-solid')){
            this.src = 'img/plus-solid.svg';
            gsap.to(currentChoice, {duration: 0.2, height: 0, opacity: 0, padding: '0px 15px'})
        }
    })
})

//Formulaire
const inputs = document.querySelectorAll('.formGroupe input');

for (let i = 0; i < inputs.length; i++) {
    let field = inputs[i];
    field.addEventListener('input', (e) => {
        if(e.target.value != ""){
            e.target.parentNode.classList.add('animation');
        } else if (e.target.value == "") {
            e.target.parentNode.classList.remove('animation');
        }
    })
}
