
async function inputChanged(){
    if (document.getElementById("mytexteare").value !== ""
        && document.getElementById("nameInput").value !== "")
        document.getElementById("sendBtn").style.display = 'block';
    }
      mytexteare.onchange= function(){
        inputChanged()
      }
      nameInput.onchange=function(){
        inputChanged()
      }
     
     
      mytexteare.onblur=function(){
        document.getElementById("content").style.transform=
        "translate("+(-10)+"px,"+(-170)+"px)";
      }
      async function sendMessage() {	
        //document.getElementById("blockMsg").style.transform=
        //"translate("+300+"px,"+0+"px)";
        fetch('https://chat.cam12a.repl.co/add', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({Name: document.getElementById("nameInput").value, Text: document.getElementById("mytexteare").value})
      });
        var div=document.createElement('div')
        div.innerHTML='<div> Имя: '+document.getElementById("nameInput").value +'</div><div>Сообщение :'+ document.getElementById("mytexteare").value+'</div>'   
        document.getElementById("msgContent").appendChild(div);
        
    }
    
    
    
    /*async function loadMessages() {
      let response = await fetch('https://chat.cam12a.repl.co/get')
        let msg = await response.json()
        messages.value = msg.sort((a, b) => new Date(a.TIME) < new Date(b.TIME) ? -1 : 1)
    }*/
     