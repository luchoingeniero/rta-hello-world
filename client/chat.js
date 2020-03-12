const socket = io('http://localhost:3000');
var events = {
    sendMessage: 'new_message',
    newMessage: 'read_message'
  }
 
var rightOrLeft = '';  

socket.on('read_message',readMessage);

function sendMessage(message){
    socket.emit(events.sendMessage,message);
}

function  readMessage(message){
    console.log("Recinbi"+message);
    $(".list-group").append(messageTemplate(message));
    $("main").animate({ scrollTop: $('main').prop("scrollHeight")}, 300);
}

function messageTemplate(message){
    rightOrLeft=(!rightOrLeft||rightOrLeft=='primary')?'success':'primary';
  return '<div class="alert alert-'+rightOrLeft+' " role="alert">'+
                message+
              '</div>';
}

function sendEvent(){
    let field = $("#message");
    sendMessage(field.val());
    field.val('');
}

$("#send").click(sendEvent);

$('#message').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        sendEvent();
    }
});

