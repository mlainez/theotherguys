document.createElement("section"); 
document.createElement("nav"); 
document.createElement("article"); 

var IETargetHandler = {
  init: function(){
    $("nav a").click(function(link){
      $(".content").removeClass('current');
      $(".content").addClass('hidden');
      current_block = link.currentTarget.hash;
      $(current_block).removeClass('hidden');
      $(current_block).addClass('current');
    });
  }
}

$(IETargetHandler.init);