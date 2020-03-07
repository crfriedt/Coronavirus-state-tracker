// state totals 

let alabamaTotal = 0;
let alaskaTotal = 0;
let arizonaTotal = 5;
let arkansasTotal = 0;
let californiaTotal = 54;
let coloradoTotal = 8;
let connecticutTotal = 2;
let delawareTotal = 0;
let floridaTotal = 8;
let georgiaTotal = 6;
let hawaiiTotal = 1;
let idahoTotal = 0;
let illinoisTotal = 6;
let indianaTotal = 1;
let iowaTotal = 0;
let kansasTotal = 0;
let kentuckyTotal = 1;
let louisianaTotal = 0;
let maineTotal = 1;
let marylandTotal = 3;
let massachusettsTotal = 13;
let michiganTotal = 0;
let minnesotaTotal = 0;
let mississippiTotal = 0;
let missouriTotal = 0;
let montanaTotal = 0;
let nebraskaTotal = 1;
let nevadaTotal = 2;
let newhampshireTotal = 2;
let newjerseyTotal = 2;
let newmexicoTotal = 0;
let newyorkTotal = 44;
let northcarolinaTotal = 2;
let northdakotaTotal = 0;
let ohioTotal = 0;
let oklahomaTotal = 1;
let oregonTotal = 3;
let pennsylvaniaTotal = 2;
let rhodeislandTotal = 3;
let southcarolinaTotal = 0;
let southdakotaTotal = 0;
let tennesseeTotal = 1;
let texasTotal = 8;
let utahTotal = 1;
let vermontTotal = 0;
let virginiaTotal = 0;
let washingtonTotal = 80;
let westvirginiaTotal = 0;
let wisconsinTotal = 1;
let wyomingTotal = 0;



// hamburger menu and mouseover functions for states

