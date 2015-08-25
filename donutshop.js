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
      console.log(numDonuts);
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
//try to fade out just :nth-child or :gt(0) (greater than 0)
//make this all happen with a for-loop




  $('.downtown').on('click', function() {
    $('.downtownInfo td:gt(0)').remove();
    $('.downtownInfo')
      .hide()
      .append('<td>' + downtown.customersPerHour() + '</td>')
      .append('<td>' + downtown.donutsPerHour() + '</td>')
      .append('<td>' + downtown.donutsPerDay() + '</td>')
      .fadeIn();


  });
  $('.capitolHill').click(function() {
    $('.capitolHillInfo td:gt(0)').remove();
    $('.capitolHillInfo')
      .hide()
      .append('<td>' + capitolHill.customersPerHour() + '</td>')
      .append('<td>' + capitolHill.donutsPerHour() + '</td>')
      .append('<td>' + capitolHill.donutsPerDay() + '</td>')
      .fadeIn();
  });
  $('.sLUnion').click(function() {
    $('.sLUnionInfo td:gt(0)').remove();
    $('.sLUnionInfo')
      .hide()
      .append('<td>' + sLakeUnion.customersPerHour() + '</td>')
      .append('<td>' + sLakeUnion.donutsPerHour() + '</td>')
      .append('<td>' + sLakeUnion.donutsPerDay() + '</td>')
      .fadeIn();
  });
  $('.wedgewood').click(function() {
    $('.wedgewoodInfo td:gt(0)').remove();
    $('.wedgewoodInfo')
      .hide()
      .append('<td>' + wedgewood.customersPerHour() + '</td>')
      .append('<td>' + wedgewood.donutsPerHour() + '</td>')
      .append('<td>' + wedgewood.donutsPerDay() + '</td>')
      .fadeIn();
  });
  $('.ballard').click(function() {
    $('.ballardInfo td:gt(0)').remove();
    $('.ballardInfo')
      .hide()
      .append('<td>' + ballard.customersPerHour() + '</td>')
      .append('<td>' + ballard.donutsPerHour() + '</td>')
      .append('<td>' + ballard.donutsPerDay() + '</td>')
      .fadeIn();
    });

  $(document).ready(function() {
  $('footer').animate({
      opacity: 1,
      top: 0
    }, 'slow')
});



// making sure jQuery works:
// $(document).ready(function() {
//   alert("Hi!");
// });














