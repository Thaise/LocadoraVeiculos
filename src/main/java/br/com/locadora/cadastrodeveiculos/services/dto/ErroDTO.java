package br.com.locadora.cadastrodeveiculos.services.dto;

/**
 * Classe que representa um DTO para erros em requisições
 */
public class ErroDTO {

	private Integer status;
	private String msg;

	/**
	 * @param status
	 *            - Código status HTTP do erro
	 * @param msg
	 *            - mensagem de erro
	 */
	public ErroDTO(Integer status, String msg) {
		super();
		this.status = status;
		this.msg = msg;
	}

	public String getMsg() {
		return msg;
	}

	public Integer getStatus() {
		return status;
	}

}
