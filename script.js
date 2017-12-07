$(document).ready(function(){

var initialSum=2000;
var sumLeft;

//crop type
var c1={name:"Sugarcane",num:1,cost:300,seedCostModifier:0.3,premium:0.6,des:"You can never go wrong with sugarcanes -$300"}
var c2={name:"Coffee",num:2,cost:500,seedCostModifier:0.5,premium:0.8,des:"There is no shortage of demand for coffee -$500"}
var c3={name:"Cotton",num:3,cost:600,seedCostModifier:0.6,premium:1.0,des:"Cotton is always needed to make clothes. -$600"}
var c4={name:"Tobacco",num:4,cost:800,seedCostModifier:0.8,premium:1.2, des:"Tobacco is an excellent investment -$800"}
var c5={name:"Cannibis",num:5,cost:1100,seedCostModifier:1.1,premium:1.8, des:"Cannibis is a high-risk, high-reward venture -$1100"}

var crops=[c1,c2,c3,c4,c5];


function findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}

//start screen

$(".backdrop").append("<img src='http://hydropros.com/wp-content/uploads/sites/2/2015/12/cash-crop.jpg' class='backgroundpic' id='startscreen'>")

$("#text").append("<div class='newgametext'>Cash Crops.</div>")

$("#decisions").append("<button class='newgameoption'>Start</button>")


var chosenCrop;


$(".container").on("click", ".newgameoption" ,function(){
	    $(".newgametext").remove();
        $(".newgameoption").remove();
        $(".backgroundpic").remove();


$(".backdrop").append("<img src='http://capreform.eu/wp-content/uploads/2015/08/Arable-crops.jpg' class='backgroundpic'>")

$("#text").append("<div class='cropcontent'>You are a new farmer who has just inherited a small plot of farmland and a substantial sum of $"+initialSum+". Realizing the potentially greater profits that cash crops can bring over traditional crops, you decided to go all in and dedicate your entire fortune and farmland towards farming cash crops. <br><br> The first thing to do after deciding to be a cash crop farmer is to decide on the type of crop to farm. Usually, the higher the cost of the seeds, the higher the price the harvested crop would sell for. <br><br>Select the type of crop you want to plant:</div>")


for (var i = 0; i < crops.length; i++) {
	$("#decisions").append("<button class='cropoption' id='"+crops[i].name+"'>" + crops[i].des + "</button>")
	
}
});





$(".container").on("click", ".cropoption" ,function(){
	    $(".cropcontent").remove();
        $(".cropoption").remove();
        $(".backgroundpic").remove();

        $(".backdrop").append("<img src='https://i.pinimg.com/736x/af/b5/1b/afb51be644760c0b6d3d5124b83f0384--pirate-sims-.jpg' class='backgroundpic'>")
        $("#text").append("<div class='storetext'>After choosing the type of crop you want to plant, you need to take necessary measures to maximize your harvest. To do that, you head to the store in the town to buy the necessary farming and pest control equipment as well as fertilizers.</div>")
        $("#decisions").append("<button class='storetext' id='choices' > TO THE STORE </button>")
        	var userClicked = $(this).attr("id");
        	chosenCrop = findObjectByKey(crops, "name", userClicked);
	console.log(chosenCrop);


    });








//equipment and stuff
var basicEquipment= {name:"basic",cost:100,des:"Only the bare necessities, like a few rakes and sickles. -$100",res:"as you only bought the basics, your yields did not see any improvement as a result of using better farming tools."}
var upgradedEquipment= {name:"upgraded",cost:200,des:"More equipment to make life easier -$200",res:"as you invested more money in equipment you got better yields"}
var bestEquipment= {name:"best",cost:300,des:"The best and latest equipment plus a few strong oxen -$300",res:"you paid top dollar to procure the best equipment and as a result of this crop output has increased significantly."}
var equipments=[basicEquipment,upgradedEquipment,bestEquipment]

$(".container").on("click", ".storetext", function(){
        $(".storetext").remove();
        $(".backgroundpic").remove();
        $(".backdrop").append("<img src='https://robyngioia.wikispaces.com/file/view/10301272.jpg/130812007/10301272.jpg' class='backgroundpic'>")
        $("#text").append("<div class='equipmenttext' id='choices'>Select the type of equipment you want to buy:</div>")


for (var i = 0; i < equipments.length; i++) {
	$("#decisions").append("<button class='equipmentoption' id='"+equipments[i].des+"' >" + equipments[i].des + "</button>")
	
}


    });


var chosenEquipment;
// //fertilizer types
var basicFertilizer= {name:"basic",cost:100,des:"Fertilizer gotten mainly off excrement from questionable sources along the streets.Though their quality is questionable, it is probably better than no fertilizer at all.  -$100",res:"the basic level of fertilizer applied marginally improved the output of your crops "}
var upgradedFertilizer= {name:"upgraded",cost:200,des:"High-grade fertilizer gotten from organic sources that will be extremely nutritous for your crops-$200",res:"the investment in high-grade fertilizer paid off quite handsomely and has greatly improved your harvest"}
var bestFertilizer= {name:"best",cost:300,des:"Even more organic high-grade fertilizer. Of the same quality as the above option but with twice the quantity and with a big discount thrown in. There is never too much of a good thing. -$300", res:"the excessive amount of fertilizer applied to your crops resulted in over-fertilization and has severely diminished the output of your crops. Guess too much of a good thing may result in bad outcomes"}
var fertilizers=[basicFertilizer,upgradedFertilizer,bestFertilizer]

$(".container").on("click",".equipmentoption",function(){
        $(".equipmenttext").remove();
        $(".equipmentoption").remove();
        $(".backgroundpic").remove();
        $(".backdrop").append("<img src='http://www.christusrex.org/www2/berry/DB-f10v-d4l.jpg' class='backgroundpic'>")

        var userClicked = $(this).attr("id");
        	chosenEquipment = findObjectByKey(equipments, "des", userClicked);

	console.log(chosenEquipment);

        $("#text").append("<div class='fertilizertext' id='choices'>Select the type of fertilizer you want to buy:</div>")


for (var i = 0; i < fertilizers.length; i++) {
	$("#decisions").append("<button class='fertilizeroption' id='"+fertilizers[i].des+"' >" + fertilizers[i].des + "</button>")
	
}


    });

var chosenFertilizer;

// //pest-control measures
var basicPestControl= {name:"basic",cost:100,des:"A simple fence to keep out unwanted animals -$100",res:"the fences did their job in keeping out larger animals. However, they were not very effective against birds and bugs, resulting in some crops being lost."}
var upgradedPestControl= {name:"upgraded",cost:200,des:"More fences, plus a few scarecrows  -$200",res:"the scarecrows did job well. However, they were not very effective in keeping out the bugs and weeds and still some crops were lost."}
var bestPestControl= {name:"best",cost:300,des:"A comprehensive pest control programme involving pesticides, fences, scarecrows and herbicides to counteract pests of all types  -$300", res:"the comprehensive pest-control measures have paid off and losses of crop due to pests and weeds have been kept to a bare minimum."}
var pesticides=[basicPestControl,upgradedPestControl,bestPestControl]

$(".container").on("click",".fertilizeroption",function(){
        $(".fertilizertext").remove();
        $(".fertilizeroption").remove();
        $(".backgroundpic").remove();
        $(".backdrop").append("<img src='https://www.findshepherd.com/wp-content/uploads/2017/09/The-Eighth-Plague-Locusts-Plagues-of-Egypt.jpg' class='backgroundpic'>")

         var userClicked = $(this).attr("id");
        	chosenFertilizer = findObjectByKey(fertilizers, "des", userClicked);

	console.log(chosenFertilizer);
        $("#text").append("<div class='pestcontroltext' id='choices'>Select the level of pest-control you want to buy:</div>")


for (var i = 0; i < pesticides.length; i++) {
	$("#decisions").append("<button class='pestcontroloption' id='"+pesticides[i].des+"' >" + pesticides[i].des + "</button>")
	
}


    });



var chosenPestControl


$(".container").on("click",".pestcontroloption",function(){
        $(".pestcontroltext").remove();
        $(".pestcontroloption").remove();
        $(".backgroundpic").remove();
        $(".backdrop").append("<img src='https://artstor.files.wordpress.com/2013/04/lessing_art_103107516471.gif' class='backgroundpic'>")

         var userClicked = $(this).attr("id");
        	chosenPestControl = findObjectByKey(pesticides, "des", userClicked);

	console.log(chosenPestControl);
        $("#text").append("<div class='itemsboughttext' id='choices'>You leave the shop with a cart full of your purchases. As you arrive back at your farm after an exhausting day of travelling and shopping, you unearth a dusty record that keeps track of your personal finances.  </div>")



	$("#decisions").append("<button class='itemsboughtoption' id='choices' >Now to check up on our finances</button>")
	



    });


// Total Costs and sum left
var totalCost;


$(".container").on("click",".itemsboughtoption",function(){
	$(".itemsboughttext").remove();
	$(".itemsboughtoption").remove();
	$(".backgroundpic").remove();
	$(".backdrop").append("<img src='http://microeconomicinsights.org/wp-content/uploads/2016/06/5018795998_3e2fa11c1c_o-4-e1467288941131.jpg' class='backgroundpic'>")
	totalCost= chosenCrop.cost+chosenEquipment.cost+chosenFertilizer.cost+chosenPestControl.cost;
	sumLeft= initialSum-totalCost;
console.log(totalCost);
	$("#text").append("<div class='totalcoststext' id='choices'>You spent $"+totalCost+" at the shop.You have $"+sumLeft+" left. Hopefully the upcoming harvest will be a good one.</div>")
	$("#decisions").append("<button class='totalcostsoption' id='choices' >Now to sow the crops and wait for the harvest </button>")

});





//Harvest types:
var awfulHarvest={premium:2,type:"a famine",modifier:0.01, des:"This season's harvest has been the worst in living memory. On the bright side, a shortage may also mean higher prices and a better deal in the marketplace."}
var poorHarvest={premium:1.5,type:"a poor harvest",modifier:0.05,des:"The amount of crops sown are far lower than expected, but hey, it could have been worse."}
var normalHarvest={premium:1,type:"a normal harvest",modifier:1.0,des:"Crop yields are average compared to previous years. It has been a normal year with a mediocre harvest."}
var goodHarvest={premium:0.9,type:"a good harvest",modifier:1.5,des:"It has been one of the better harvests in the past few years. Farmers are expecting a tidy profit from their plentiful harvests!"}
var bountifulHarvest={premium:0.8,type:"a bountiful harvest",modifier:2.0,des:"It is the best harvest in years. However, an abundance of crops in the market may also mean lower prices. "}
var defaultYield=1000
var sellingPrice
 

//Decision Modifiers (Chosen equipment,crops etc and their effects on yield)
function equipmentType(){
	if (chosenEquipment.name=="basic"){return 1;
	}else if(chosenEquipment.name=="upgraded"){return 1.05;
	}else {return 1.15;
	  
	}

}


function fertilizerType(){

	if (chosenFertilizer.name=="basic"){return 1.05;
	}else if(chosenFertilizer.name=="upgraded"){return 1.3;
	}else {return 0.8;
	  
	}

}


function pestControlType(){
	if (chosenPestControl.name=="basic"){return 0.85;
	}else if(chosenPestControl.name=="upgraded"){return 0.95;
	}else {return 1;
	  
	}

}

//Yields
function yieldType(){ return Math.random();

}




function typeOfHarvest(){
	if (yieldType() < 0.1){return awfulHarvest ;
	}else if(yieldType() < 0.3) {return poorHarvest;
	}else if (yieldType() < 0.7) {return normalHarvest;
	}else if (yieldType() < 0.9) {return goodHarvest;
	}else {return bountifulHarvest;
	}

}

var harvestType

$(".container").on("click",".totalcostsoption",function(){
	$(".totalcoststext").remove();
	$(".totalcostsoption").remove();
	$(".backgroundpic").remove();
	$(".backdrop").append("<img src='https://i0.wp.com/www.lostkingdom.net/wp-content/uploads/2015/03/Harvest-Time-Lambourne-Berks.jpg?resize=660%2C425' class='backgroundpic'>")
	harvestType=typeOfHarvest();

	$("#text").append("<div class='harvesttext' id='choices'>For the past year, there has been "+harvestType.type+" in the country. "+harvestType.des+" </div>")
	$("#decisions").append("<button class='harvestoption' id='choices' >Now to reap the crops.</button>")

});



var totalCropsHarvested;




$(".container").on("click",".harvestoption",function(){
	$(".harvesttext").remove();
	$(".harvestoption").remove();
	 $(".backdrop").append("<img src='http://3.bp.blogspot.com/-6HzhSsNECG8/UcB-wrH_9XI/AAAAAAAAAFo/oijQl3fxQvs/s1600/seagulls+and+crickets.jpg' class='backgroundpic'>")
	totalCropsHarvested=Math.round(defaultYield*harvestType.modifier*equipmentType()*fertilizerType()*pestControlType())

	$("#text").append("<div class='cropsharvestedtext' id='choices'> Remember the stuff you bought at the store? They too will affect the outcome of your harvest!<br><br> Equipment-wise, "+chosenEquipment.res+" For fertilization, "+chosenFertilizer.res+". With respect to pest control, "+chosenPestControl.res+" <br> <br>After reaping the crops you find that your total harvest for the year is "+totalCropsHarvested+" bushels.</div>")
	$("#decisions").append("<button class='cropsharvestedoption' id='choices' >Now that we have harvested the crops, time to go to the marketplace and sell them</button>")

});

var harvestRevenue;
var finalSum;
var finalScore;

$(".container").on("click",".cropsharvestedoption",function(){
	$(".cropsharvestedtext").remove();
	$(".cropsharvestedoption").remove();
	$(".backgroundpic").remove();
	 $(".backdrop").append("<img src='http://www.medievalists.net/wp-content/uploads/2014/10/medieval-harvest-flyer2.jpg' class='backgroundpic'>")

	harvestRevenue= Math.round(harvestType.premium*chosenCrop.premium*totalCropsHarvested)
	finalSum=harvestRevenue+sumLeft

	$("#text").append("<div class='finalsaletext' id='choices'>As you have planted "+chosenCrop.name+"You have made a total revenue of $"+harvestRevenue+". You now have $"+finalSum+" in total.</div>")
	$("#decisions").append("<button class='finalsaleoption' id='choices' >Finish</button>")

});


$(".container").on("click",".finalsaleoption",function(){
	$(".finalsaletext").remove();
	$(".finalsaleoption").remove();
	$(".backgroundpic").remove();
	$(".backdrop").append("<img src='https://www.lostkingdom.net/wp-content/uploads/2015/02/Reeve_and_Serfs.jpg' class='backgroundpic'>")
	finalScore=finalSum-initialSum;

	

	$("#text").append("<div class='finalscoretext'>Over the course of the year,you have managed to earn $ "+finalScore+".</div>")
	$("#decisions").append("<button class='finalscore' id='choices' >New game</button>")

});

$(".container").on("click",".finalscore",function(){
	$(".finalscoretext").remove();
	$(".finalscore").remove();
	$(".backgroundpic").remove();
	$(".backdrop").append("<img src='http://hydropros.com/wp-content/uploads/sites/2/2015/12/cash-crop.jpg' class='backgroundpic'>")

	

	$("#text").append("<div class='newgametext'>Cash Crops</div>")
	$("#decisions").append("<button class='newgameoption'>Start</button>")
});












});

