package br.com.locadora.cadastrodeveiculos.services;

import javax.ws.rs.BeanParam;
import javax.ws.rs.DELETE;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
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
import br.com.locadora.cadastrodeveiculos.services.dto.VeiculoBuscaFiltros;
import br.com.locadora.cadastrodeveiculos.services.dto.VeiculoDTO;

/**
 * Classe que representa uma WebService REST de Veículos
 * 
 * @author Thaise Santos Souza
 */

@Path("/veiculos")
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
	 *            veículo a ser removido
	 * 
	 * @return {@link Response} - retorna o status Http para a requisição
	 */
	@DELETE
	@Produces(MediaType.APPLICATION_JSON)
	@Path("{id}")
	public Response remove(@PathParam("id") Integer id) {
		try {
			Veiculo veiculo = veiculoModel.getPeloId(id);
			veiculoModel.remove(veiculo);
			return new ResponseBuilderImpl().status(Response.Status.OK).build();
		} catch (Exception e) {
			logger.error("Erro ao remover item de id: " + id, e);
			throw new WebApplicationException(e.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
		}
	}

	/**
	 * Método que representa a implementação de um endpoint para a validação do
	 * chassi de um veículo
	 * 
	 * @param chassi
	 *            chassi a ser validado
	 * @param id
	 *            id do veículo a ser validado
	 * 
	 * @return {@link Response} - retorna o status Http para a requisição
	 */
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/validaChassi/{chassi}")
	public Response validaChassi(@PathParam("chassi") String chassi, @DefaultValue("") @QueryParam("id") Integer id) {
		try {
			validaChassiVeiculo(chassi, id);

			return new ResponseBuilderImpl().status(Response.Status.OK).build();
		} catch (Exception e) {
			logger.error("Erro ao validar chassi do item de id: " + id, e);
			throw montaExcecaoPost(e);
		}
	}

	/**
	 * Método que representa a implementação de um endpoint para a validação da
	 * placa de um veículo
	 * 
	 * @param placa
	 *            placa a ser validada
	 * @param id
	 *            id do veículo a ser validado
	 * 
	 * @return {@link Response} - retorna o status Http para a requisição
	 */
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/validaPlaca/{placa}")
	public Response validaPlaca(@PathParam("placa") String placa, @DefaultValue("") @QueryParam("id") Integer id) {
		try {
			validaPlacaVeiculo(placa, id);

			return new ResponseBuilderImpl().status(Response.Status.OK).build();
		} catch (Exception e) {
			logger.error("Erro ao validar placa do item de id: " + id, e);
			throw montaExcecaoPost(e);
		}
	}

	/**
	 * Método que representa a implementação de um endpoint para a busca de veículos
	 * na memória utilizando filtros opcionais e paginação
	 * 
	 * @param dtoBusca
	 *            objeto com filtros e parâmetros de paginação
	 * 
	 * @return {@link Response} - retorna o status Http para a requisição e o objeto
	 *         que contém os veículos encontrados (caso existam) e a contagem dos
	 *         itens
	 */
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/query")
	public Response busca(@BeanParam VeiculoBuscaFiltros filtros) {
		try {
			RetornoBuscaDTO retorno = veiculoModel.busca(filtros);
			return new ResponseBuilderImpl().status(Response.Status.OK).entity(retorno).build();
		} catch (Exception e) {
			logger.error("Erro ao pesquisar itens", e);
			throw new WebApplicationException(e.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
		}
	}

	/**
	 * Método chamado antes de realizar o cadastro do veículo, possui validações,
	 * entre outras regras que devem ser executadas antes do veículo ser cadastrado
	 * 
	 * @param itemEntidade
	 *            veículo a ser verificado
	 * 
	 * @throws Exception
	 */
	@Override
	protected void preCadastro(Veiculo itemEntidade) throws Exception {
		validaChassiVeiculo(itemEntidade.getChassi(), itemEntidade.getId());
		validaPlacaVeiculo(itemEntidade.getPlaca(), itemEntidade.getId());
	}

	/**
	 * Método chamado antes de realizar a atualização do veículo, possui validações,
	 * entre outras regras que devem ser executadas antes do veículo ser atualizado
	 * 
	 * @param itemEntidade
	 *            veículo a ser verificado
	 * 
	 * @throws Exception
	 */
	@Override
	protected void preAtualizacao(Veiculo itemEntidade) throws Exception {
		validaChassiVeiculo(itemEntidade.getChassi(), itemEntidade.getId());
		validaPlacaVeiculo(itemEntidade.getChassi(), itemEntidade.getId());
	}

	/**
	 * Método que possui regras para validação da placa de um veículo
	 * 
	 * @param itemEntidade
	 *            veículo a ser validado
	 * 
	 * @throws ValidacaoException,
	 *             ArmazenamentoException
	 */
	private void validaPlacaVeiculo(String placa, Integer id) throws ValidacaoException, ArmazenamentoException {
		try {
			Veiculo veiculoComPlaca = veiculoModel.getPelaPlaca(placa);
			validaIgual(id, veiculoComPlaca, "Placa");
		} catch (ArmazenamentoException e) {
			throw e;
		}
	}

	/**
	 * Método que possui regras para validação do chassi de um veículo
	 * 
	 * @param itemEntidade
	 *            veículo a ser validado
	 * 
	 * @throws ValidacaoException,
	 *             ArmazenamentoException
	 */
	private void validaChassiVeiculo(String chassi, Integer id) throws ValidacaoException, ArmazenamentoException {
		try {
			Veiculo veiculoComPlaca = veiculoModel.getPeloChassi(chassi);
			validaIgual(id, veiculoComPlaca, "Chassi");
		} catch (ArmazenamentoException e) {
			throw e;
		}
	}

	private void validaIgual(Integer id, Veiculo veiculoCadastrado, String propriedadeAValidar)
			throws ValidacaoException {
		boolean ehIgual = false;
		if (veiculoCadastrado != null)
			if (id == 0 || !veiculoCadastrado.getId().equals(id)) {
				ehIgual = true;
			}

		if (ehIgual) {
			throw new ValidacaoException(propriedadeAValidar + " já foi cadastrado para outro veículo");
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

	@Override
	protected Veiculo convertToEntity(VeiculoDTO postDto) throws Exception {
		Veiculo v = new Veiculo();
		v.setIdVeiculo(postDto.getIdVeiculo());
		v.setAno(postDto.getAno());
		v.setPotencia(postDto.getPotencia());
		v.setCategoria(postDto.getCategoria());
		v.setChassi(postDto.getChassi());
		v.setPlaca(postDto.getPlaca());
		v.setMarca(postDto.getMarca());
		v.setModelo(postDto.getModelo());
		v.setPossuiAirbag(postDto.getPossuiAirbag());
		v.setPossuiArCond(postDto.getPossuiArCond());
		v.setPossuiVidrosElet(postDto.getPossuiVidrosElet());
		v.setFlExcluido(postDto.getFlExcluido());
		v.setStatus(postDto.getStatus());
		return v;
	}

	@Override
	protected VeiculoDTO convertToDto(Veiculo entidade) {
		VeiculoDTO v = new VeiculoDTO();
		v.setIdVeiculo(entidade.getIdVeiculo());
		v.setAno(entidade.getAno());
		v.setPotencia(entidade.getPotencia());
		v.setCategoria(entidade.getCategoria());
		v.setChassi(entidade.getChassi());
		v.setPlaca(entidade.getPlaca());
		v.setMarca(entidade.getMarca());
		v.setModelo(entidade.getModelo());
		v.setPossuiAirbag(entidade.getPossuiAirbag());
		v.setPossuiArCond(entidade.getPossuiArCond());
		v.setPossuiVidrosElet(entidade.getPossuiVidrosElet());
		v.setFlExcluido(entidade.getFlExcluido());
		v.setStatus(entidade.getStatus());
		return v;
	}

}
