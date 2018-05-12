package br.com.locadora.cadastrodeveiculos.armazenamento;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import br.com.locadora.cadastrodeveiculos.dao.entidades.Entidade;
import br.com.locadora.cadastrodeveiculos.exception.ArmazenamentoException;

/**
 * Classe que representa o banco de dados em memória, armazena os itens
 * cadastrados.
 * 
 * @author Thaise Santos Souza
 * 
 */
public class BancoEmMemoria<E extends Entidade> {

	private Map<Integer, E> items = new HashMap<Integer, E>();

	private Integer sequence = 1;

	/**
	 * Método que insere um item no banco em memória.
	 * 
	 * @param item
	 *             item a ser inserido
	 * 
	 * @throws ArmazenamentoException
	 */
	public void insere(E item) throws ArmazenamentoException {
		try {
			item.setId(sequence);
			items.put(item.getId(), item);

			sequence++;
		} catch (Exception e) {
			throw new ArmazenamentoException("Erro ao inserir item", e);
		}
	}

	/**
	 * Método que atualiza um item no banco em memória.
	 * 
	 * @param item
	 *            item a ser atualizado
	 */
	public void atualiza(E item) throws ArmazenamentoException {
		try {
			if (items.containsKey(item.getId()))
				items.replace(item.getId(), item);
		} catch (Exception e) {
			throw new ArmazenamentoException("Erro ao atualizar item", e);
		}
	}

	/**
	 * Método que busca um item no banco em memória.
	 * 
	 * @param id
	 *            identificador do item
	 * 
	 * @return E item que possui o identificador informado por parâmetro
	 * 
	 * @throws ArmazenamentoException
	 */
	public E buscaPeloId(Integer id) throws ArmazenamentoException {
		try {
			return items.get(id);
		} catch (Exception e) {
			throw new ArmazenamentoException("Erro ao atualizar item", e);
		}
	}

	/**
	 * Método que busca todos os items no banco em memória
	 *
	 * @return retorna todos os items
	 * 
	 * @throws ArmazenamentoException
	 */
	public List<E> buscaTodos() throws ArmazenamentoException {
		try {
			return new ArrayList<E>(items.values());
		} catch (Exception e) {
			throw new ArmazenamentoException("Erro ao atualizar item", e);
		}
	};

}
