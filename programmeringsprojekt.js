<script src="https://koda.nu/simple.js"> 

  

     var x1svan = 25; 

    var y1svan = 270; 

    var svan1Color = "white"; 
 
	
  	var x11svan = 60;
  	var y11svan = 263;
  	var svan11Color = "white";
  
  	var x12svan = 75;
  	var y12svan = 220;
  	var svan12Color = "white";
  	var svan12Radie = 20;
  
  	var x13svan = 80;
  	var y13svan = 210;
  	var svan13Color = "black";
  	var svan13Radie = 3;
  
  	var x14svan = 90;
    var y14svan = 205;
    var x24svan = 90;
    var y24svan = 220;
    var x34svan = 110;
    var y34svan = 210;
  	var svan14Color = "orange";
       

      var x2svan = 200; 

    var y2svan = 260; 

    var svan2Color = "white"; 

     
 	var x21svan = 240;
  	var y21svan = 260;
  	var svan21Color = "white";
  
  	var x22svan = 255;
  	var y22svan = 215;
  	var svan22Color = "white";
  	var svan22Radie = 23;
  
  	var x23svan = 260;
  	var y23svan = 200;
  	var svan23Color = "black";
  	var svan23Radie = 3;
  
  	var x114svan = 270;
    var y114svan = 205;
    var x224svan = 270;
    var y224svan = 220;
    var x334svan = 300;
    var y334svan = 210;
  	var svan114Color = "orange";
  

    var x3svan = 350; 
    var y3svan = 290; 
	var svan3Color = "white"; 
  
  
 	var x31svan = 390;
  	var y31svan = 273;
  	var svan31Color = "white";
  
  	var x32svan = 400;
  	var y32svan = 230;
  	var svan32Color = "white";
  	var svan32Radie = 23;
  
  	var x33svan = 410;
  	var y33svan = 220;
  	var svan33Color = "black";
  	var svan33Radie = 3;
  
  	var x1114svan = 420;
    var y1114svan = 220;
    var x2224svan = 420;
    var y2224svan = 235;
    var x3334svan = 450;
    var y3334svan = 225;
  	var svan1114Color = "orange";
  

	var svanRadie = 28;
    

  

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
  
   

      var catX = 10; 

      var catY = 230; 

      var catSpeed = 2;  

    

    function update () 

  { 

      clearScreen(); 

     

  

     rectangle(xhimmel,yhimmel,himmelWidth,himmelHeight, himmelColor); 

  //Rita ut en blå rektangel som ska täcka mesta del av skärmen, den ska bli himmeln. X-koordinat= 0, Y-koordinat= 0, himmelWidth= 700, himmelHeight = 400. 

   

   

       circle(x1svan,y1svan,svanRadie,svan1Color); 

     

      if (riktning == "höger") 

    { 

        x1svan += 1; 

          y1svan += 0; 

       

    } 

     

  if (x1svan > 650) 

       

    { 

       

      riktning = "vänster"; 

       

    } 

     

  if (riktning == "vänster") 

       

    { 

        x1svan -= 1; 

          y1svan -= 0; 

    } 

     

    if (x1svan <11) 

         

    { 

         

    riktning = "höger"; 

         

    } 

     

      

//När x1 värdet kommer över 650, så studsar den tillbaka åt vänster. När x-värdet blir mindre än 11, så studsar den tillbaka åt höger.     

         

    circle(x2svan,y2svan,svanRadie,svan2Color); 

    if (riktning == "höger") 

    { 

        x2svan += 1; 

          y2svan += 0; 

       

    } 

     

  if (x2svan > 620) 

       

    { 

       

      riktning = "vänster"; 

       

    } 

     

  if (riktning == "vänster") 

       

    { 

        x2svan -= 1; 

          y2svan -= 0; 

    } 

     

    if (x2svan <21) 

         

    { 

         

    riktning = "höger"; 

         

    } 

     

  

//När x2 värdet kommer över 620, så studsar den tillbaka åt vänster. När x-värdet blir mindre än 21, så studsar den tillbaka åt höger. 

       

    circle(x3svan,y3svan,svanRadie,svan3Color);  

    if (riktning == "höger") 

    { 

        x3svan += 1; 

          y3svan += 0; 

       

    } 

     

  if (x3svan > 610) 

       

    { 

       

      riktning = "vänster"; 

       

    } 

     

  if (riktning == "vänster") 

       

    { 

        x3svan -= 1; 

          y3svan -= 0; 

    } 

     

    if (x3svan <11) 

         

    { 

         

    riktning = "höger"; 

         

    } 
    // När x3 värdet kommer över 610, så studsar den tillbaka åt vänster. När x-värdet blir mindre än 11, så studsar den tillbaka åt höger.

     
	circle(x11svan,y11svan,svanRadie,svan11Color);
    
      if (riktning == "höger") 

    { 

        x11svan += 1; 

          y11svan += 0; 

       

    } 

     

  if (x11svan > 650) 

       

    { 

       

      riktning = "vänster"; 

       

    } 

     

  if (riktning == "vänster") 

       

    { 

        x11svan -= 1; 

          y11svan -= 0; 

    } 

     

    if (x11svan <11) 

         

    { 

         

    riktning = "höger"; 

         

    } 

     
    	circle(x12svan,y12svan,svan12Radie,svan12Color);
    
      if (riktning == "höger") 

    { 

        x12svan += 1; 

          y12svan += 0; 

       

    } 

     

  if (x12svan > 650) 

       

    { 

       

      riktning = "vänster"; 

       

    } 

     

  if (riktning == "vänster") 

       

    { 

        x12svan -= 1; 

          y12svan -= 0; 

    } 

     

    if (x12svan <11) 

         

    { 

         

    riktning = "höger"; 

         

    } 
    
    circle(x13svan,y13svan,svan13Radie,svan13Color);
    
      if (riktning == "höger") 

    { 

        x13svan += 1; 

          y13svan += 0; 

       

    } 

     

  if (x13svan > 650) 

       

    { 

       

      riktning = "vänster"; 

       

    } 

     

  if (riktning == "vänster") 

       

    { 

        x13svan -= 1; 

          y13svan -= 0; 

    } 

     

    if (x13svan <11) 

         

    { 

         

    riktning = "höger"; 

         

    } 
    
     triangle(x14svan,y14svan,x24svan,y24svan,x34svan,y34svan,svan14Color);

     if (riktning == "höger") 

    { 

        x14svan += 1; 

          y14svan += 0; 
      	
      		x24svan += 1;
      
      		y24svan += 0;
      
      		x34svan += 1;
      
      		y34svan += 0;

       

    } 

     

  if (x14svan > 650) 

       

    { 

       

      riktning = "vänster"; 

       

    } 

     

  if (riktning == "vänster") 

       

    { 

        x14svan -= 1; 

          y14svan -= 0; 
    	
      		x24svan -= 1;
      
      		y24svan -= 0;
      
      		x34svan -= 1;
      
      		y34svan -= 0;

    } 

     

    if (x14svan <11) 

         

    { 

         

    riktning = "höger"; 

         

    } 
    
    
    
    circle(x21svan,y21svan,svanRadie,svan21Color);
    
      if (riktning == "höger") 

    { 

        x21svan += 1; 

          y21svan += 0; 

       

    } 

     

  if (x21svan > 650) 

       

    { 

       

      riktning = "vänster"; 

       

    } 

     

  if (riktning == "vänster") 

       

    { 

        x21svan -= 1; 

          y21svan -= 0; 

    } 

     

    if (x21svan <11) 

         

    { 

         

    riktning = "höger"; 

         

    } 

     
    	circle(x22svan,y22svan,svan22Radie,svan22Color);
    
      if (riktning == "höger") 

    { 

        x22svan += 1; 

          y22svan += 0; 

       

    } 

     

  if (x22svan > 650) 

       

    { 

       

      riktning = "vänster"; 

       

    } 

     

  if (riktning == "vänster") 

       

    { 

        x22svan -= 1; 

          y22svan -= 0; 

    } 

     

    if (x22svan <11) 

         

    { 

         

    riktning = "höger"; 

         

    } 
    
    circle(x23svan,y23svan,svan23Radie,svan23Color);
    
      if (riktning == "höger") 

    { 

        x23svan += 1; 

          y23svan += 0; 

       

    } 

     

  if (x23svan > 650) 

       

    { 

       

      riktning = "vänster"; 

       

    } 

     

  if (riktning == "vänster") 

       

    { 

        x23svan -= 1; 

          y23svan -= 0; 

    } 

     

    if (x23svan <11) 

         

    { 

         

    riktning = "höger"; 

         

    } 
    
     triangle(x114svan,y114svan,x224svan,y224svan,x334svan,y334svan,svan114Color);

     if (riktning == "höger") 

    { 

        x114svan += 1; 

          y114svan += 0; 
      	
      		x224svan += 1;
      
      		y224svan += 0;
      
      		x334svan += 1;
      
      		y334svan += 0;

       

    } 

     

  if (x114svan > 650) 

       

    { 

       

      riktning = "vänster"; 

       

    } 

     

  if (riktning == "vänster") 

       

    { 

        x114svan -= 1; 

          y114svan -= 0; 
    	
      		x224svan -= 1;
      
      		y224svan -= 0;
      
      		x334svan -= 1;
      
      		y334svan -= 0;

    } 

     

    if (x114svan <11) 

         

    { 

         

    riktning = "höger"; 

         

    } 
    
    
    
    circle(x31svan,y31svan,svanRadie,svan31Color);
    
      if (riktning == "höger") 

    { 

        x31svan += 1; 

          y31svan += 0; 

       

    } 

     

  if (x31svan > 650) 

       

    { 

       

      riktning = "vänster"; 

       

    } 

     

  if (riktning == "vänster") 

       

    { 

        x31svan -= 1; 

          y31svan -= 0; 

    } 

     

    if (x31svan <11) 

         

    { 

         

    riktning = "höger"; 

         

    } 

     
    	circle(x32svan,y32svan,svan32Radie,svan32Color);
    
      if (riktning == "höger") 

    { 

        x32svan += 1; 

          y32svan += 0; 

       

    } 

     

  if (x32svan > 650) 

       

    { 

       

      riktning = "vänster"; 

       

    } 

     

  if (riktning == "vänster") 

       

    { 

        x32svan -= 1; 

          y32svan -= 0; 

    } 

     

    if (x32svan <11) 

         

    { 

         

    riktning = "höger"; 

         

    } 
    
    circle(x33svan,y33svan,svan33Radie,svan33Color);
    
      if (riktning == "höger") 

    { 

        x33svan += 1; 

          y33svan += 0; 

       

    } 

     

  if (x33svan > 650) 

       

    { 

       

      riktning = "vänster"; 

       

    } 

     

  if (riktning == "vänster") 

       

    { 

        x33svan -= 1; 

          y33svan -= 0; 

    } 

     

    if (x33svan <11) 

         

    { 

         

    riktning = "höger"; 

         

    } 
    
     triangle(x1114svan,y1114svan,x2224svan,y2224svan,x3334svan,y3334svan,svan1114Color);

     if (riktning == "höger") 

    { 

        x1114svan += 1; 

          y1114svan += 0; 
      	
      		x2224svan += 1;
      
      		y2224svan += 0;
      
      		x3334svan += 1;
      
      		y3334svan += 0;

       

    } 

     

  if (x1114svan > 650) 

       

    { 

       

      riktning = "vänster"; 

       

    } 

     

  if (riktning == "vänster") 

       

    { 

        x1114svan -= 1; 

          y1114svan -= 0; 
    	
      		x2224svan -= 1;
      
      		y2224svan -= 0;
      
      		x3334svan -= 1;
      
      		y3334svan -= 0;

    } 

     

    if (x1114svan <11) 

         

    { 

         

    riktning = "höger"; 

         

    } 
    
    

    
  

    rectangle(xhav,yhav,havWidth,havHeight,havColor); 

  //Rita ut en blå rektangel som ska täcka hela skärmen längst ner, den ska bli havet. X-koordinat= 0, Y-koordinat= 400, havWidth= 700, havHeight= 50. 
  
   rectangle(xträdstam1,yträdstam1,trädstamWidth1,trädstamHeight1,trädstamColor); 
   rectangle(xträdstam2,yträdstam2,trädstamWidth2,trädstamHeight2,trädstamColor); 
   rectangle(xträdstam3,yträdstam3,trädstamWidth3,trädstamHeight3,trädstamColor); 
   

  //Rita ut en brun rektangel som ska bli trädstammen för ett träd, höger om huset. X-koordinat= 500, Y-koordinat= 200, trädstamWidth= 20, trädstamHeight= 200. 

   

  

     { 

      

    picture (catX,catY, "https://raw.githubusercontent.com/tildarosvall/webbutveckling/main/Sk%C3%A4rmavbild%202020-12-08%20kl.%2013.31.53.png"); 

     

    if (keyboard.d) 

      catX += catSpeed; 

    if (keyboard.a) 

      catX -= catSpeed; 

    if (keyboard.w) 

      catY -= catSpeed; 

    if (keyboard.s) 

      catY += catSpeed; 
       
        
       if (catY < 190) {
   	alert ("DU KAN BARA KÖRA I VATTNET");
    stopUpdate();
   }

  

    } 

      

  } 

    

   

</script> 