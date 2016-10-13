define(['jquery', '../../components/slider'], function(jquery, slider){

  // add footer
  $('main').append('<footer>&copy; 2016</footer>')
  console.log('treatment: adding footer!');

  // implement slider
  slider.makeSlider("sample data");
});
