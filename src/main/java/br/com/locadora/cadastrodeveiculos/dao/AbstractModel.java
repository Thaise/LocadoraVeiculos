package br.com.locadora.cadastrodeveiculos.dao;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import br.com.locadora.cadastrodeveiculos.armazenamento.BancoEmMemoria;
import br.com.locadora.cadastrodeveiculos.dao.entidades.Entidade;
import br.com.locadora.cadastrodeveiculos.exception.ArmazenamentoException;

/**
 * Classe abstrata que representa um modelo do padrão DAO.
 * 
 * @author Thaise Santos Souza
 */
public abstract class AbstractModel<E extends Entidade> {

	protected Logger logger = LoggerFactory.getLogger(AbstractModel.class);

	/**
	 * Método que possui as regras de negócio para a inserção de um item no banco em
	 * memória.
	 * 
	 * @param item
	 *            - item a ser inserido
	 * 
	 * @throws ArmazenamentoException
	 */
	public void insere(E item) throws ArmazenamentoException {
		try {
			getBanco().insere(item);
		} catch (ArmazenamentoException e) {
			throw e;
		}
	}

	/**
	 * Método que possui as regras de negócio para a atualização de um item no banco
	 * em memória.
	 * 
	 * @param item
	 *            - item a ser inserido
	 * 
	 * @throws ArmazenamentoException
	 */
	public void atualiza(E item) throws ArmazenamentoException {
		try {
			getBanco().atualiza(item);
		} catch (ArmazenamentoException e) {
			throw e;
		}
	}

	/**
	 * Método que possui as regras de negócio para buscar um item no banco em
	 * memória.
	 * 
	 * @param item
	 *            - item a ser inserido
	 */
	public E getPeloId(Integer id) throws ArmazenamentoException {
		E item = null;
		try {
			item = getBanco().buscaPeloId(id);
		} catch (ArmazenamentoException e) {
			throw e;
		}
		return item;
	}

	/**
	 * Método que possui as regras de negócio para buscar todos os items no banco em
	 * memória
	 *
	 * @return retorna todos os items
	 * 
	 * @throws ArmazenamentoException
	 */
	public List<E> getTodos() throws ArmazenamentoException {
		List<E> itens = new ArrayList<E>();
		try {
			itens = getBanco().buscaTodos();
		} catch (ArmazenamentoException e) {
			throw e;
		}
		return itens;
	}

	public abstract BancoEmMemoria<E> getBanco() ;

}
