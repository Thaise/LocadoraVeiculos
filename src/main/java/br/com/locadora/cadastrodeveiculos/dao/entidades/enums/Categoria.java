package br.com.locadora.cadastrodeveiculos.dao.entidades.enums;

/**
 * Enum que representa a categoria do Veículo
 * 
 * @author Thaise Santos Souza
 */
public enum Categoria {

	ENTRADA("Entrada"), HACTH_PEQ("Hatch Pequeno"), HATCH_MEDIO("Hatch Médio"), SEDAN_PEQ("Sedan Pequeno"), SEDAN_COMP(
			"Sedan Compacto"), SEDAN_MED("Sedan Médio"), SEDAN_GRANDE("Sedan Grande"), SUV("SUV");

	private String descricao;

	private Categoria(String desc) {
		this.descricao = desc;
	}
	
	public String getDescricao() {
		return descricao;
	}
}
