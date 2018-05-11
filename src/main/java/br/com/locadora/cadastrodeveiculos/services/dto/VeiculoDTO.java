package br.com.locadora.cadastrodeveiculos.services.dto;


import org.codehaus.jackson.annotate.JsonIgnoreProperties;

import br.com.locadora.cadastrodeveiculos.dao.entidades.Veiculo;

/**
 * Classe que representa DTO de Veículo. Extende o Bean veículo, pois este não
 * possui nenhuma específicidade que influenciaria na serialização dos
 * atributos.
 * 
 * @author Thaise Santos Souza
 */
@JsonIgnoreProperties
public class VeiculoDTO extends Veiculo implements DTO {

}
