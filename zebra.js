(function(window, document, d3) {
  var BAR_WIDTH = 8; // Intentionally smaller than the actual width
  var ANIMATION_DURATION = 2000;
  var DATA_SETS = [
    [
      {id: 1,  h: 0,   x:   0            , y: 0},
      {id: 2,  h: 0,   x:   0            , y: 0},

      {id: 3,  h: 0,   x:   0            , y: 0},
      {id: 4,  h: 0,   x:   0            , y: 0},
      {id: 5,  h: 0,   x:   0            , y: 0},

      {id: 6,  h: 0,   x:   0            , y: 0},
      {id: 7,  h: 0,   x:   0            , y: 0},

      {id: 8,  h: 0,   x:   0            , y: 0},
      {id: 9,  h: 0,   x:   0            , y: 0},
      {id: 10, h: 0,   x:   0            , y: 0},

      {id: 11, h: 0,   x:   0            , y: 0},
      {id: 12, h: 0,   x:   0            , y: 0},
      {id: 13, h: 0,   x:   0            , y: 0},
      {id: 14, h: 0,   x:   0            , y: 0}
    ], [
      {id: 1,  h: 22,  x:   0            , y: 0},
      {id: 2,  h: 22,  x:   0            , y: 0},

      {id: 3,  h: 44,  x:   0            , y: 0},
      {id: 4,  h: 44,  x:   0            , y: 0},
      {id: 5,  h: 44,  x:   0            , y: 0},

      {id: 6,  h: 66,  x:   0            , y: 0},
      {id: 7,  h: 66,  x:   0            , y: 0},

      {id: 8,  h: 74,  x:   0            , y: 0},
      {id: 9,  h: 74,  x:   0            , y: 0},
      {id: 10, h: 74,  x:   0            , y: 0},

      {id: 11, h: 132, x:   0            , y: 0},
      {id: 12, h: 132, x:   0            , y: 0},
      {id: 13, h: 132, x:   0            , y: 0},
      {id: 14, h: 132, x:   0            , y: 0}
    // ], [
    //   {id: 1,  h: 22,  x:  -4 * BAR_WIDTH, y: 0},
    //   {id: 2,  h: 22,  x:  -4 * BAR_WIDTH, y: 0},

    //   {id: 3,  h: 44,  x:  -2 * BAR_WIDTH, y: 0},
    //   {id: 4,  h: 44,  x:  -2 * BAR_WIDTH, y: 0},
    //   {id: 5,  h: 44,  x:  -2 * BAR_WIDTH, y: 0},

    //   {id: 6,  h: 66,  x:   0 * BAR_WIDTH, y: 0},
    //   {id: 7,  h: 66,  x:   0 * BAR_WIDTH, y: 0},

    //   {id: 8,  h: 74,  x:   2 * BAR_WIDTH, y: 0},
    //   {id: 9,  h: 74,  x:   2 * BAR_WIDTH, y: 0},
    //   {id: 10, h: 74,  x:   2 * BAR_WIDTH, y: 0},

    //   {id: 11, h: 132, x:   4 * BAR_WIDTH, y: 0},
    //   {id: 12, h: 132, x:   4 * BAR_WIDTH, y: 0},
    //   {id: 13, h: 132, x:   4 * BAR_WIDTH, y: 0},
    //   {id: 14, h: 132, x:   4 * BAR_WIDTH, y: 0}
    ], [
      {id: 1,  h: 22,  x: -13 * BAR_WIDTH, y: 0},
      {id: 2,  h: 22,  x: -11 * BAR_WIDTH, y: 0},
      {id: 3,  h: 44,  x:  -9 * BAR_WIDTH, y: 0},
      {id: 4,  h: 44,  x:  -7 * BAR_WIDTH, y: 0},
      {id: 5,  h: 44,  x:  -5 * BAR_WIDTH, y: 0},
      {id: 6,  h: 66,  x:  -3 * BAR_WIDTH, y: 0},
      {id: 7,  h: 66,  x:  -1 * BAR_WIDTH, y: 0},
      {id: 8,  h: 74,  x:   1 * BAR_WIDTH, y: 0},
      {id: 9,  h: 74,  x:   3 * BAR_WIDTH, y: 0},
      {id: 10, h: 74,  x:   5 * BAR_WIDTH, y: 0},
      {id: 11, h: 132, x:   7 * BAR_WIDTH, y: 0},
      {id: 12, h: 132, x:   9 * BAR_WIDTH, y: 0},
      {id: 13, h: 132, x:  11 * BAR_WIDTH, y: 0},
      {id: 14, h: 132, x:  13 * BAR_WIDTH, y: 0}
    ], [
      {id: 1,  h: 22,  x: -13 * BAR_WIDTH, y: 0},
      {id: 12, h: 132, x: -11 * BAR_WIDTH, y: 0},
      {id: 13, h: 132, x:  -9 * BAR_WIDTH, y: 0},
      {id: 8,  h: 74,  x:  -7 * BAR_WIDTH, y: 0},
      {id: 9,  h: 74,  x:  -5 * BAR_WIDTH, y: 0},
      {id: 7,  h: 66,  x:  -3 * BAR_WIDTH, y: 0},
      {id: 6,  h: 66,  x:  -1 * BAR_WIDTH, y: 0},
      {id: 14, h: 132, x:   1 * BAR_WIDTH, y: 0},
      {id: 11, h: 132, x:   3 * BAR_WIDTH, y: 0},
      {id: 10, h: 74,  x:   5 * BAR_WIDTH, y: 0},
      {id: 5,  h: 44,  x:   7 * BAR_WIDTH, y: 0},
      {id: 4,  h: 44,  x:   9 * BAR_WIDTH, y: 0},
      {id: 3,  h: 44,  x:  11 * BAR_WIDTH, y: 0},
      {id: 2,  h: 22,  x:  13 * BAR_WIDTH, y: 0}
    ], [
      {id: 1,  h: 22,  x: -13 * BAR_WIDTH, y: -23},
      {id: 12, h: 132, x: -11 * BAR_WIDTH, y: 16},
      {id: 13, h: 132, x:  -9 * BAR_WIDTH, y: 11},
      {id: 8,  h: 74,  x:  -7 * BAR_WIDTH, y: -18},
      {id: 9,  h: 74,  x:  -5 * BAR_WIDTH, y: -14},
      {id: 7,  h: 66,  x:  -3 * BAR_WIDTH, y: -13},
      {id: 6,  h: 66,  x:  -1 * BAR_WIDTH, y: -13},
      {id: 14, h: 132, x:   1 * BAR_WIDTH, y: 16},
      {id: 11, h: 132, x:   3 * BAR_WIDTH, y: 11},
      {id: 10, h: 74,  x:   5 * BAR_WIDTH, y: -29},
      {id: 5,  h: 44,  x:   7 * BAR_WIDTH, y: -49},
      {id: 4,  h: 44,  x:   9 * BAR_WIDTH, y: -56},
      {id: 3,  h: 44,  x:  11 * BAR_WIDTH, y: -49},
      {id: 2,  h: 22,  x:  13 * BAR_WIDTH, y: -30}
    ]
  ];

  var w = window.innerWidth;
  var h = window.innerHeight;

  var index = 0;
  var direction = 1;
  var svg = d3.select('body').append("svg");

  window.onresize = function() {
    w = window.innerWidth;
    h = window.innerHeight;
    svg.attr({
      width: w,
      height: h
    });
    animateToData(DATA_SETS[index]);
  };
  window.onresize();

  function updateLines(line) {
    line.attr({
      x1: function(d) { return w/2 + d.x; },
      y1: function(d) { return h/2 - d.h/2 + d.y; },
      x2: function(d) { return w/2 + d.x; },
      y2: function(d) { return h/2 + d.h/2 + d.y; }
    });
  }

  function animateToData(data) {
    var lines = svg.selectAll("line")
      .data(data, function(d, n) { return d.id; });

    updateLines(lines.enter().append("line"));
    updateLines(lines.transition().duration(ANIMATION_DURATION));
  }

  function nextDataSet() {
    if (index + direction >= DATA_SETS.length) {
      direction = -1;
    } else if (index + direction < 0) {
      direction = 1;
    }

    index += direction;
    animateToData(DATA_SETS[index]);
  }

  nextDataSet();
  setInterval(nextDataSet, ANIMATION_DURATION * 1.1);

}).call(this, window, document, d3);