$ (document).ready(function(){
    $("body").on('click', '.top', function(){
      $("nav.menu").toggleClass("menu_show");
    });
    $('#Alabama').on("mouseover", function() {
    $('#current-number').val(alabamaTotal);
    $('.current-state-name').html('Alabama');
  });
    $('#Alaska').on("mouseover", function() {
    $('#current-number').val(alaskaTotal);
    $('.current-state-name').html('Alaska');
  });
    $('#Arizona').on("mouseover", function() {
    $('#current-number').val(arizonaTotal);
    $('.current-state-name').html('Arizona');
  });
    $('#Arkansas').on("mouseover", function() {
    $('#current-number').val(arkansasTotal);
    $('.current-state-name').html('Arkansas');
  });
    $('#California').on("mouseover", function() {
    $('#current-number').val(californiaTotal);
    $('.current-state-name').html('California');
  });
    $('#Colorado').on("mouseover", function() {
    $('#current-number').val(coloradoTotal);
    $('.current-state-name').html('Colorado');
  });
    $('#Connecticut').on("mouseover", function() {
    $('#current-number').val(connecticutTotal);
    $('.current-state-name').html('Connecticut');
  });
    $('#Delaware').on("mouseover", function() {
    $('#current-number').val(delawareTotal);
    $('.current-state-name').html('Delaware');
  });
    $('#Florida').on("mouseover", function() {
    $('#current-number').val(floridaTotal);
    $('.current-state-name').html('Florida');
  });
    $('#Georgia').on("mouseover", function() {
    $('#current-number').val(georgiaTotal);
    $('.current-state-name').html('Georgia');
  });
    $('#Hawaii').on("mouseover", function() {
    $('#current-number').val(hawaiiTotal);
    $('.current-state-name').html('Hawaii');
  });
    $('#Idaho').on("mouseover", function() {
    $('#current-number').val(idahoTotal);
    $('.current-state-name').html('Idaho');
  });
    $('#Illinois').on("mouseover", function() {
    $('#current-number').val(illinoisTotal);
    $('.current-state-name').html('Illinois');
  });
    $('#Indiana').on("mouseover", function() {
    $('#current-number').val(indianaTotal);
    $('.current-state-name').html('Indiana');
  });
    $('#Iowa').on("mouseover", function() {
    $('#current-number').val(iowaTotal);
    $('.current-state-name').html('Iowa');
  });
    $('#Kansas').on("mouseover", function() {
    $('#current-number').val(kansasTotal);
    $('.current-state-name').html('Kansas');
  });
    $('#Kentucky').on("mouseover", function() {
    $('#current-number').val(kentuckyTotal);
    $('.current-state-name').html('Kentucky');
  });
    $('#Louisiana').on("mouseover", function() {
    $('#current-number').val(louisianaTotal);
    $('.current-state-name').html('Louisiana');
  });
    $('#Maine').on("mouseover", function() {
    $('#current-number').val(maineTotal);
    $('.current-state-name').html('Maine');
  });
    $('#Maryland').on("mouseover", function() {
    $('#current-number').val(marylandTotal);
    $('.current-state-name').html('Maryland');
  });
    $('#Massachusetts').on("mouseover", function() {
    $('#current-number').val(massachusettsTotal);
    $('.current-state-name').html('Massachusetts');
  });
    $('#Michigan').on("mouseover", function() {
    $('#current-number').val(michiganTotal);
    $('.current-state-name').html('Michigan');
  });
    $('#Minnesota').on("mouseover", function() {
    $('#current-number').val(minnesotaTotal);
    $('.current-state-name').html('Minnesota');
  });
    $('#Mississippi').on("mouseover", function() {
    $('#current-number').val(mississippiTotal);
    $('.current-state-name').html('Mississippi');
  });
    $('#Missouri').on("mouseover", function() {
    $('#current-number').val(missouriTotal);
    $('.current-state-name').html('Missouri');
  });
    $('#Montana').on("mouseover", function() {
    $('#current-number').val(montanaTotal);
    $('.current-state-name').html('Montana');
  });
    $('#Nebraska').on("mouseover", function() {
    $('#current-number').val(nebraskaTotal);
    $('.current-state-name').html('Nebraska');
  });
    $('#Nevada').on("mouseover", function() {
    $('#current-number').val(nevadaTotal);
    $('.current-state-name').html('Nevada');
  });
    $('#NewHampshire').on("mouseover", function() {
    $('#current-number').val(newhampshireTotal);
    $('.current-state-name').html('New Hampshire');
  });
    $('#NewJersey').on("mouseover", function() {
    $('#current-number').val(newjerseyTotal);
    $('.current-state-name').html('New Jersey');
  });
    $('#NewMexico').on("mouseover", function() {
    $('#current-number').val(newmexicoTotal);
    $('.current-state-name').html('New Mexico');
  });
    $('#NewYork').on("mouseover", function() {
    $('#current-number').val(newyorkTotal);
    $('.current-state-name').html('New York');
  });
    $('#NorthCarolina').on("mouseover", function() {
    $('#current-number').val(northcarolinaTotal);
    $('.current-state-name').html('North Carolina');
  });
    $('#NorthDakota').on("mouseover", function() {
    $('#current-number').val(northdakotaTotal);
    $('.current-state-name').html('North Dakota');
  });
    $('#Ohio').on("mouseover", function() {
    $('#current-number').val(ohioTotal);
    $('.current-state-name').html('Ohio');
  });
    $('#Oklahoma').on("mouseover", function() {
    $('#current-number').val(oklahomaTotal);
    $('.current-state-name').html('Oklahoma');
  });
    $('#Oregon').on("mouseover", function() {
    $('#current-number').val(oregonTotal);
    $('.current-state-name').html('Oregon');
  });
    $('#Pennsylvania').on("mouseover", function() {
    $('#current-number').val(pennsylvaniaTotal);
    $('.current-state-name').html('Pennsylvania');
  });
    $('#RhodeIsland').on("mouseover", function() {
    $('#current-number').val(rhodeislandTotal);
    $('.current-state-name').html('Rhode Island');
  });
    $('#SouthCarolina').on("mouseover", function() {
    $('#current-number').val(southcarolinaTotal);
    $('.current-state-name').html('South Carolina');
  });
    $('#SouthDakota').on("mouseover", function() {
    $('#current-number').val(southdakotaTotal);
    $('.current-state-name').html('South Dakota');
  });
    $('#Tennessee').on("mouseover", function() {
    $('#current-number').val(tennesseeTotal);
    $('.current-state-name').html('Tennessee');
  });
    $('#Texas').on("mouseover", function() {
    $('#current-number').val(texasTotal);
    $('.current-state-name').html('Texas');
  });
    $('#Utah').on("mouseover", function() {
    $('#current-number').val(utahTotal);
    $('.current-state-name').html('Utah');
  });
    $('#Vermont').on("mouseover", function() {
    $('#current-number').val(vermontTotal);
    $('.current-state-name').html('Vermont');
  });
    $('#Virginia').on("mouseover", function() {
    $('#current-number').val(virginiaTotal);
    $('.current-state-name').html('Virginia');
  });
    $('#Washington1').on("mouseover", function() {
    $('#current-number').val(washingtonTotal);
    $('.current-state-name').html('Washington');
  });
    $('#Washington2').on("mouseover", function() {
    $('#current-number').val(washingtonTotal);
    $('.current-state-name').html('Washington');
  });
    $('#WestVirginia').on("mouseover", function() {
    $('#current-number').val(westvirginiaTotal);
    $('.current-state-name').html('West Virginia');
  });
    $('#Wisconsin').on("mouseover", function() {
    $('#current-number').val(wisconsinTotal);
    $('.current-state-name').html('Wisconsin');
  });
    $('#Wyoming').on("mouseover", function() {
    $('#current-number').val(wyomingTotal);
    $('.current-state-name').html('Wyoming');
  });
});


	