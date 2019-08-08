var marker;


function dir() {
    $('head').append('<link rel="stylesheet" href="assets/css/rtl.css"/>');
    document.getElementsByTagName("body")[0].style ='direction: rtl;'
}

function nav(type) {
    var search_nav = document.getElementById("search_nav");
    var cat_nav = document.getElementById("cat_nav");

if (type=="small") {
    search_nav.style.display="block"
    search_nav.classList.add("small-header");
    cat_nav.style.display="block"

}
if (type=="larg") {
    search_nav.style.display="block"

    search_nav.classList.remove("small-header");
   cat_nav.style.display="block"

}
if (type=="hide") {
    search_nav.style.display="none"
    cat_nav.style.display="none"
}

   
}

function subs(id) {

    console.log(id);
    // $("#subs").html("");

    // $.ajax({
    //     type: 'get',
    //     url: 'http://admin.just-cost.com/api/subCategories/'+id,
    //     contentType: 'application/json',
    //     success : function (data) {
    //         html='<ul class="list-unstyled row">';
    
    //           data.data.forEach(element => {
    //             console.log(element);
    //             html+="<li class='col-sm-4'><a data-val='"+element['id'] +"' (click)='selectcat("+element['id'] +")' href='javascript:;' >"+element['name']+"</a></li>";
    //           });
    //         html+='</ul>';
    //         $("#subs").append(html);
    //     }
    //   });
}

function  refr()
{


}

function getSelectChecked() {
            var selected = [];
            $('#attrips input:checked').each(function() {
                selected.push($(this).attr('value'));
            });
            console.log(selected);
            return selected;
}


function selectcat(data)
{

 $("#category_id").val(  data.dataset.val).trigger('input')
}

function owl() {
    $.ajax({
        type: 'get',
        url: 'http://localhost:8000/api/sliders',
        contentType: 'application/json',
        success : function (data) {
            console.log(data.data);
            html='<div class="owl-carousel">';
              data.data.forEach(element => {
                html+="<div class='item'><img src='"+element+"' alt='Image 1'></div>";
              });
            html+='</div>';
            $("#slider").append(html);
            
           // $(".owl-carousel").owlCarousel();
            var $owl = $('.owl-carousel').owlCarousel({
              items: 1,
              loop:true
          });
          $owl.trigger('refresh.owl.carousel');
        }
      });
}

function owl2() {
    $.ajax({
        type: 'get',
        url: 'http://localhost:8000/api/sliders',
        contentType: 'application/json',
        success : function (data) {
            console.log(data.data);
            html='<div class="owl-carousel">';
              data.data.forEach(element => {
                html+="<div class='item'><img src='"+element+"' alt='Image 1'></div>";
              });
            html+='</div>';
            $("#slider2").append(html);
            
           // $(".owl-carousel").owlCarousel();
            var $owl = $('.owl-carousel').owlCarousel({
              items: 1,
              loop:true
          });
          $owl.trigger('refresh.owl.carousel');
        }
      });
}



    function goup(){
        $('html, body').animate({
            scrollTop: '0'
        }, 800);
    }

function success(msg){
    swal({
        title: msg,
        icon: 'success',
        className: "green-bg",
        buttons: {
            cancel: false,
            confirm: 'Ok',
        },
    });
    $('#mainmodel').modal('hide');

}
function ViewMap()
{
    var mapProp= {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:15,
      };
      var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
      var marker = new google.maps.Marker({position: mapProp.center, map: map});
}

function SetMap()
{
    var mmaapp= {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:15,
      };

      var map2 = new  google.maps.Map(document.getElementById("SetGoogleMap"),mmaapp);
    // marker = new google.maps.Marker({position: mmaapp.center, map: map2});
            google.maps.event.addListener(map2, 'click', function(event) {
                addMarker(event.latLng,map2);
            });
}
  // Function for adding a marker to the page.
  function addMarker(location,map) {
    if (!marker || !marker.setPosition) {
        marker = new google.maps.Marker({
          position: location,
          map: map,
        });
      } else {
        marker.setPosition(location);
      }

    // var ma = new google.maps.Marker({
    //     position: location,
    //     map: map
    // });
}

function getMarker()
{
    return marker
}

