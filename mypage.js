document.querySelector("#sendButton").addEventListener('click',()=>{
    let selectFile = document.querySelector("#inputImage").files[0];
    console.log(selectFile);
  })
  document.querySelector("#sendButton").addEventListener('click',()=>{
  
  let selectFile = document.querySelector("#inputImage").files[0];
  const file = URL.createObjectURL(selectFile);
  document.querySelector(".uploadImage").src = file;
  
  })
  
  $("#file").on('change',function(){
    var fileName = $("#file").val();
    $(".upload-name").val(fileName);
  });
  