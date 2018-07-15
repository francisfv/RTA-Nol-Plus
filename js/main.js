'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* 
  On mobile-first view, the language button inside the masthead is positioned inside the main menu navigation through DOM manipulation
*/
// Pulls li.utility-bar__preferred-language and store it in a variable
var $languageBtn = $('.utility-bar__preferred-language');

// Prepend to main menu on mobile-first view
$languageBtn.responsiveDom({
  appendTo: '.utility-bar',
  mediaQuery: 'screen and (min-width: 900px)'
});

// Siema slider
// extend a Siema class by two methods
// addDots - to create a markup for dots
// updateDots - to update classes on dots on change callback

var SiemaWithDots = function (_Siema) {
  _inherits(SiemaWithDots, _Siema);

  function SiemaWithDots() {
    _classCallCheck(this, SiemaWithDots);

    return _possibleConstructorReturn(this, (SiemaWithDots.__proto__ || Object.getPrototypeOf(SiemaWithDots)).apply(this, arguments));
  }

  _createClass(SiemaWithDots, [{
    key: 'addDots',
    value: function addDots() {
      var _this2 = this;

      // create a contnier for all dots
      // add a class 'dots' for styling reason
      this.dots = document.createElement('div');
      this.dots.classList.add('dots');

      // loop through slides to create a number of dots

      var _loop = function _loop(i) {
        // create a dot
        var dot = document.createElement('button');

        // add a class to dot
        dot.classList.add('dots__item');

        // add an event handler to each of them
        dot.addEventListener('click', function () {
          _this2.goTo(i);
        });

        // append dot to a container for all of them
        _this2.dots.appendChild(dot);
      };

      for (var i = 0; i < this.innerElements.length; i++) {
        _loop(i);
      }

      // add the container full of dots after selector
      this.selector.parentNode.insertBefore(this.dots, this.selector.nextSibling);
    }
  }, {
    key: 'updateDots',
    value: function updateDots() {
      // loop through all dots
      for (var i = 0; i < this.dots.querySelectorAll('button').length; i++) {
        // if current dot matches currentSlide prop, add a class to it, remove otherwise
        var addOrRemove = this.currentSlide === i ? 'add' : 'remove';
        this.dots.querySelectorAll('button')[i].classList[addOrRemove]('dots__item--active');
      }
    }
  }]);

  return SiemaWithDots;
}(Siema);

// instantiate new extended Siema


var mySiemaWithDots = new SiemaWithDots({
  selector: '.hero__carousel',
  duration: 200,
  easing: 'ease-out',
  loop: true,
  // on init trigger method created above
  onInit: function onInit() {
    this.addDots();
    this.updateDots();
  },

  // on change trigger method created above
  onChange: function onChange() {
    this.updateDots();
  }
});

document.querySelector('.prev').addEventListener('click', function () {
  return mySiemaWithDots.prev();
});
document.querySelector('.next').addEventListener('click', function () {
  return mySiemaWithDots.next();
});



// Datepicker
$( function() {
    $("#nolForm-bday").datepicker();
} );


// Toggle pop-up
function popUp() {
    var popUpWindow = document.getElementById("pop-up-window");
    var popUpBackdrop = document.getElementById("pop-up-backdrop");

    if ((popUpWindow.style.display === "none") && (popUpBackdrop.style.display === "none")) {
        popUpWindow.style.display = "block";
        popUpBackdrop.style.display = "block";
    } else {
        popUpWindow.style.display = "none";
        popUpBackdrop.style.display = "none";
    }
} 

function confirmationPopUp() {
   var popUp1 = $(".nol-pop-up1");
   var popUp2 = $(".nol-pop-up2");

   popUp1.hide();
   popUp2.show();
}  

function hidePopUp() {
  var popUpBackdrop = $("#pop-up-backdrop");
  var popUp1 = $(".nol-pop-up1");
  var popUp2 = $(".nol-pop-up2");
  
  popUp1.hide();
  popUp2.hide();
  popUpBackdrop.hide();

}


$( "#accordion" ).accordion({
  heightStyle: "content",
  active:false,
  collapsible: true,
  header:"div.accordianheader"
});


// Statement detail pop-up

$('statement-table').click(function() {
    var x = document.getElementById("statement-pop-up");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }  
});

// Popper.js
var popupRef = $('.i-icon'); 
var popup = $('#popup'); 
popup.hide();

popupRef.click(function(){
  popup.show();
});