$(document).ready(function () {
 
        var navListItems = $('div.setup-panel div a'),
                allWells = $('.setup-content'),
                allNextBtn = $('.nextBtn'),
                  allPrevBtn = $('.prevBtn');
      
        allWells.hide();
      
        navListItems.click(function (e) {
            e.preventDefault();
            var $target = $($(this).attr('href')),
                    $item = $(this);
      
            if (!$item.hasClass('disabled')) {
                navListItems.removeClass('btn-primary').addClass('btn-default');
                $item.addClass('btn-primary');
                allWells.hide();
                $target.show();
                $target.find('input:eq(0)').focus();
            }
        });
        
        allPrevBtn.click(function(){
            var curStep = $(this).closest(".setup-content"),
                curStepBtn = curStep.attr("id"),
                prevStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a");
      
                prevStepWizard.removeAttr('disabled').trigger('click');
        });
      
        allNextBtn.click(function(){
            var curStep = $(this).closest(".setup-content"),
                curStepBtn = curStep.attr("id"),
                nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
                curInputs = curStep.find("input[type='text'],input[type='url']"),
                isValid = true;
      
            $(".form-group").removeClass("has-error");
            for(var i=0; i<curInputs.length; i++){
                if (!curInputs[i].validity.valid){
                    isValid = false;
                    $(curInputs[i]).closest(".form-group").addClass("has-error");
                }
            }
      
            if (isValid)
                nextStepWizard.removeAttr('disabled').trigger('click');
        });
      
        $('div.setup-panel div a.btn-primary').trigger('click');

    //   var $owl = $('.owl-carousel').owlCarousel({
    //       items: 1,
    //       loop:true
    //   });
      
    //   $owl.trigger('refresh.owl.carousel');
// USE STRICT


// TRIGGER NICE SCROLL

// $("html").niceScroll({

//     cursorcolor: '#383F4C',
//     cursorborderradius: 0,
//     cursorwidth: 10,
//     cursorborder: '1px solid #383F4C'

// });

// SHOW MENU 


$('.nav-small i.fa-bars').click(function () {

    $('.nav-small .drop-small').toggleClass('is-visible');

    if ($('.nav-small .drop-small').hasClass('is-visible')) {

        $('.nav-small .drop-small').slideDown(800);

    } else {

        $('.nav-small .drop-small').slideUp(800);
    }
});


// CLASS ACTIVE 

$('.catogery .paginaion li , .profile .tab-content > .tab-pane li.page').click(function () {

    $(this).addClass('active').siblings().removeClass('active');
});

// SCROLL EVENT

$(window).scroll(function () {

    if ($(window).scrollTop() > 400) {

        $('.go-top').fadeIn();

    } else {

        $('.go-top').fadeOut();
    }
});

// CLICK EVENT

$('.go-top').on("click", function () {

    $('html, body').animate({
        scrollTop: '0'
    }, 800);
});

// YELLOW BACKGROUND 

$('.add-ad .panel').click(function () {

    $(this).addClass('yellow-panel').parent().siblings().find('.panel').removeClass('yellow-panel');
});

// CUSTOMIZE UPLOAD FILE 

$('.details .panel .file1').wrap('<div class="item-upload"><i class="fas fa-plus-circle"></i></div>');
$('.details .panel .file2').wrap('<div class="item-upload"><i class="fas fa-plus-circle"></i></div>');
$('.details .panel .file3').wrap('<div class="item-upload"><i class="fas fa-plus-circle"></i></div>');
$('.details .panel .file4').wrap('<div class="item-upload"><i class="fas fa-plus-circle"></i></div>');

// TRIGGER SWEET ALERT

$('.success').click(function () {
    swal({
        title: "Your ad has been posted",
        icon: 'success',
        className: "green-bg",
        buttons: {
            cancel: false,
            confirm: 'View Ad',
        },
    });
});


$('.success2').click(function () {

    swal({
        title: "Successful Registration",
        icon: 'success',
        className: "green-bg",
        buttons: {
            cancel: false,
            confirm: 'Ok',
        },
    });
});
    
$('.success3').click(function () {

    swal({
        title: "Congratulations",
        text: "Your password has been changed successfully.",
        icon: 'success',
        className: "green-bg",
        buttons: {
            cancel: false,
            confirm: 'Go to Homepage',
        },
    });
});

});