var assert = require('assert');
var preeti = require('../preeti.js');

const preeti_vectors = require('./preeti.json');
const kantipur_vectors = require('./kantipur.json');
const pcs_nepali_vectors = require('./pcs_nepali.json');
const fontasy_himali_vectors = require('./fontasy_himali_tt.json');
const sagarmata_vectors = require('./sagarmatha.json');

describe("Converting Preeti", function() {
  it('should return काठमाण्डू when the value is sf7df08"', function() {
    var ret = preeti('sf7df08"');
    assert.equal(ret, "काठमाण्डू");
  });

  it('should process the nep-tt2utf preeti.vector list', function() {
    for (let v of preeti_vectors) {
      assert.equal(preeti(v[0]), v[1]);
    }
  });
});

describe("Converting Kantipur", function() {
  it('should process the nep-tt2utf kantipur.vector list', function() {
    for (let v of kantipur_vectors) {
      assert.equal(preeti(v[0], 'Kantipur'), v[1]);
    }
  });
});

describe("Converting PCS Nepali", function() {
  it('should process the nep-tt2utf pcs_nepali.vector list', function() {
    for (let v of pcs_nepali_vectors) {
      assert.equal(preeti(v[0], 'PCS Nepali'), v[1]);
    }
  });
});

describe("Converting Fontasy himali TT", function() {
  it('should process the nep-tt2utf fontasy_himali.vector list', function() {
    for (let v of fontasy_himali_vectors) {
      assert.equal(preeti(v[0], 'Fontasy Himali TT'), v[1]);
    }
  });
});

describe("Converting Sagarmatha", function() {
  it('should process the nep-tt2utf sagarmatha.vector list', function() {
    for (let v of sagarmata_vectors) {
      assert.equal(preeti(v[0], 'sagarmatha'), v[1]);
    }
  });
});
