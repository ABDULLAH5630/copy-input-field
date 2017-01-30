$(document).ready(function(){
    
    
    
    
   
    $("#fCopy").click(function(){
                        var fName = $("#fName").text();
                        $("#fInput").val(fName);
                        $("#fCopy").addClass("disabled");
                      });
    
    
    
    
    $("#lCopy").click(function(){
                        var lName = $("#lName").text();
                        $("#lInput").val(lName);
                        $("#lCopy").addClass("disabled");
                      });
    
    
    
    
    $("#emailCopy").click(function(){
                        var email = $("#email").text();
                        $("#emailInput").val(email);
                        $("#emailCopy").addClass("disabled");
                      });
    
    
    
    $("#passCopy").click(function(){
                        var pass = $("#pass").text();
                        $("#passInput").val(pass);
                        $("#passCopy").addClass("disabled");
                      });
    
    
    
    $("#phCopy").click(function(){
                        var ph = $("#ph").text();
                        $("#phInput").val(ph);
                        $("#phCopy").addClass("disabled");
                      });
    
    
    
    $("#copyAll").click(function(){
                        var fName = $("#fName").text();
                        $("#fInput").val(fName);
                        var lName = $("#lName").text();
                        $("#lInput").val(lName);
                        var email = $("#email").text();
                        $("#emailInput").val(email);
                        var pass = $("#pass").text();
                        $("#passInput").val(pass);
                        var ph = $("#ph").text();
                        $("#phInput").val(ph);
                        $("#copyAll").addClass("disabled");
                      });
    
    
    
    
    
    
});