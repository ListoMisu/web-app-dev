/**
 * Class representing a 2D vector.
 */
class Vector {
  /**
   * Create a vector.
   * @param {number} x - The x-coordinate.
   * @param {number} y - The y-coordinate.
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
    Object.freeze(this); // Making the vector immutable
  }

  /**
   * Create a vector using a static method.
   * @param {number} x - The x-coordinate.
   * @param {number} y - The y-coordinate.
   * @return {Vector} The new vector.
   */
  static of(x, y) {
    return new Vector(x, y);
  }

  /**
   * Add another vector to this vector.
   * @param {Vector} other - The vector to add.
   * @return {Vector} The resulting vector.
   */
  add(other) {
    return new Vector(this.x + other.x, this.y + other.y);
  }

  /**
   * Subtract another vector from this vector.
   * @param {Vector} other - The vector to subtract.
   * @return {Vector} The resulting vector.
   */
  subtract(other) {
    return new Vector(this.x - other.x, this.y - other.y);
  }

  /**
   * Multiply this vector by a scalar.
   * @param {number} scalar - The scalar to multiply by.
   * @return {Vector} The resulting vector.
   */
  multiply(scalar) {
    return new Vector(this.x * scalar, this.y * scalar);
  }

  /**
   * Calculate the length (magnitude) of the vector.
   * @return {number} The length of the vector.
   */
  abs() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /**
   * Calculate the unit vector (normalized vector).
   * @return {Vector} The unit vector.
   */
  unit() {
    const length = this.abs();
    if (length === 0) {
      throw new Error('Cannot normalize a zero-length vector');
    }
    return this.multiply(1 / length);
  }

  /**
   * Calculate the direction angle of the vector in radians.
   * @return {number} The direction angle in radians.
   */
  angle() {
    return Math.atan2(this.y, this.x);
  }

  /**
   * Returns a string representation of the vector.
   * @return {string} The string representation.
   */
  toString() {
    return `Vector(${this.x}, ${this.y})`;
  }
}

// Export the Vector class
module.exports = Vector;

