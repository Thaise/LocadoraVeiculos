package br.com.locadora.cadastrodeveiculos.services;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.jboss.resteasy.specimpl.ResponseBuilderImpl;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import br.com.locadora.cadastrodeveiculos.dao.AbstractModel;
import br.com.locadora.cadastrodeveiculos.dao.entidades.Entidade;
import br.com.locadora.cadastrodeveiculos.exception.ValidacaoException;
import br.com.locadora.cadastrodeveiculos.services.dto.DTO;
import br.com.locadora.cadastrodeveiculos.services.dto.ErroDTO;

/**
 * Classe abstrata que representa uma WebService REST, todas as WebServices do
 * projeto que são responsáveis por CRUDs de entidades devem extendê-la.
 * 
 * @author Thaise Santos Souza
 */
public abstract class AbstractService<T extends DTO, E extends Entidade> {

	protected Logger logger = LoggerFactory.getLogger(AbstractService.class);

	protected ModelMapper modelMapper = new ModelMapper();

	/**
	 * Método que representa a implementação de um endpoint para cadastro de um item
	 * no banco em memória
	 * 
	 * @param item
	 *            item que deve ser cadastrado
	 * 
	 * @return {@link Response} - retorna o status Http para a requisição
	 */
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response cadastra(T item) {
		try {
			E itemEntidade = convertToEntity(item);

			preCadastro(itemEntidade);

			getModel().insere(itemEntidade);

			return new ResponseBuilderImpl().status(Response.Status.CREATED).build();
		} catch (Exception e) {
			logger.error("Erro ao inserir item: " + item, e);
			throw montaExcecaoPost(e);
		}
	}

	/**
	 * Método que representa a implementação de um endpoint para atualização de um
	 * item no banco em memória
	 * 
	 * @param item
	 *            item que deve ser atualizado
	 * 
	 * @return {@link Response} - retorna o status Http para a requisição
	 */
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response atualiza(T item) {
		try {
			E itemEntidade = convertToEntity(item);

			preAtualizacao(itemEntidade);

			getModel().atualiza(itemEntidade);

			return new ResponseBuilderImpl().status(Response.Status.CREATED).build();

		} catch (Exception e) {
			logger.error("Erro ao atualizar item: " + item, e);
			throw montaExcecaoPost(e);
		}
	}

	/**
	 * Método que representa a implementação de um endpoint para a busca de um item
	 * no banco em memória
	 * 
	 * @param id
	 *            identificador do item que deve ser buscado
	 * 
	 * @return {@link Response} - retorna o status Http para a requisição e o
	 *         veículo encontrado (caso exista)
	 */
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("{id}")
	public Response buscaPeloId(@PathParam("id") Integer id) {
		T dto = null;
		try {
			E item = getModel().getPeloId(id);
			if (item != null) {
				dto = convertToDto(item);
			}

			return new ResponseBuilderImpl().status(Response.Status.OK).entity(dto).build();
		} catch (Exception e) {
			logger.error("Erro ao buscar item pelo id: " + id, e);
			throw new WebApplicationException(e.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
		}
	}

	/**
	 * Método que representa a implementação de um endpoint para a busca de todos os
	 * itens cadastrados no banco em memória
	 * 
	 * 
	 * @return {@link Response} - retorna o status Http para a requisição e os
	 *         veículos encontrados (caso existam)
	 */
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscaTodos() {
		List<T> lista = new ArrayList<T>();
		try {
			List<E> itens = getModel().getTodos();
			if (itens != null) {
				for (E item : itens) {
					lista.add(convertToDto(item));
				}
			}

			return new ResponseBuilderImpl().status(Response.Status.OK).entity(lista).build();
		} catch (Exception e) {
			logger.error("Erro ao buscar todos os itens cadastrados", e);
			throw new WebApplicationException(e.getMessage(), Response.Status.INTERNAL_SERVER_ERROR);
		}
	}

	/**
	 * Monta WebApplicationException a partir de uma determinada exceção.
	 * 
	 * @param excecao
	 *            exceção base para retorno de WebApplicationException
	 * 
	 * @return retorna {@link WebApplicationException}
	 */
	protected WebApplicationException montaExcecaoPost(Exception excecao) {
		Status status = Response.Status.INTERNAL_SERVER_ERROR;

		if (excecao instanceof ValidacaoException) {
			status = Response.Status.BAD_REQUEST;
		}

		return new WebApplicationException(new ResponseBuilderImpl().status(status)
				.entity(new ErroDTO(status.getStatusCode(), excecao.getMessage())).build());
	}

	/**
	 * Converte {@link Entidade} para {@link DTO}
	 * 
	 * @param entidade
	 *            entidade a ser convetida
	 * 
	 * @return {@link DTO} a partir da entidade informada por parâmetro
	 */
	protected T convertToDto(E entidade) {
		T postDto = modelMapper.map(entidade, getClasseDTO());
		return postDto;
	}

	/**
	 * Converte {@link DTO} para {@link Entidade}
	 * 
	 * @param postDto
	 *            {@link DTO} a ser convetido
	 * 
	 * @return {@link Entidade} a partir do dto informado por parâmetro
	 */
	protected E convertToEntity(T postDto) throws Exception {
		return modelMapper.map(postDto, getClasseEntidade());
	}

	protected abstract void preCadastro(E itemEntidade) throws Exception;

	protected abstract void preAtualizacao(E itemEntidade) throws Exception;

	/**
	 * Método que deve ser implementado por quem extende essa classe. Fornece um
	 * {@link AbstractModel} para utilização em outros métodos desta classe
	 * 
	 * @return retorna um {@link AbstractModel}
	 */
	protected abstract AbstractModel<E> getModel();

	/**
	 * Método que deve ser implementado por quem extende essa classe. Fornece o tipo
	 * da classe de uma {@link Entidade}. É utilizado para conversões entre objetos.
	 * 
	 * @return retorna o tipo da classe de uma Entidade
	 */
	protected abstract Class<E> getClasseEntidade();

	/**
	 * Método que deve ser implementado por quem extende essa classe. Fornece o tipo
	 * da classe de um {@link DTO} É utilizado para conversões entre objetos.
	 * 
	 * @return retorna o tipo da classe de um DTO
	 */
	protected abstract Class<T> getClasseDTO();
}
