// test/vector.test.mjs
import { expect } from 'chai';
import { Vector } from '../src/vector.mjs';

describe('Vector Library', () => {
  it('should create a vector with given x and y coordinates', () => {
    const a = new Vector(1, 2);
    expect(a.x).to.equal(1);
    expect(a.y).to.equal(2);
  });

  it('should create a vector using the static of method', () => {
    const b = Vector.of(2, 0.5);
    expect(b.x).to.equal(2);
    expect(b.y).to.equal(0.5);
  });

  it('should add two vectors', () => {
    const a = new Vector(1, 2);
    const b = Vector.of(2, 0.5);
    const sum = a.add(b);
    expect(sum.x).to.equal(3);
    expect(sum.y).to.equal(2.5);
  });

  it('should subtract one vector from another', () => {
    const a = new Vector(1, 2);
    const b = Vector.of(2, 0.5);
    const difference = a.subtract(b);
    expect(difference.x).to.equal(-1);
    expect(difference.y).to.equal(1.5);
  });

  it('should multiply a vector by a scalar', () => {
    const a = new Vector(1, 2);
    const scaled = a.multiply(2);
    expect(scaled.x).to.equal(2);
    expect(scaled.y).to.equal(4);
  });

  it('should calculate the magnitude of a vector', () => {
    const a = new Vector(3, 4);
    expect(a.abs()).to.equal(5);
  });

  it('should calculate the unit vector', () => {
    const a = new Vector(3, 4);
    const unit = a.unit();
    expect(unit.x).to.be.closeTo(0.6, 0.0001);
    expect(unit.y).to.be.closeTo(0.8, 0.0001);
  });

  it('should throw an error when trying to normalize a zero-length vector', () => {
    const a = new Vector(0, 0);
    expect(() => a.unit()).to.throw('Cannot normalize a zero-length vector');
  });

  it('should calculate the direction angle of a vector in radians', () => {
    const a = new Vector(1, 1);
    const angle = a.angle();
    expect(angle).to.be.closeTo(Math.PI / 4, 0.0001);
  });
});

