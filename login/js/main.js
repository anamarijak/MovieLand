//firebase 
var config = {
    apiKey: "AIzaSyCNz6a6wLuMVOwZXqOYpDgAaKknbiEdypI",
    authDomain: "movieland-16c43.firebaseapp.com",
    databaseURL: "https://movieland-16c43.firebaseio.com",
    projectId: "movieland-16c43",
    storageBucket: "movieland-16c43.appspot.com",
    messagingSenderId: "568741131246"
  };
  firebase.initializeApp(config);

  "use strict";
  /**
   * Form submission validate
   * async funkcija objasnjenja dole nesto nize
   * */
  $('.validate-form').on('submit', async function (e) {
    let email = $('#email');
    let password = $('#password');
    e.preventDefault();
    if (validate(email) == false) {
      showValidate(email);
    }
    if (validate(password) == false) {
      showValidate(password);
    }
    try {
      //Vraca promise , pa radimo await da ne mora sa callback
      //ako se desi error ,throw ce ga i handle ga u catch block
      //ako se ne desi, logovali smo se, redirect uradi
      let user = await firebase.auth().signInWithEmailAndPassword(email.val(), password.val());
      
      location.assign('logged.html');
    } catch (err) {
      alert(err.message);
      $('.validate-form')[0].reset();
    }
  });
  //kad kliknemo da nestane text validacije
  $('.validate-form .input100').each(function () {
    $(this).focus(function () {
      hideValidate(this);
    });
  });
  //za handle registracije
  $('.validate-form-reg').on('submit', async function (e) {
    let email = $('#email');
    let password = $('#password');
    let passwordCheck = $('#passwordCheck');
    e.preventDefault();
    if (validate(email) == false) {
      showValidate(email);
    }
    if (validate(password) == false) {
      showValidate(password);
    }
    if (validate(passwordCheck) == false) {
      showValidate(passwordCheck);
    }
    if (password.val() !== passwordCheck.val()) {
      var thisAlert = $(passwordCheck).parent();
      $(thisAlert).addClass('alert-validate');
    }
    try {
      //kao i gore sto je navedeno, promise vraca
      //ako se desi error , throw ga i handle u catch block
      //ako ne , obavijestim ousera da je registrovan uspjesno
      //redirect na login
      let user = await firebase.auth().createUserWithEmailAndPassword(email.val(), password.val())
      alert('You have successfully registered');
      location.assign('index.html');
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  });
  //kao prethodno sakrivamo messages kad kliknemo na field
  $('.validate-form-reg .input100').each(function () {
    $(this).focus(function () {
      hideValidate(this);
    });
  });
  
  /**
   * @function validate
   * @param input jQuery object, representing fields in form
   * @returns {boolean} Function returns false, if email fails to match regEx
   * or if password is being checked , it mustn't be empty or less than 6 chars.
   */
  function validate(input) {
    //provjerimo tip inputa ili po imenu
    if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
      //RegEx za mail validaciju
      if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        return false;
      }
    }
    else {
      //provjera passworda gorenavedena
      if ($(input).val().trim() == '' || $(input).val().trim().length < 6) {
        return false;
      }
    }
  }
  //da prikaze poruku na field, ako se neki error desi
  function showValidate(input) {
    var thisAlert = $(input).parent();
    if (input.attr('type') == 'password' && input.val().length < 6)
      $(thisAlert).addClass('alert-validate-len');
    else
      $(thisAlert).addClass('alert-validate');
  }
  //da kad kliknemo field u focus da poruka nestane
  function hideValidate(input) {
    var thisAlert = $(input).parent();
    if (thisAlert.hasClass('alert-validate'))
      $(thisAlert).removeClass('alert-validate');
    if (thisAlert.hasClass('alert-validate-len'))
      $(thisAlert).removeClass('alert-validate-len');
  }


  