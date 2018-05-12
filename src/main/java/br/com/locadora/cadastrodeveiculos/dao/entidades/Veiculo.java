package br.com.locadora.cadastrodeveiculos.dao.entidades;

import br.com.locadora.cadastrodeveiculos.dao.entidades.enums.Categoria;
import br.com.locadora.cadastrodeveiculos.dao.entidades.enums.Status;

/**
 * Classe do tipo Bean que representa a entidade Veículo
 * 
 * @author Thaise Santos Souza
 * 
 */
public class Veiculo implements Entidade {

	private Integer idVeiculo;
	private String placa;
	private Categoria categoria;
	private String marca;
	private String modelo;
	private String chassi;
	private Integer ano;
	private Boolean possuiAirbag;
	private Boolean possuiArCond;
	private Boolean possuiVidrosElet;
	private Integer potencia;
	private Status status;
	private Boolean flExcluido = false;

	public Integer getIdVeiculo() {
		return idVeiculo;
	}

	public void setIdVeiculo(Integer idVeiculo) {
		this.idVeiculo = idVeiculo;
	}

	public String getPlaca() {
		return placa;
	}

	public void setPlaca(String placa) {
		this.placa = placa;
	}

	public Categoria getCategoria() {
		return categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	public String getChassi() {
		return chassi;
	}

	public void setChassi(String chassi) {
		this.chassi = chassi;
	}

	public Integer getAno() {
		return ano;
	}

	public void setAno(Integer ano) {
		this.ano = ano;
	}

	public Boolean getPossuiAirbag() {
		return possuiAirbag;
	}

	public void setPossuiAirbag(Boolean possuiAirbag) {
		this.possuiAirbag = possuiAirbag;
	}

	public Boolean getPossuiArCond() {
		return possuiArCond;
	}

	public void setPossuiArCond(Boolean possuiArCond) {
		this.possuiArCond = possuiArCond;
	}

	public Boolean getPossuiVidrosElet() {
		return possuiVidrosElet;
	}

	public void setPossuiVidrosElet(Boolean possuiVidrosElet) {
		this.possuiVidrosElet = possuiVidrosElet;
	}

	public Integer getPotencia() {
		return potencia;
	}

	public void setPotencia(Integer potencia) {
		this.potencia = potencia;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public Boolean getFlExcluido() {
		return flExcluido;
	}

	public void setFlExcluido(Boolean flExcluido) {
		if(flExcluido == null)
			flExcluido = false;
		this.flExcluido = flExcluido;
	}

	@Override
	public void setId(Integer id) {
		setIdVeiculo(id);
	}

	@Override
	public Integer getId() {
		return idVeiculo;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((ano == null) ? 0 : ano.hashCode());
		result = prime * result + ((categoria == null) ? 0 : categoria.hashCode());
		result = prime * result + ((chassi == null) ? 0 : chassi.hashCode());
		result = prime * result + ((flExcluido == null) ? 0 : flExcluido.hashCode());
		result = prime * result + ((idVeiculo == null) ? 0 : idVeiculo.hashCode());
		result = prime * result + ((marca == null) ? 0 : marca.hashCode());
		result = prime * result + ((modelo == null) ? 0 : modelo.hashCode());
		result = prime * result + ((placa == null) ? 0 : placa.hashCode());
		result = prime * result + ((possuiAirbag == null) ? 0 : possuiAirbag.hashCode());
		result = prime * result + ((possuiArCond == null) ? 0 : possuiArCond.hashCode());
		result = prime * result + ((possuiVidrosElet == null) ? 0 : possuiVidrosElet.hashCode());
		result = prime * result + ((potencia == null) ? 0 : potencia.hashCode());
		result = prime * result + ((status == null) ? 0 : status.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Veiculo other = (Veiculo) obj;
		if (ano == null) {
			if (other.ano != null)
				return false;
		} else if (!ano.equals(other.ano))
			return false;
		if (categoria != other.categoria)
			return false;
		if (chassi == null) {
			if (other.chassi != null)
				return false;
		} else if (!chassi.equals(other.chassi))
			return false;
		if (flExcluido == null) {
			if (other.flExcluido != null)
				return false;
		} else if (!flExcluido.equals(other.flExcluido))
			return false;
		if (idVeiculo == null) {
			if (other.idVeiculo != null)
				return false;
		} else if (!idVeiculo.equals(other.idVeiculo))
			return false;
		if (marca == null) {
			if (other.marca != null)
				return false;
		} else if (!marca.equals(other.marca))
			return false;
		if (modelo == null) {
			if (other.modelo != null)
				return false;
		} else if (!modelo.equals(other.modelo))
			return false;
		if (placa == null) {
			if (other.placa != null)
				return false;
		} else if (!placa.equals(other.placa))
			return false;
		if (possuiAirbag == null) {
			if (other.possuiAirbag != null)
				return false;
		} else if (!possuiAirbag.equals(other.possuiAirbag))
			return false;
		if (possuiArCond == null) {
			if (other.possuiArCond != null)
				return false;
		} else if (!possuiArCond.equals(other.possuiArCond))
			return false;
		if (possuiVidrosElet == null) {
			if (other.possuiVidrosElet != null)
				return false;
		} else if (!possuiVidrosElet.equals(other.possuiVidrosElet))
			return false;
		if (potencia == null) {
			if (other.potencia != null)
				return false;
		} else if (!potencia.equals(other.potencia))
			return false;
		if (status != other.status)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Veiculo [idVeiculo=" + idVeiculo + ", placa=" + placa + ", categoria=" + categoria + ", marca=" + marca
				+ ", modelo=" + modelo + ", chassi=" + chassi + ", ano=" + ano + ", possuiAirbag=" + possuiAirbag
				+ ", possuiArCond=" + possuiArCond + ", possuiVidrosElet=" + possuiVidrosElet + ", potencia=" + potencia
				+ ", status=" + status + ", flExcluido=" + flExcluido + "]";
	}

}
