package br.com.locadora.cadastrodeveiculos.services.dto;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

/**
 * Classe que representa DTO para busca de Veículos.
 * 
 * @author Thaise Santos Souza
 */
@JsonIgnoreProperties
public class VeiculoBuscaDTO implements DTO{

	private String modelo;
	private String marca;
	private String placa;
	private Integer maxItensRetorno;
	private Integer pagina;

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getPlaca() {
		return placa;
	}

	public void setPlaca(String placa) {
		this.placa = placa;
	}

	public Integer getMaxItensRetorno() {
		return maxItensRetorno;
	}

	public void setMaxItensRetorno(Integer maxItensRetorno) {
		this.maxItensRetorno = maxItensRetorno;
	}

	public Integer getPagina() {
		return pagina;
	}

	public void setPagina(Integer pagina) {
		this.pagina = pagina;
	}

}
