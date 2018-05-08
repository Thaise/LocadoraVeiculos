package br.com.locadora.cadastrodeveiculos.dao.entidades;

import java.io.Serializable;

/**
 * Interface que deve ser implementada por todas as entidades que podem ser
 * armazenadas no bancp em memória
 * 
 * @author Thaise Santos Souza
 */
public interface Entidade extends Serializable {

	/**
	 * Método do tipo setter que recebe o identificador da entidade para manipulação
	 * pelo banco em memória
	 * 
	 * @param id - identificador da entidade
	 * 
	 */
	public void setId(Integer id);

	
	/**
	 * Método do tipo getter que retorna o identificador da entidade para manipulação
	 * pelo banco em memória
	 */
	public Integer getId();
}
