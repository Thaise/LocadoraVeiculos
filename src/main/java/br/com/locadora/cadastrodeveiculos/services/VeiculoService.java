package br.com.locadora.cadastrodeveiculos.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.jboss.resteasy.specimpl.ResponseBuilderImpl;

import br.com.locadora.cadastrodeveiculos.dao.AbstractModel;
import br.com.locadora.cadastrodeveiculos.dao.VeiculoModel;
import br.com.locadora.cadastrodeveiculos.dao.entidades.Veiculo;
import br.com.locadora.cadastrodeveiculos.exception.ArmazenamentoException;
import br.com.locadora.cadastrodeveiculos.exception.ValidacaoException;
import br.com.locadora.cadastrodeveiculos.services.dto.RetornoBuscaDTO;
import br.com.locadora.cadastrodeveiculos.services.dto.VeiculoBuscaDTO;
import br.com.locadora.cadastrodeveiculos.services.dto.VeiculoDTO;

/**
 * Classe que representa uma WebService REST de Veículos
 * 
 * @author Thaise Santos Souza
 */

@Path("/veiculo")
public class VeiculoService extends AbstractService<VeiculoDTO, Veiculo> {

	private VeiculoModel veiculoModel;

	public VeiculoService() {
		if (veiculoModel == null)
			veiculoModel = new VeiculoModel();
	}

	/**
	 * Método que representa a implementação de um endpoint para a remoção de um
	 * veículo do banco em memória
	 * 
	 * @param item
	 *            - veículo a ser removido
	 * 
	 * @return {@link Response} - retorna o status Http para a requisição
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/remove")
	public Response remove(VeiculoDTO item) {
		try {
			veiculoModel.remove(item);

			return new ResponseBuilderImpl().status(Response.Status.OK).build();
		} catch (Exception e) {
			logger.error("Erro ao remover item: " + item, e);
			throw new WebApplicationException(e.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
		}
	}

	/**
	 * Método que representa a implementação de um endpoint para a validação do
	 * chassi de um veículo
	 * 
	 * @param item
	 *            - veículo a ser validado
	 * 
	 * @return {@link Response} - retorna o status Http para a requisição
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/validaChassi")
	public Response validaChassi(VeiculoDTO veiculo) {
		try {
			validaChassiVeiculo(veiculo);

			return new ResponseBuilderImpl().status(Response.Status.OK).build();
		} catch (Exception e) {
			logger.error("Erro ao validar item: " + veiculo, e);
			throw montaExcecaoPost(e);
		}
	}

	/**
	 * Método que representa a implementação de um endpoint para a validação da
	 * placa de um veículo
	 * 
	 * @param item
	 *            - veículo a ser validado
	 * 
	 * @return {@link Response} - retorna o status Http para a requisição
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/validaPlaca")
	public Response validaPlaca(VeiculoDTO veiculo) {
		try {
			validaPlacaVeiculo(veiculo);

			return new ResponseBuilderImpl().status(Response.Status.OK).build();
		} catch (Exception e) {
			logger.error("Erro ao validar item: " + veiculo, e);
			throw montaExcecaoPost(e);
		}
	}

	/**
	 * Método que representa a implementação de um endpoint para a busca de veículos
	 * na memória utilizando filtros opcionais e paginação
	 * 
	 * @param dtoBusca
	 *            - objeto com filtros e parâmetros de paginação
	 * 
	 * @return {@link Response} - retorna o status Http para a requisição e os
	 *         veículos encontrados (caso existam)
	 */
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/buscaPorFiltros")
	public Response busca(VeiculoBuscaDTO dtoBusca) {
		try {

			RetornoBuscaDTO retorno = veiculoModel.busca(dtoBusca);

			return new ResponseBuilderImpl().status(Response.Status.OK).entity(retorno).build();
		} catch (Exception e) {
			logger.error("Erro ao remover item: " + dtoBusca, e);
			throw new WebApplicationException(e.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
		}
	}

	/**
	 * Método chamado antes de realizar o cadastro do veículo, possui validações,
	 * entre outras regras que devem ser executadas antes do veículo ser cadastrado
	 * 
	 * @param itemEntidade
	 *            - veículo a ser verificado
	 * 
	 * @throws Exception
	 */
	@Override
	protected void preCadastro(Veiculo itemEntidade) throws Exception {
		validaChassiVeiculo(itemEntidade);
		validaPlacaVeiculo(itemEntidade);
	}

	/**
	 * Método chamado antes de realizar a atualização do veículo, possui validações,
	 * entre outras regras que devem ser executadas antes do veículo ser atualizado
	 * 
	 * @param itemEntidade
	 *            - veículo a ser verificado
	 * 
	 * @throws Exception
	 */
	@Override
	protected void preAtualizacao(Veiculo itemEntidade) throws Exception {
		validaChassiVeiculo(itemEntidade);
		validaPlacaVeiculo(itemEntidade);
	}

	/**
	 * Método que possui regras para validação da placa de um veículo
	 * 
	 * @param itemEntidade
	 *            - veículo a ser validado
	 * 
	 * @throws ValidacaoException,
	 *             ArmazenamentoException
	 */
	private void validaPlacaVeiculo(Veiculo itemEntidade) throws ValidacaoException, ArmazenamentoException {
		try {
			List<Veiculo> todos = veiculoModel.getTodos();

			List<Veiculo> comPlacaIgual = todos.stream()
					.filter(v -> v.getPlaca().equalsIgnoreCase(itemEntidade.getPlaca())
							&& !v.getId().equals(itemEntidade.getId()))
					.collect(Collectors.toList());

			if (comPlacaIgual != null && !comPlacaIgual.isEmpty()) {
				throw new ValidacaoException("Placa já foi cadastrada para outro veículo");
			}

		} catch (ArmazenamentoException e) {
			throw e;
		}
	}

	/**
	 * Método que possui regras para validação do chassi de um veículo
	 * 
	 * @param itemEntidade
	 *            - veículo a ser validado
	 * 
	 * @throws ValidacaoException,
	 *             ArmazenamentoException
	 */
	private void validaChassiVeiculo(Veiculo itemEntidade) throws ValidacaoException, ArmazenamentoException {
		try {
			List<Veiculo> todos = veiculoModel.getTodos();

			List<Veiculo> comPlacaIgual = todos.stream()
					.filter(v -> v.getChassi().equalsIgnoreCase(itemEntidade.getChassi())
							&& !v.getId().equals(itemEntidade.getId()))
					.collect(Collectors.toList());

			if (comPlacaIgual != null && !comPlacaIgual.isEmpty()) {
				throw new ValidacaoException("Chassi já foi cadastrado para outro veículo");
			}

		} catch (ArmazenamentoException e) {
			throw e;
		}
	}

	@Override
	protected AbstractModel<Veiculo> getModel() {
		return veiculoModel;
	}

	@Override
	protected Class<Veiculo> getClasseEntidade() {
		return Veiculo.class;
	}

	@Override
	protected Class<VeiculoDTO> getClasseDTO() {
		return VeiculoDTO.class;
	}

}
