$(document).ready(function () {

  var initialSum = 2000
  var sumLeft

  //crop type
  var c1 = {
    name: "Sugarcane",
    num: 1,
    cost: 300,
    seedCostModifier: 0.3,
    premium: 0.6,
    des: "You can never go wrong with sugarcanes -$300"
  }
  var c2 = {
    name: "Coffee",
    num: 2,
    cost: 500,
    seedCostModifier: 0.5,
    premium: 0.8,
    des: "There is no shortage of demand for coffee -$500"
  }
  var c3 = {
    name: "Cotton",
    num: 3,
    cost: 600,
    seedCostModifier: 0.6,
    premium: 1.0,
    des: "Cotton is always needed to make clothes. -$600"
  }
  var c4 = {
    name: "Tobacco",
    num: 4,
    cost: 800,
    seedCostModifier: 0.8,
    premium: 1.2,
    des: "Tobacco is an excellent investment -$800"
  }
  var c5 = {
    name: "Cannabis",
    num: 5,
    cost: 1100,
    seedCostModifier: 1.1,
    premium: 1.8,
    des: "Cannabis is a high-risk, high-reward venture -$1100"
  }

  var crops = [c1, c2, c3, c4, c5];

  function findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return array[i];
      }
    }
    return null;
  }
  //start screen
  // $(".backdrop").append("<img src='http://hydropros.com/wp-content/uploads/sites/2/2015/12/cash-crop.jpg' class='backgroundpic' id='startscreen'>")

  $("#text").append("<div class='newgametext'>Ca$h Crop$</div>")

  $("#decisions").append("<button class='newgameoption'>Start</button>")

  var chosenCrop;

  $(".container").on("click", ".newgameoption", function () {
    $(".newgametext").remove();
    $(".newgameoption").remove();
    $(".backgroundpic").remove();

    $(".backdrop").append("<img src='./images/crop-specialization.jpg' class='backgroundpic'>")

    $("#text").append("<div class='cropcontent'>You are a new farmer who has just inherited a small plot of farmland and a substantial sum of $" + initialSum + ". Realizing the potentially greater profits that cash crops can bring over traditional crops, you decided to go all in and dedicate your entire fortune and farmland towards farming cash crops. <br><br> The first thing to do after deciding to be a cash crop farmer is to decide on the type of crop to farm. Usually, the higher the cost of the seeds, the higher the price the harvested crop would sell for. <br><br>Select the type of crop you want to plant:</div>")

    for (var i = 0; i < crops.length; i++) {
      $("#decisions").append("<button class='cropoption' id='" + crops[i].name + "'>" + crops[i].des + "</button>")
    }
  });

  $(".container").on("click", ".cropoption", function () {
    $(".cropcontent").remove();
    $(".cropoption").remove();
    $(".backgroundpic").remove();

    $(".backdrop").append("<img src='./images/afb51be644760c0b6d3d5124b83f0384--pirate-sims-.jpg' class='backgroundpic'>")
    $("#text").append("<div class='storetext'>After choosing the type of crop you want to plant, you need to take necessary measures to maximize your harvest. To do that, you head to the store in the town to buy the necessary farming and pest control equipment as well as fertilizers.</div>")
    $("#decisions").append("<button class='storeoption' id='choices' > TO THE STORE! </button>")
    var userClicked = $(this).attr("id");
    chosenCrop = findObjectByKey(crops, "name", userClicked);
    console.log(chosenCrop);
  });

  //equipment types
  var basicEquipment = {
    name: "basic",
    cost: 100,
    des: "Only the bare necessities, like a few rakes and sickles. -$100",
    res: "as you only bought the basics, your yields did not see any improvement as a result of using better farming tools."
  }
  var upgradedEquipment = {
    name: "upgraded",
    cost: 200,
    des: "More equipment like scythes and ploughs to make life easier -$200",
    res: "as you invested more money in equipment you got better yields"
  }
  var bestEquipment = {
    name: "best",
    cost: 300,
    des: "The best and latest equipment plus a few strong oxen -$300",
    res: "you paid top dollar to procure the best equipment and as a result of this, crop output has increased significantly."
  }
  var equipments = [basicEquipment, upgradedEquipment, bestEquipment]

  $(".container").on("click", ".storeoption", function () {
    sumLeft = initialSum - chosenCrop.cost;
    $(".storetext").remove();
    $(".storeoption").remove();
    $(".backgroundpic").remove();
    $(".backdrop").append("<img src='./images/equipmentimg.jpg' class='backgroundpic'>")
    $("#text").append("<div class='equipmenttext' id='choices'>You now have $" + sumLeft + ". Select the type of equipment you want to buy:</div>")

    for (var i = 0; i < equipments.length; i++) {
      $("#decisions").append("<button class='equipmentoption' id='" + equipments[i].des + "' >" + equipments[i].des + "</button>")

    }

  });

  var chosenEquipment;
  // //fertilizer types
  var basicFertilizer = {
    name: "basic",
    cost: 100,
    des: "Fertilizer gotten mainly off excrement from questionable sources along the streets.Though their quality is questionable, it is probably better than no fertilizer at all.  -$100",
    res: "the basic level of fertilizer applied marginally improved the output of your crops "
  }
  var upgradedFertilizer = {
    name: "upgraded",
    cost: 200,
    des: "High-grade fertilizer gotten from organic sources that will be extremely nutritous for your crops-$200",
    res: "the investment in high-grade fertilizer paid off quite handsomely and has greatly improved your harvest"
  }
  var bestFertilizer = {
    name: "best",
    cost: 300,
    des: "Even more organic high-grade fertilizer. Of the same quality as the above option but with twice the quantity and with a big discount thrown in. There is never too much of a good thing. -$300",
    res: "the excessive amount of fertilizer applied to your crops resulted in over-fertilization and has severely diminished the output of your crops. Guess too much of a good thing may result in bad outcomes"
  }
  var fertilizers = [basicFertilizer, upgradedFertilizer, bestFertilizer]

  $(".container").on("click", ".equipmentoption", function () {
    $(".equipmenttext").remove();
    $(".equipmentoption").remove();
    $(".backgroundpic").remove();
    $(".backdrop").append("<img src='./images/DB-f10v-d4l.jpg' class='backgroundpic'>")

    var userClicked = $(this).attr("id");
    chosenEquipment = findObjectByKey(equipments, "des", userClicked);

    console.log(chosenEquipment);
    sumLeft = sumLeft - chosenEquipment.cost

    $("#text").append("<div class='fertilizertext' id='choices'>You have $" + sumLeft + " left. Select the type of fertilizer you want to buy:</div>")

    for (var i = 0; i < fertilizers.length; i++) {
      $("#decisions").append("<button class='fertilizeroption' id='" + fertilizers[i].des + "' >" + fertilizers[i].des + "</button>")

    }
  });

  var chosenFertilizer;


  // //pest-control measures
  var basicPestControl = {
    name: "basic",
    cost: 100,
    des: "A simple fence to keep out unwanted animals -$100",
    res: "the fences did their job in keeping out larger animals. However, they were not very effective against birds and bugs, resulting in some crops being lost."
  }
  var upgradedPestControl = {
    name: "upgraded",
    cost: 200,
    des: "More fences, plus a few scarecrows  -$200",
    res: "the scarecrows did job well. However, they were not very effective in keeping out the bugs and weeds and still some crops were lost."
  }
  var bestPestControl = {
    name: "best",
    cost: 300,
    des: "A comprehensive pest control programme involving pesticides, fences, scarecrows and herbicides to counteract pests of all types  -$300",
    res: "the comprehensive pest-control measures have paid off and losses of crop due to pests and weeds have been kept to a bare minimum."
  }
  var pesticides = [basicPestControl, upgradedPestControl, bestPestControl]

  $(".container").on("click", ".fertilizeroption", function () {
    $(".fertilizertext").remove();
    $(".fertilizeroption").remove();
    $(".backgroundpic").remove();
    $(".backdrop").append("<img src='./images/Locusts.jpg' class='backgroundpic'>")

    var userClicked = $(this).attr("id");
    chosenFertilizer = findObjectByKey(fertilizers, "des", userClicked);

    console.log(chosenFertilizer);
    sumLeft = sumLeft - chosenFertilizer.cost
    $("#text").append("<div class='pestcontroltext' id='choices'>You have $" + sumLeft + " left. Select the level of pest-control you want to buy:</div>")

    for (var i = 0; i < pesticides.length; i++) {
      $("#decisions").append("<button class='pestcontroloption' id='" + pesticides[i].des + "' >" + pesticides[i].des + "</button>")
    }
  });



  var chosenPestControl


  $(".container").on("click", ".pestcontroloption", function () {
    $(".pestcontroltext").remove();
    $(".pestcontroloption").remove();
    $(".backgroundpic").remove();
    $(".backdrop").append("<img src='./images/lessing_art_103107516471.gif' class='backgroundpic'>")

    var userClicked = $(this).attr("id");
    chosenPestControl = findObjectByKey(pesticides, "des", userClicked);

    console.log(chosenPestControl);
    $("#text").append("<div class='itemsboughttext' id='choices'>You leave the shop with a cart full of your purchases. As you arrive back at your farm after an exhausting day of travelling and shopping, you unearth a dusty record that keeps track of your personal finances.  </div>")
    $("#decisions").append("<button class='itemsboughtoption' id='choices' >Now to update the records</button>")

  });

  // Total Costs and sum left
  var totalCost;

  $(".container").on("click", ".itemsboughtoption", function () {
    $(".itemsboughttext").remove();
    $(".itemsboughtoption").remove();
    $(".backgroundpic").remove();
    $(".backdrop").append("<img src='./images/5018795998_3e2fa11c1c_o-4-e1467288941131.jpg' class='backgroundpic'>")
    totalCost = chosenCrop.cost + chosenEquipment.cost + chosenFertilizer.cost + chosenPestControl.cost;
    sumLeft = initialSum - totalCost;
    console.log(totalCost);
    $("#text").append("<div class='totalcoststext' id='choices'>You spent $" + totalCost + " in total. You have $" + sumLeft + " left in your account. Hopefully the upcoming harvest will be a good one.</div>")
    $("#decisions").append("<button class='totalcostsoption' id='choices' >Time to sow the crops and wait for the harvest </button>")
  });

  //Harvest types:
  var awfulHarvest = {
    premium: 2,
    type: "a famine",
    modifier: 0.01,
    des: "This season's harvest has been the worst in living memory. On the bright side, a shortage may also mean higher prices and a better deal in the marketplace."
  }
  var poorHarvest = {
    premium: 1.5,
    type: "a poor harvest",
    modifier: 0.05,
    des: "The amount of crop output is far lower than expected, but hey, it could have been worse."
  }
  var normalHarvest = {
    premium: 1,
    type: "a normal harvest",
    modifier: 1.0,
    des: "Crop yields are average compared to previous years. It has been a mundane year with a mediocre harvest."
  }
  var goodHarvest = {
    premium: 0.9,
    type: "a good harvest",
    modifier: 1.5,
    des: "It has been one of the better harvests in the past few years. Farmers are expecting a tidy profit from their plentiful harvests!"
  }
  var bountifulHarvest = {
    premium: 0.8,
    type: "a bountiful harvest",
    modifier: 2.0,
    des: "It is the best harvest in years. However, an abundance of crops in the market may also mean lower prices. "
  }
  var defaultYield = 1000
  var sellingPrice

  //Decision Modifiers (Chosen equipment,crops etc and their effects on yield)
  function equipmentType() {
    if (chosenEquipment.name == "basic") {
      return 1;
    } else if (chosenEquipment.name == "upgraded") {
      return 1.05;
    } else {
      return 1.15;
    }
  }

  function fertilizerType() {
    if (chosenFertilizer.name == "basic") {
      return 1.05;
    } else if (chosenFertilizer.name == "upgraded") {
      return 1.3;
    } else {
      return 0.8;
    }
  }

  function pestControlType() {
    if (chosenPestControl.name == "basic") {
      return 0.85;
    } else if (chosenPestControl.name == "upgraded") {
      return 0.95;
    } else {
      return 1;
    }
  }

  //Yields
  function yieldType() {
    return Math.random();

  }

  function typeOfHarvest() {
    if (yieldType() < 0.1) {
      return awfulHarvest;
    } else if (yieldType() < 0.3) {
      return poorHarvest;
    } else if (yieldType() < 0.7) {
      return normalHarvest;
    } else if (yieldType() < 0.9) {
      return goodHarvest;
    } else {
      return bountifulHarvest;
    }
  }

  var harvestType

  $(".container").on("click", ".totalcostsoption", function () {
    $(".totalcoststext").remove();
    $(".totalcostsoption").remove();
    $(".backgroundpic").remove();
    $(".backdrop").append("<img src='./images/Harvest-Time-Lambourne-Berks.jpg?resize=660%2C425' class='backgroundpic'>")
    harvestType = typeOfHarvest();

    $("#text").append("<div class='harvesttext' id='choices'>For the past year, there has been " + harvestType.type + " in the country. " + harvestType.des + " </div>")
    $("#decisions").append("<button class='harvestoption' id='choices' >Now to reap the crops.</button>")

  });

  var totalCropsHarvested;

  $(".container").on("click", ".harvestoption", function () {
    $(".harvesttext").remove();
    $(".harvestoption").remove();
    $(".backgroundpic").remove();
    $(".backdrop").append("<img src='./images/pigeonandcricket.jpg' class='backgroundpic'>")
    totalCropsHarvested = Math.round(defaultYield * harvestType.modifier * equipmentType() * fertilizerType() * pestControlType())

    $("#text").append("<div class='cropsharvestedtext' id='choices'> Remember the stuff you bought at the store? They too will affect the outcome of your harvest!<br><br> Equipment-wise, " + chosenEquipment.res + " For fertilization, " + chosenFertilizer.res + ". With respect to pest control, " + chosenPestControl.res + " <br> <br>After reaping the crops you find that your total harvest for the year is " + totalCropsHarvested + " bushels.</div>")
    $("#decisions").append("<button class='cropsharvestedoption' id='choices' >Now that we have harvested the crops, it's time to go to the marketplace and sell them</button>")

  });

  var harvestRevenue;
  var finalSum;
  var finalScore;

  $(".container").on("click", ".cropsharvestedoption", function () {
    $(".cropsharvestedtext").remove();
    $(".cropsharvestedoption").remove();
    $(".backgroundpic").remove();
    $(".backdrop").append("<img src='./images/medieval-harvest-flyer2.jpg' class='backgroundpic'>")

    harvestRevenue = Math.round(harvestType.premium * chosenCrop.premium * totalCropsHarvested)
    finalSum = harvestRevenue + sumLeft

    $("#text").append("<div class='finalsaletext' id='choices'> With a " + harvestType.type + ", prices of " + chosenCrop.name + " are selling for $" + Math.round(harvestType.premium * chosenCrop.premium * 100) / 100 + " per bushel. Hence, as you have " + totalCropsHarvested + " bushels, you have made a total revenue of $" + harvestRevenue + ". Together with the $" + sumLeft + " in your account, you now have $" + finalSum + " in total.</div>")
    $("#decisions").append("<button class='finalsaleoption' id='choices' >And so another year passes..</button>")

  });

  var failure = {
    type: "lose",
    des: "Due to either extreme bad luck or poor purchasing decisions, you lost more money than you spent. Perhaps next year will be a better year for you. Better luck next time!"
  }
  var meh = {
    type: "earn",
    des: "You have made more money than you spent, but just barely. At least you did not lose any money, and you can always try again. Perhaps next year will be a better year for you."
  }
  var success = {
    type: "earn",
    des: "You have managed to turn a substantial profit from your investments. Over time, if you keep up with this performance, you just might become a wealthy farmer!"
  }
  var champ = {
    type: "earn",
    des: "Amazing! You not only turned a spectacular profit, you more than doubled your initial sum. Word of your success has spread all over the country and your name is known far and wide. Well done, there can't be a better outcome than this!"
  }

  function appraisal() {

    if (finalScore < 0) {
      return failure;
    } else if (finalScore < 200) {
      return meh;
    } else if (finalScore < 2000) {
      return success;
    } else {
      return champ;

    }
  };

  $(".container").on("click", ".finalsaleoption", function () {
    $(".finalsaletext").remove();
    $(".finalsaleoption").remove();
    $(".backgroundpic").remove();
    $(".backdrop").append("<img src='./images/Reeve_and_Serfs.jpg' class='backgroundpic'>")
    finalScore = finalSum - initialSum;

    var finalGrade = appraisal()

    $("#text").append("<div class='finalscoretext'>Over the course of the year, with revenues of $" + harvestRevenue + " and expenses of $" + totalCost + ", you have managed to " + finalGrade.type + " $ " + Math.abs(finalScore) + ". " + finalGrade.des + "</div>")
    $("#decisions").append("<button class='finalscore' id='choices' >New game</button>")

  });

  $(".container").on("click", ".finalscore", function () {
    $(".finalscoretext").remove();
    $(".finalscore").remove();
    $(".backgroundpic").remove();
    $(".backdrop").append("<img src='./images/cash-crop.jpg' class='backgroundpic'>")



    $("#text").append("<div class='newgametext'>Ca$h Crop$</div>")
    $("#decisions").append("<button class='newgameoption'>Start</button>")
  });

});
