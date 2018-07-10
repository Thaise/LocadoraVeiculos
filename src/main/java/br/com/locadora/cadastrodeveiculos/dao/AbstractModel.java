package br.com.locadora.cadastrodeveiculos.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

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
	 * Método que possui as regras de negócio para a inserção de um item no banco de
	 * dados
	 * 
	 * @param item
	 *            item a ser inserido
	 * 
	 * @throws ArmazenamentoException
	 */
	public void insere(E item) throws ArmazenamentoException {
		try {
			getEm().getTransaction().begin();
			getEm().persist(item);
			getEm().getTransaction().commit();
		} catch (Exception e) {
			getEm().getTransaction().rollback();
			throw new ArmazenamentoException("Erro ao inserir item", e);
		}
	}

	/**
	 * Método que possui as regras de negócio para a atualização de um item no banco
	 * de dados
	 * 
	 * @param item
	 *            item a ser inserido
	 * 
	 * @throws ArmazenamentoException
	 */
	public void atualiza(E item) throws ArmazenamentoException {
		try {
			getEm().getTransaction().begin();
			getEm().merge(item);
			getEm().getTransaction().commit();
		} catch (Exception e) {
			getEm().getTransaction().rollback();
			throw new ArmazenamentoException("Erro ao atualizar item", e);
		}
	}

	/**
	 * Método que possui as regras de negócio para buscar um item no banco de dados
	 * 
	 * @param item
	 *            item a ser inserido
	 */
	public E getPeloId(Integer id) throws ArmazenamentoException {
		E item = null;
		try {
			item = getEm().find(getEntidade(), id);
		} catch (NoResultException e) {
			return null;
		} catch (Exception e) {
			throw new ArmazenamentoException("Erro ao buscar pelo ID", e);
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
			itens = getEm().createQuery("SELECT o FROM " + getEntidade().getName() + " o").getResultList();
		} catch (Exception e) {
			throw new ArmazenamentoException("Erro ao buscar todos", e);
		}
		return itens;
	}

	public abstract Class<E> getEntidade();

	protected abstract EntityManager getEm();

}
