$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "darkorchid"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(600, 300, 20, 10, "darkorchid");
    createPlatform(800, 610, 200, 10, "darkorchid");
    createPlatform(1100, 500, 20, 10, "darkorchid");
    createPlatform(850, 400, 20, 10, "darkorchid");
    createPlatform(90, 200, 360, 10, "darkorchid");
    createPlatform(90, 0, 10, 200, "darkorchid");
    createPlatform(1320, 679, 10, 170, "darkorchid");
    createPlatform(1100, 300, 300, 10, "darkorchid");
    createPlatform(1200, 200, 10, 100, "dodgerblue");
    createPlatform(1200, 200, 150, 10, "dodgerblue");

    // TODO 3 - Create Collectables
    createCollectable("database", 200, 160, 0, 0);
    createCollectable("steve", 1350, 700, 0, 0);
    createCollectable("max", 840, 360, 0, 0);
    createCollectable("database", 1350, 260, 0, 0);
    createCollectable("database", 1345, 260, 0, 0);
    createCollectable("database", 1340, 260, 0, 0);
    createCollectable("database", 1335, 260, 0, 0);
    createCollectable("database", 1330, 260, 0, 0);
    createCollectable("database", 1325, 260, 0, 0);
    createCollectable("database", 1320, 260, 0, 0);
    createCollectable("database", 1315, 260, 0, 0);
    createCollectable("database", 1310, 260, 0, 0);
    createCollectable("database", 1305, 260, 0, 0);
    createCollectable("database", 1300, 260, 0, 0);
    createCollectable("database", 1295, 260, 0, 0);
    createCollectable("database", 1290, 260, 0, 0);
    createCollectable("database", 1285, 260, 0, 0);
    createCollectable("database", 1280, 260, 0, 0);
    createCollectable("database", 1275, 260, 0, 0);
    createCollectable("database", 1270, 260, 0, 0);
    createCollectable("database", 1265, 260, 0, 0);
    createCollectable("database", 1260, 260, 0, 0);
    createCollectable("database", 1255, 260, 0, 0);
    createCollectable("database", 1250, 260, 0, 0);
    createCollectable("database", 1245, 260, 0, 0);
    createCollectable("database", 1340, 260, 0, 0);
    createCollectable("database", 1230, 260, 0, 0);
    createCollectable("database", 1225, 260, 0, 0);
    createCollectable("database", 1220, 260, 0, 0);
    createCollectable("database", 1215, 260, 0, 0);
    createCollectable("database", 1210, 260, 0, 0);
    createCollectable("database", 1205, 260, 0, 0);
    createCollectable("database", 1200, 260, 0, 0);


    // TODO 4 - Create Cannons
    createCannon("right",750,1500);
    createCannon("left",300,2000);
    createCannon("right",120,0.00000000000000000000000000000000);
   
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
