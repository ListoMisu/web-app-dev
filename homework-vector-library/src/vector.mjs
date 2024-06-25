// src/vector.mjs

/**
 * A class representing a 2D vector.
 */
export class Vector {
  /**
   * Creates a vector.
   * @param {number} x - The x-coordinate.
   * @param {number} y - The y-coordinate.
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
    Object.freeze(this);
  }

  /**
   * Creates a vector using the static `of` method.
   * @param {number} x - The x-coordinate.
   * @param {number} y - The y-coordinate.
   * @returns {Vector} The new vector.
   */
  static of(x, y) {
    return new Vector(x, y);
  }

  /**
   * Adds another vector to this vector.
   * @param {Vector} vector - The vector to add.
   * @returns {Vector} The resulting vector.
   */
  add(vector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
  }

  /**
   * Subtracts another vector from this vector.
   * @param {Vector} vector - The vector to subtract.
   * @returns {Vector} The resulting vector.
   */
  subtract(vector) {
    return new Vector(this.x - vector.x, this.y - vector.y);
  }

  /**
   * Multiplies this vector by a scalar.
   * @param {number} scalar - The scalar to multiply by.
   * @returns {Vector} The resulting vector.
   */
  multiply(scalar) {
    return new Vector(this.x * scalar, this.y * scalar);
  }

  /**
   * Calculates the magnitude (length) of this vector.
   * @returns {number} The magnitude of the vector.
   */
  abs() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /**
   * Calculates the unit vector (normalized vector).
   * @returns {Vector} The unit vector.
   */
  unit() {
    const length = this.abs();
    if (length === 0) {
      throw new Error('Cannot normalize a zero-length vector');
    }
    return new Vector(this.x / length, this.y / length);
  }

  /**
   * Calculates the direction angle of this vector in radians.
   * @returns {number} The direction angle in radians.
   */
  angle() {
    return Math.atan2(this.y, this.x);
  }

  /**
   * Returns a string representation of the vector.
   * @returns {string} The string representation.
   */
  toString() {
    return `Vector(${this.x}, ${this.y})`;
  }
}

