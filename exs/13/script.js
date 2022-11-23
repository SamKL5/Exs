        var i=0;
        function movie()
        {
            document.i.src='1'+i+'.jpg';
            i++; if(i>4) i=0;
            setTimeout('movie();',500);
        }
        
        
        numimg=0;
        imgslide= new Array();
        imgslide[0] = new Image();
        imgslide[1] = new Image();
        imgslide[2] = new Image();
        imgslide[3] = new Image();
        imgslide[0].src = "https://www.shutterstock.com/image-photo/vegetarian-stir-fry-cooking-preparation-women-739356793";
        imgslide[1].src = "https://www.shutterstock.com/image-photo/shellfish-mussels-lemon-herbs-on-wooden-1079642486";
        imgslide[2].src = "https://www.shutterstock.com/image-photo/appetizer-bruschetta-pear-honey-walnut-brie-1745307974";
        imgslide[3].src = "https://www.shutterstock.com/image-photo/chinese-food-noodles-prawns-lime-spices-553793329";
        function dem(n)
        { 
          document.images[0].src = imgslide[numimg].src
          if (n==1)
            { numimg++
              if (numimg== 4)
                numimg=0;}
            else
             { numimg--
               if (numimg ==-1)
                numimg=3;}  
        }  