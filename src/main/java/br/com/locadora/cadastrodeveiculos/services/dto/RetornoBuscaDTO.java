package br.com.locadora.cadastrodeveiculos.services.dto;

import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

import br.com.locadora.cadastrodeveiculos.dao.entidades.Veiculo;
/**
 * Classe que representa DTO para retorno da busca de Veículos.
 * 
 * @author Thaise Santos Souza
 */
@JsonIgnoreProperties
public class RetornoBuscaDTO {

	private List<Veiculo> veiculos;
	private Integer quantidade;
	
	public List<Veiculo> getVeiculos() {
		if(veiculos == null) {
			veiculos = new ArrayList<Veiculo>();
		}
		return veiculos;
	}

	public Integer getQuantidade() {
		return quantidade;
	}
	public void setQuantidade(Integer quantidade) {
		this.quantidade = quantidade;
	}
	
	
}
