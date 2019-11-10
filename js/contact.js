$("button").click(function(event) {
    event.preventDefault();
    var user = document.getElementById('username').value;
    alert("Dear " + user + ", we have received your message. Thank you for reaching out to us.");
  });
  $("button").on('click', function(){
    $('form').each(function(){
      this.reset();
    });
  });
  