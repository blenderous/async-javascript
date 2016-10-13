require.config({
  baseUrl: "../../front",
  paths: {
    "jquery": "../bower_components/jquery/dist/jquery"
  }
});

require(['pages/home/home.treatment'],
  function(treatment) {
    //
});
