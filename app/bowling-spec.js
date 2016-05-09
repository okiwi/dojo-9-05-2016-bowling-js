var expect = require('chai').expect;
describe('bowling', function() {

  var bowling = require('./bowling.js');
  
	it('on peut creer le jeu', function() {
		var jeu = new bowling.Jeu();
		expect(jeu).to.not.be.undefined;
	  
	});
	
	it('on peut enregistrer une lancer', function() {
		var jeu = new bowling.Jeu();
		jeu.renverse(5);
		expect(jeu.score).to.equal(5);
	});
  
});
