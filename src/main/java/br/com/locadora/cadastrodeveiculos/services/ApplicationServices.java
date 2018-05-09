package br.com.locadora.cadastrodeveiculos.services;

import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

/** Configuração dos serviços REST 
 * 
 * @author Thaise Santos Souza
 * */
@ApplicationPath("/rest")
public class ApplicationServices extends Application {

	private Set<Object> singletons = new HashSet<Object>();

	public ApplicationServices() {
		singletons.add(new VeiculoService());
	}

	@Override
	public Set<Object> getSingletons() {
		return singletons;
	}
}
