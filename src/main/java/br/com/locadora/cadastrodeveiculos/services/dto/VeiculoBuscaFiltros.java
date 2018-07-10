package br.com.locadora.cadastrodeveiculos.services.dto;

import javax.ws.rs.DefaultValue;
import javax.ws.rs.QueryParam;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

public class VeiculoBuscaFiltros{

	@QueryParam("maxItensRetorno")
	@DefaultValue("10")
	private Integer maxItensRetorno;
	@QueryParam("pagina")
	@DefaultValue("0")
	private Integer pagina;
	@QueryParam("modelo")
	@DefaultValue("")
	private String modelo;
	@QueryParam("marca")
	@DefaultValue("")
	private String marca;
	@QueryParam("placa")
	@DefaultValue("")
	private String placa;

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
