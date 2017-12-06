$(document).ready(function(){

var initialSum=1000;
var sumLeft;

//crop type
var c1={name:"Sugarcane",num:1,cost:300,seedCostModifier:0.3,premium:1.0,des:"You can never go wrong with sugarcanes -$300"}
var c2={name:"Coffee",num:2,cost:500,seedCostModifier:0.5,premium:1.2,des:"There is no shortage of demand for coffee -$500"}
var c3={name:"Cotton",num:3,cost:600,seedCostModifier:0.6,premium:1.4,des:"Cotton is always needed to make clothes. -$600"}
var c4={name:"Tobacco",num:4,cost:800,seedCostModifier:0.8,premium:1.6, des:"Tobacco is an excellent investment -$800"}

var crops=[c1,c2,c3,c4];


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

$("#text").append("<div class='cropcontent'>Select the type of crop you want to plant:</div>")


for (var i = 0; i < crops.length; i++) {
	$("#decisions").append("<button class='cropoption' id='"+crops[i].name+"'>" + crops[i].des + "</button>")
	
}
});





$(".container").on("click", ".cropoption" ,function(){
	    $(".cropcontent").remove();
        $(".cropoption").remove();
        $(".backgroundpic").remove();

        $(".backdrop").append("<img src='https://i.pinimg.com/736x/af/b5/1b/afb51be644760c0b6d3d5124b83f0384--pirate-sims-.jpg' class='backgroundpic'>")
        $("#text").append("<div class='storetext'>Now to the store to buy stuff:</div>")
        $("#decisions").append("<button class='storetext' id='choices' > TO THE STORE </button>")
        	var userClicked = $(this).attr("id");
        	chosenCrop = findObjectByKey(crops, "name", userClicked);
	console.log(chosenCrop);


    });








//equipment and stuff
var basicEquipment= {name:"basic",cost:100,des:"Only the bare necessities. -$100",res:""}
var upgradedEquipment= {name:"upgraded",cost:200,des:"Better than average equipment to make life easier -$200",res:"As you invested more money in equipment you got better yields"}
var bestEquipment= {name:"best",cost:300,des:"The best and latest equipment plus a few strong oxen -$300",res:"As you paid top dollar to procure the best equipment..."}
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
var basicFertilizer= {name:"basic",cost:100,des:"Cheap cow dung. That is all -$100",res:"Cow dung poop good for crops yada yada"}
var upgradedFertilizer= {name:"upgraded",cost:200,des:"Upgraded cow dung. That is all -$200",res:"upgraded smelly cow dung diarahea even better than normal cow dung"}
var bestFertilizer= {name:"best",cost:300,des:"The best cow dung that will ever grace the surface of your fields. -$300", res:"wagyu cow dung diarahea with laxatives produce best harvests in the fields"}
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
var basicPestControl= {name:"basic",cost:100,des:"A couple of scarecrows -$100",res:"The scarecrows did job well. However, they were not very effective in keeping out the bugs and weeds and still some crops were lost."}
var upgradedPestControl= {name:"upgraded",cost:200,des:"More scarecrows and pesticides -$200",res:"The a potent combination of scarecrows and pesticides that you invested in have successfully kept most of the pests at bay, though there are still some crops lost to the most hardy of bugs."}
var bestPestControl= {name:"best",cost:300,des:"The most comprehensive pest control measures ever known to man -$300", res:"The comprehensive pest-control measures have paid off and losses of crop due to pests and weeds have been kept to a bare minimum."}
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
        $("#text").append("<div class='itemsboughttext' id='choices'>Bought all items time to farm:</div>")



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
	$("#text").append("<div class='totalcoststext' id='choices'>You spent $"+totalCost+" You have $"+sumLeft+" left</div>")
	$("#decisions").append("<button class='totalcostsoption' id='choices' >Click for harvest results</button>")

});





