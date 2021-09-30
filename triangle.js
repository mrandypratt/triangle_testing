let TriangleClosure = (() => {
  class InvalidAngleError extends TypeError{}
  
  function validateAngles(angles) {
    checkForZeros(angles);
    checkForNegatives(angles);
    checkForTriangleInequality(angles);
  }
  
  function checkForZeros(angles) {
    if (angles.includes(0)) {
      throw new InvalidAngleError("Angles cannot be Zero");
    }
  }
  
  function checkForNegatives(angles) {
    angles.forEach(angle => {
      if (angle < 0) {
        throw new InvalidAngleError("Angles cannot be Negative");
      }
    });
  }
  
  function checkForTriangleInequality(angles) {
    if ((angles[0] + angles[1] <= angles[2]) ||
        (angles[1] + angles[2] <= angles[0]) ||
        (angles[2] + angles[0] <= angles[1])) {
          throw new InvalidAngleError("Triangle Inequality Violation");
    }
  }
  
  return class Triangle {
    constructor(...angles) {
      validateAngles(angles);
      this.angles = angles;
    }
    
    kind() {
      if ((this.angles[0] === this.angles[1]) &&
          (this.angles[1] === this.angles[2])) {
            return "equilateral";
      } else if ((this.angles[0] === this.angles[1]) ||
                 (this.angles[1] === this.angles[2]) ||
                 (this.angles[2] === this.angles[0])) {
                   return "isosceles";
      } else {
        return "scalene";
      }
    }
  };
})();

module.exports = TriangleClosure;