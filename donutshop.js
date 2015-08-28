var DonutMaster = function() {
        this.allLocations = [];
        this.addShop = function(shopLocation) {
        this.allLocations.push(shopLocation);
        };
        this.getReport = function() {
          for (var index = 0; index < this.allLocations.length; index++) {
          console.log("for the " + this.allLocations[index].location + " location, you need to bake " + this.allLocations[index].donutsPerHour() + " donuts per hour and " + this.allLocations[index].donutsPerDay() + " donuts per day.");
    }
  };
};


var Shop = function(minCustomers, maxCustomers, aveDonuts, location) {
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.aveDonuts = aveDonuts;
  this.location = location;
    this.customersPerHour = function() {
      return Math.floor(Math.random() * (maxCustomers - minCustomers + 1) + minCustomers);
    };

    this.donutsPerHour = function() {
      var numDonuts = this.customersPerHour() * aveDonuts;
      numDonuts = Math.ceil(numDonuts);
      //console.log(numDonuts);
      return numDonuts;
    };

    this.donutsPerDay = function() {
      var total = 0;
      for (var index = 0; index < 12; index++) {
        total += this.donutsPerHour();
      }
      total = Math.ceil(total);
      return total;
    };
};

var downtown = new Shop(8, 43, 4.5, "Downtown");
var capitolHill = new Shop(4, 37, 2, "Capitol Hill");
var sLakeUnion = new Shop(9, 23, 6.33, "South Lake Union");
var wedgewood = new Shop(2, 28, 1.25, "Wedgewood");
var ballard = new Shop(8, 58, 3.75, "Ballard");

var topPot = new DonutMaster();

  topPot.addShop(downtown);
  topPot.addShop(capitolHill);
  topPot.addShop(sLakeUnion);
  topPot.addShop(wedgewood);
  topPot.addShop(ballard);

//jQuery Stuff

function buildTable() {
  $('.shopInfo tr:gt(0)').remove();
  for(var i = 0; i < topPot.allLocations.length; i++) {
    $('.shopInfo')
      .hide()
      .append('<tr><td class=' + topPot.allLocations[i].location + '>' +
        topPot.allLocations[i].location + '</td><td>' +
        topPot.allLocations[i].customersPerHour() + '</td>' +
        '<td>' + topPot.allLocations[i].donutsPerHour() + '</td>' +
        '<td>' + topPot.allLocations[i].donutsPerDay() + '</td>' +
        '</tr>')
        .fadeIn();
  };
};

$('table td.Downtown').on('mouseover', (function() {
  console.log('This is the downtown store!');
}));

$(document).ready(function() {
  $('footer').animate({
      opacity: 1,
      top: 0
    }, 'slow');

  buildTable();
});

$('input[type=submit]').on('click', function(event) {
  event.preventDefault();
  var elMin = $('input[name="minCustomers"]');
  var elMax = $('input[name="maxCustomers"]');
  var elAve = $('input[name="aveDonuts"]');
  var elLoc = $('input[name="location"]');

  var newShop = new Shop(parseInt(elMin.val()), parseInt(elMax.val()), parseInt(elAve.val()), elLoc.val());
  topPot.addShop(newShop);

  elMin.val('');
  elMax.val('');
  elAve.val('');
  elLoc.val('');

  buildTable();
});


//mouseover, pop up googlemap or pic of location
//get rid of show table button have table there on docready
//












