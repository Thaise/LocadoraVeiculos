package br.com.locadora.cadastrodeveiculos.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import br.com.locadora.cadastrodeveiculos.armazenamento.BancoEmMemoria;
import br.com.locadora.cadastrodeveiculos.dao.entidades.Veiculo;
import br.com.locadora.cadastrodeveiculos.exception.ArmazenamentoException;
import br.com.locadora.cadastrodeveiculos.exception.PaginacaoException;
import br.com.locadora.cadastrodeveiculos.services.dto.VeiculoBuscaDTO;

/**
 * Classe que representa um modelo do padrão DAO para Veículos. Possui todas as
 * regras de negócio necessárias para o CRUD de um veículo
 * 
 * @author Thaise Santos Souza
 */
public class VeiculoModel extends AbstractModel<Veiculo> {

	private static BancoEmMemoria<Veiculo> banco = new BancoEmMemoria<Veiculo>();
	
	
	public void remove(Veiculo v) throws ArmazenamentoException {
		try {
			v.setFlExcluido(true);
			super.atualiza(v);
		} catch (ArmazenamentoException e) {
			throw e;
		}
	}

	/**
	 * Método que possui as regras de negócio para buscar um veículo no banco em
	 * memória.
	 * 
	 * @param id
	 *            - identificador do veículo
	 * 
	 * @return Veiculo - veículo que possui o identificador informado por parâmetro
	 * 
	 * @throws ArmazenamentoException
	 * 
	 */
	@Override
	public Veiculo getPeloId(Integer id) throws ArmazenamentoException {
		try {
			Veiculo v = super.getPeloId(id);

			if (v != null && v.getFlExcluido() == false) {
				return v;
			}

			return null;

		} catch (ArmazenamentoException e) {
			throw e;
		}
	}

	/**
	 * Método que possui as regras de negócio para buscar veículos no banco em
	 * memória, exceto os excluídos. Possui opção de filtro por modelo, marca e
	 * placa. Os filtros são opcionais. O retorno é sempre paginado.
	 *
	 * @param item
	 *            - objeto que contém os filtros opcionais e opções de paginação
	 *            (página e máximo de itens por página)
	 *
	 * @return retorna todos os veículos não excluídos logicamente e que contenham
	 *         os filtros, caso sejam preenchidos
	 * 
	 * @throws ArmazenamentoException
	 * @throws PaginacaoException
	 * 
	 */
	public List<Veiculo> busca(VeiculoBuscaDTO item) throws ArmazenamentoException, PaginacaoException {

		Predicate<Veiculo> predicate = v -> !v.getFlExcluido();

		if (!estaVazio(item.getModelo())) {
			predicate = predicate.and(v -> v.getModelo().contains(item.getModelo()));
		}

		if (!estaVazio(item.getMarca())) {
			predicate = predicate.and(v -> v.getMarca().equals(item.getMarca()));
		}

		if (!estaVazio(item.getPlaca())) {
			predicate = predicate.and(v -> v.getPlaca().equals(item.getPlaca()));
		}
		try {
			return getSubLista(item.getMaxItensRetorno(), item.getPagina(),
					super.getTodos().stream().filter(predicate).collect(Collectors.toList()));
		} catch (ArmazenamentoException e) {
			throw e;
		} catch (PaginacaoException e) {
			throw e;
		}
	};

	/**
	 * Método que possui as regras de negócio para buscar todos os veículos no banco
	 * em memória, exceto os excluídos.
	 *
	 * @return retorna todos os veículos não excluídos logicamente
	 * 
	 * @throws ArmazenamentoException
	 * 
	 */
	@Override
	public List<Veiculo> getTodos() throws ArmazenamentoException {
		return super.getTodos().stream().filter(v -> !v.getFlExcluido()).collect(Collectors.toList());
	}

	/**
	 * Método que verifica se uma String está vazia
	 * 
	 * @return retorna um booleano indicando se a string está ou não vazia
	 * 
	 */
	private boolean estaVazio(String valor) {
		return valor == null || valor.trim().isEmpty();
	}

	/**
	 * Método que realiza a paginação de uma lista
	 * 
	 * @param max
	 *            - máximo de itens que devem retornar por página
	 * @param pag
	 *            - página atual
	 * @param lista
	 *            - lista a ser paginada
	 *
	 * @return retorna a lista paginada
	 * 
	 * @throws PaginacaoException
	 * 
	 */
	public static List<Veiculo> getSubLista(Integer max, Integer pag, List<Veiculo> lista) throws PaginacaoException {
		try {
			List<Veiculo> sublista = new ArrayList<Veiculo>();

			if (max >= lista.size()) {
				if (pag == 1)
					sublista = lista;
			} else {
				Double div = lista.size() / max.doubleValue();
				if (pag < div) {
					div = div.intValue() > div ? div.intValue() - 1 : div;

					if (pag - 1 == 0)
						sublista = lista.subList(pag - 1, pag * max);
					else
						sublista = lista.subList((pag - 1) * max, pag * max);
				} else {
					Integer idxInicial = (pag - 1) * max;
					if (idxInicial <= lista.size())
						sublista = lista.subList((pag - 1) * max, lista.size());
				}
			}

			return sublista;
		} catch (Exception e) {
			throw new PaginacaoException("Erro ao paginar itens", e);
		}
	}

	@Override
	public BancoEmMemoria<Veiculo> getBanco() {
		return banco;
	}

}
