package br.com.locadora.cadastrodeveiculos.exception;


/**
 * Exceção lançada pelo Banco em memória
 * 
 * @author Thaise Santos Souza
 * */
public class ArmazenamentoException extends Exception {

	public ArmazenamentoException(String msg, Throwable e) {
		super(msg, e);
	}
}
