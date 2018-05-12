package br.com.locadora.cadastrodeveiculos.dao.entidades.enums;

/**
 * Enum que representa o status do veículo
 * 
 * @author Thaise Santos Souza
 */
public enum Status {

	DISPONIVEL("Disponível"), ALUGADO("Alugado"), EM_REPARO("Em reparo");

	private String descricao;

	private Status(String desc) {
		this.descricao = desc;
	}

	public String getDescricao() {
		return descricao;
	}
}
