package br.com.locadora.cadastrodeveiculos.exception;

/**
 * Exceção lançada por todos as classes no padrão DAO
 * 
 * @author Thaise Santos Souza
 * */
public class DaoException extends Exception {

	public DaoException(String msg) {
		super(msg);
	}
	
}
