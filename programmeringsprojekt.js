<script src="https://koda.nu/simple.js"> 

  

     var x1moln = 20; 

    var y1moln = 270; 

    var moln1Color = "white"; 

       

      var x2moln = 200; 

    var y2moln = 260; 

    var moln2Color = "white"; 

     

    var x3moln = 350; 

    var y3moln = 290; 

    var moln3Color = "white"; 


	var molnRadie = 35;
    

  

      var riktning = "höger"; 

   

      var xhimmel = 0; 

      var yhimmel = 0;     

      var himmelWidth = 700; 

    var himmelHeight = 400; 

      var himmelColor = "DodgerBlue"; 

 
   

      var xhav = 0; 

    var yhav = 290; 

      var havWidth = 700; 

    var havHeight = 200; 

    var havColor = "blue"; 
    
    
     var xträdstam1 = 500; 

    var yträdstam1 = 25; 

      var trädstamWidth1 = 20; 

    var trädstamHeight1 = 290; 

    var trädstamColor = "brown"; 
    
   
   var xträdstam2 = 300; 

    var yträdstam2 = 40; 

      var trädstamWidth2 = 20; 

    var trädstamHeight2 = 290; 
    
	var trädstamColor = "brown"; 
    
    
     var xträdstam3 = 100; 

    var yträdstam3 = 30; 

      var trädstamWidth3 = 20; 

    var trädstamHeight3 = 290; 
    
	var trädstamColor = "brown"; 
   

      var catX = 100; 

      var catY = 100; 

      var catSpeed = 4;  

    

    function update () 

  { 

      clearScreen(); 

     

  

     rectangle(xhimmel,yhimmel,himmelWidth,himmelHeight, himmelColor); 

  //Rita ut en blå rektangel som ska täcka mesta del av skärmen, den ska bli himmeln. X-koordinat= 0, Y-koordinat= 0, himmelWidth= 700, himmelHeight = 400. 

   

   

       circle(x1moln,y1moln,molnRadie,moln1Color); 

     

      if (riktning == "höger") 

    { 

        x1moln += 1; 

          y1moln += 0; 

       

    } 

     

  if (x1moln > 650) 

       

    { 

       

      riktning = "vänster"; 

       

    } 

     

  if (riktning == "vänster") 

       

    { 

        x1moln -= 1; 

          y1moln -= 0; 

    } 

     

    if (x1moln <11) 

         

    { 

         

    riktning = "höger"; 

         

    } 

     

      

//När x1 värdet kommer över 650, så studsar den tillbaka åt vänster. När x-värdet blir mindre än 11, så studsar den tillbaka åt höger.     

         

    circle(x2moln,y2moln,molnRadie,moln2Color); 

    if (riktning == "höger") 

    { 

        x2moln += 1; 

          y2moln += 0; 

       

    } 

     

  if (x2moln > 620) 

       

    { 

       

      riktning = "vänster"; 

       

    } 

     

  if (riktning == "vänster") 

       

    { 

        x2moln -= 1; 

          y2moln -= 0; 

    } 

     

    if (x2moln <21) 

         

    { 

         

    riktning = "höger"; 

         

    } 

     

  

//När x2 värdet kommer över 620, så studsar den tillbaka åt vänster. När x-värdet blir mindre än 21, så studsar den tillbaka åt höger. 

       

    circle(x3moln,y3moln,molnRadie,moln3Color);  

    if (riktning == "höger") 

    { 

        x3moln += 1; 

          y3moln += 0; 

       

    } 

     

  if (x3moln > 610) 

       

    { 

       

      riktning = "vänster"; 

       

    } 

     

  if (riktning == "vänster") 

       

    { 

        x3moln -= 1; 

          y3moln -= 0; 

    } 

     

    if (x3moln <11) 

         

    { 

         

    riktning = "höger"; 

         

    } 

     

    

// När x3 värdet kommer över 610, så studsar den tillbaka åt vänster. När x-värdet blir mindre än 11, så studsar den tillbaka åt höger. 

    
  

    rectangle(xhav,yhav,havWidth,havHeight,havColor); 

  //Rita ut en blå rektangel som ska täcka hela skärmen längst ner, den ska bli havet. X-koordinat= 0, Y-koordinat= 400, havWidth= 700, havHeight= 50. 
  
   rectangle(xträdstam1,yträdstam1,trädstamWidth1,trädstamHeight1,trädstamColor); 
   rectangle(xträdstam2,yträdstam2,trädstamWidth2,trädstamHeight2,trädstamColor); 
   rectangle(xträdstam3,yträdstam3,trädstamWidth3,trädstamHeight3,trädstamColor); 
   

  //Rita ut en brun rektangel som ska bli trädstammen för ett träd, höger om huset. X-koordinat= 500, Y-koordinat= 200, trädstamWidth= 20, trädstamHeight= 200. 

   

  

     { 

      

    picture (catX,catY, ); 

     

    if (keyboard.d) 

      catX += catSpeed; 

    if (keyboard.a) 

      catX -= catSpeed; 

    if (keyboard.w) 

      catY -= catSpeed; 

    if (keyboard.s) 

      catY += catSpeed; 
        

  

    } 

      

  } 

    

   

</script> 