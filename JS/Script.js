// added the object constructor and the properties
function CrocRod(serialNumber, year, series, numberInSeries, color, tampo, windowColor, bodyMaterial, interior, wheelType, baseColor, manufacturingCountry) {
    this.serialNumber = serialNumber;
    this.year = year;
    this.series = series;
    this.numberInSeries = numberInSeries;
    this.color = color;
    this.tampo = tampo;
    this.windowColor = windowColor;
    this.bodyMaterial = bodyMaterial;
    this.interior = interior;
    this.wheelType = wheelType;
    this.baseColor = baseColor;
    this.manufacturingCountry = manufacturingCountry;
}

  // adding interactivity
  
  window.createCrocRod = function() {
    var crocRod = new CrocRod('039/250', 2024, 'HW Mega Bite', '2/5', 'Blue', 'Orange and fuchsia graphics', 'Transparent orange', 'Plastic', 'None', 'Fuchsia RA6 Chrome', 'Fuchsia', 'Malaysia');
    
    // Display details
    var details = document.getElementById('details');
    details.innerHTML = `Serial Number: ${crocRod.serialNumber}<br>Year: ${crocRod.year}<br>Series: ${crocRod.series}<br>.. and so on`;
  };

  // set background image

  document.getElementById('setBackgroundButton').addEventListener('click', function() {
    document.body.style.backgroundImage = "url('./Images/Croc_Rod_HCT02.webp')";
    document.body.style.backgroundSize = 'sticky';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style. backgroundPositionY = '500px';
    document.body.style.backgroundPosition = 'center';
  });
  
