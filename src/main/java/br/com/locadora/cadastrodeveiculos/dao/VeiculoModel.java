package br.com.locadora.cadastrodeveiculos.dao;

import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import br.com.locadora.cadastrodeveiculos.dao.entidades.Veiculo;
import br.com.locadora.cadastrodeveiculos.exception.ArmazenamentoException;
import br.com.locadora.cadastrodeveiculos.services.dto.RetornoBuscaDTO;
import br.com.locadora.cadastrodeveiculos.services.dto.VeiculoBuscaFiltros;

/**
 * Classe que representa um modelo do padrão DAO para Veículos. Possui todas as
 * regras de negócio necessárias para o CRUD de um veículo
 * 
 * @author Thaise Santos Souza
 */
public class VeiculoModel extends AbstractModel<Veiculo> {

	private EntityManager em = Persistence.createEntityManagerFactory("cadastroVeiculosPU").createEntityManager();

	/**
	 * Método que possui as regras de negócio para a remoção de um veículo do banco
	 * de dados.
	 * 
	 * @param veiculo
	 *            veículo a ser excluído
	 * 
	 * @throws ArmazenamentoException
	 */
	public void remove(Veiculo veiculo) throws ArmazenamentoException {
		try {
			veiculo.setFlExcluido(1);
			super.atualiza(veiculo);
		} catch (ArmazenamentoException e) {
			em.getTransaction().rollback();
			throw e;
		}
	}

	/**
	 * Método que possui as regras de negócio para buscar um veículo no banco de
	 * dados.
	 * 
	 * @param id
	 *            identificador do veículo
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

			if (v != null && v.getFlExcluido() == 0) {
				return v;
			}

			return null;

		} catch (ArmazenamentoException e) {
			throw e;
		}
	}

	public Veiculo getPeloChassi(String chassi) throws ArmazenamentoException {
		try {
			return (Veiculo) em.createQuery("SELECT v FROM " + Veiculo.class.getName() + " v WHERE v.chassi = :chassi")
					.setParameter("chassi", chassi).getSingleResult();
		} catch (NoResultException e) {
			return null;
		} catch (Exception e) {
			throw new ArmazenamentoException("Erro ao buscar pelo Chassi", e);
		}
	}

	public Veiculo getPelaPlaca(String placa) throws ArmazenamentoException {
		try {
			return (Veiculo) em.createQuery("SELECT v FROM " + Veiculo.class.getName() + " v WHERE v.placa = :placa")
					.setParameter("placa", placa).getSingleResult();
		} catch (NoResultException e) {
			return null;
		} catch (Exception e) {
			throw new ArmazenamentoException("Erro ao buscar pela Placa", e);
		}
	}

	/**
	 * Método que possui as regras de negócio para buscar veículos no banco de
	 * dados, exceto os excluídos. Possui opção de filtro por modelo, marca e placa.
	 * Os filtros são opcionais. O retorno é sempre paginado.
	 *
	 * @param item
	 *            objeto que contém os filtros opcionais e opções de paginação
	 *            (página e máximo de itens por página)
	 *
	 * @return retorna objeto com todos os veículos não excluídos logicamente e que
	 *         contenham os filtros, caso sejam preenchidos e a contagem dos itens
	 * 
	 * @throws ArmazenamentoException
	 * @throws PaginacaoException
	 * 
	 */
	public RetornoBuscaDTO busca(VeiculoBuscaFiltros item) throws ArmazenamentoException {

		RetornoBuscaDTO retorno = new RetornoBuscaDTO();

		CriteriaBuilder builder = em.getCriteriaBuilder();

		CriteriaQuery<Veiculo> criteriaQuery = builder.createQuery(Veiculo.class);
		CriteriaQuery<Long> criteriaQueryCount = builder.createQuery(Long.class);

		Root<Veiculo> root = criteriaQuery.from(Veiculo.class);
		Predicate predicate = builder.and(builder.equal(root.<String>get("flExcluido"), 0));

		if (!estaVazio(item.getModelo())) {
			predicate = builder.and(predicate, builder.like(root.<String>get("modelo"), "%" + item.getModelo() + "%"));
		}

		if (!estaVazio(item.getMarca())) {
			predicate = builder.and(predicate, builder.like(root.<String>get("marca"), "%" + item.getMarca() + "%"));
		}

		if (!estaVazio(item.getPlaca())) {
			predicate = builder.and(predicate, builder.equal(root.<String>get("placa"), item.getPlaca()));
		}
		try {
			TypedQuery<Veiculo> typedQuery = em
					.createQuery(
							criteriaQuery.select(root).where(predicate).orderBy(builder.desc(root.get("idVeiculo"))))
					.setMaxResults(item.getMaxItensRetorno())
					.setFirstResult((item.getPagina() - 1) * item.getMaxItensRetorno());
			List<Veiculo> results = typedQuery.getResultList();

			Long count = (Long) em.createQuery(
					criteriaQueryCount.select(builder.count(criteriaQueryCount.from(Veiculo.class))).where(predicate))
					.getSingleResult();

			retorno.setQuantidade(count.intValue());
			retorno.getVeiculos().addAll(results);

		} catch (Exception e) {
			throw new ArmazenamentoException("Erro ao buscar por filtros", e);
		}
		return retorno;
	};

	/**
	 * Método que possui as regras de negócio para buscar todos os veículos no banco
	 * de dados, exceto os excluídos.
	 *
	 * @return retorna todos os veículos não excluídos logicamente
	 * 
	 * @throws ArmazenamentoException
	 * 
	 */
	@Override
	public List<Veiculo> getTodos() throws ArmazenamentoException {
		return super.getTodos().stream().filter(v -> v.getFlExcluido().equals(0)).collect(Collectors.toList());
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

	@Override
	public Class<Veiculo> getEntidade() {
		return Veiculo.class;
	}

	@Override
	protected EntityManager getEm() {
		return em;
	}

}