//Harvest types:
var awfulHarvest={type:"famine",modifier:0.2, des:"This season's harvest has been the worst in living memory"}
var poorHarvest={type:"poor",modifier:0.4,des:"The amount of crops sown are far lower than expected, but hey, it could have been worse."}
var normalHarvest={type:"normal",modifier:1.0,des:"Normal harvest. All is well and good. As per normal."}
var goodHarvest={type:"good",modifier:1.5,des:"One of the better harvests"}
var bountifulHarvest={type:"bountiful",modifier:2.0,des:"Amazing. Best harvest in years"}
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

	if (chosenFertilizer.name=="basic"){return 1;
	}else if(chosenFertilizer.name=="upgraded"){return 1.05;
	}else {return 1.15;
	  
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

var harvestType= typeOfHarvest()

$(".container").on("click",".totalcostsoption",function(){
	$(".totalcoststext").remove();
	$(".totalcostsoption").remove();
	$(".backgroundpic").remove();
	$(".backdrop").append("<img src='https://i0.wp.com/www.lostkingdom.net/wp-content/uploads/2015/03/Harvest-Time-Lambourne-Berks.jpg?resize=660%2C425' class='backgroundpic'>")
	

	$("#text").append("<div class='harvesttext' id='choices'>There has been a "+harvestType.type+" Thus,"+harvestType.des+" left</div>")
	$("#decisions").append("<button class='harvestoption' id='choices' >Now to reap the crops..</button>")

});



var totalCropsHarvested;




$(".container").on("click",".harvestoption",function(){
	$(".harvesttext").remove();
	$(".harvestoption").remove();
	 $(".backdrop").append("<img src='http://3.bp.blogspot.com/-6HzhSsNECG8/UcB-wrH_9XI/AAAAAAAAAFo/oijQl3fxQvs/s1600/seagulls+and+crickets.jpg' class='backgroundpic'>")
	totalCropsHarvested=Math.round(defaultYield*harvestType.modifier*equipmentType()*fertilizerType()*pestControlType())

	$("#text").append("<div class='cropsharvestedtext' id='choices'>There has been a "+chosenEquipment.res+" Fertilizer"+chosenFertilizer.res+" Pest control"+chosenPestControl.res+". Thus,the total harvest for the year is "+totalCropsHarvested+" bushels.</div>")
	$("#decisions").append("<button class='cropsharvestedoption' id='choices' >Now that we have harvested the crops, time to go to the marketplace and sell them</button>")

});

var harvestRevenue;
var finalSum

$(".container").on("click",".cropsharvestedoption",function(){
	$(".cropsharvestedtext").remove();
	$(".cropsharvestedoption").remove();
	$(".backgroundpic").remove();
	 $(".backdrop").append("<img src='http://www.medievalists.net/wp-content/uploads/2014/10/medieval-harvest-flyer2.jpg' class='backgroundpic'>")

	harvestRevenue= Math.round((1/harvestType.modifier)*chosenCrop.premium*totalCropsHarvested)
	finalSum=harvestRevenue+sumLeft

	$("#text").append("<div class='finalsaletext' id='choices'>As you have planted "+chosenCrop.name+"You have made a total revenue of $"+harvestRevenue+". You now have $"+finalSum+" in total.</div>")
	$("#decisions").append("<button class='finalsaleoption' id='choices' >Finish</button>")

});


$(".container").on("click",".finalsaleoption",function(){
	$(".finalsaletext").remove();
	$(".finalsaleoption").remove();
	$(".backgroundpic").remove();
	$(".backdrop").append("<img src='https://www.lostkingdom.net/wp-content/uploads/2015/02/Reeve_and_Serfs.jpg' class='backgroundpic'>")

	

	$("#text").append("<div class='finalscoretext'>Your final score is "+finalSum+"</div>")
	$("#decisions").append("<button class='finalscore' id='choices' >New game</button>")

});

$(".container").on("click",".finalscore",function(){
	$(".finalscoretext").remove();
	$(".finalscore").remove();
	$(".backgroundpic").remove();
	$(".backdrop").append("<img src='http://hydropros.com/wp-content/uploads/sites/2/2015/12/cash-crop.jpg' class='backgroundpic'>")

	

	$("#text").append("<div class='newgametext'>Select the type of crop you want to plant:</div>")
	$("#decisions").append("<button class='newgameoption'>Start</button>")
});









// function harvestRevenue(){
// 	(1/yieldType())*harvestType();
// }
// var finalYield= harvestType()*


});

