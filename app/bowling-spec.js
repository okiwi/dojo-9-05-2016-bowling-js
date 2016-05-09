var expect = require('chai').expect;
describe('bowling', function() {

  var bowling = require('./bowling.js');
  
	it('on peut creer le jeu', function() {
		var jeu = new bowling.Jeu();
		expect(jeu).to.not.be.undefined;
	  
	});
	
	it('on peut enregistrer un lancer à 5', function() {
		var jeu = new bowling.Jeu();
		jeu.renverse(5);
		expect(jeu.score).to.equal(5);
	});
  
	it('on peut enregistrer un lancer à 6', function() {
		var jeu = new bowling.Jeu();
		jeu.renverse(6);
		expect(jeu.score).to.equal(6);
	});

	it('on peut enregistrer un deuxieme lancer', function() {
		var jeu = new bowling.Jeu();
		jeu.renverse(4);
		jeu.renverse(5);
		expect(jeu.score).to.equal(9);
	});
	
	it('on peux faire un spare', function() {
		var jeu = new bowling.Jeu();
		jeu.renverse(4);
		jeu.renverse(6);
		expect(jeu.score).to.equal('/');
	});
	
	it('on peux faire un spare plus 5', function() {
		var jeu = new bowling.Jeu();
		jeu.renverse(4);
		jeu.renverse(6);
		jeu.renverse(5);
		jeu.renverse(0);
		expect(jeu.score).to.equal(20);
	});
	
	/*it('on peux faire un spare plus 6', function() {
		var jeu = new bowling.Jeu();
		jeu.renverse(4);
		jeu.renverse(6);
		jeu.renverse(0);
		jeu.renverse(6);
		expect(jeu.score).to.equal(16);
	});*/

});
