package br.com.locadora.cadastrodeveiculos.armazenamento;

import java.util.ArrayList;
import java.util.List;

public class teste {

	static ArrayList<String> lista = new ArrayList<String>();

	public static void main(String[] args) {

		getLista();

		System.out.println("par");
		printa(getSubLista(2, 1));
		printa(getSubLista(2, 2));
		printa(getSubLista(2, 3));
		printa(getSubLista(2, 4));

		System.out.println("ímpar");
		printa(getSubLista(3, 1));
		printa(getSubLista(3, 2));
		printa(getSubLista(3, 3));
		printa(getSubLista(3, 4));
	}

	private static void printa(List<String> subLista) {
		for (String string : subLista) {
			System.out.print(string + ",");
		}

		System.out.println();

	}

	public static List<String> getSubLista(Integer max, Integer pag) {
		List<String> sublista = new ArrayList<String>();

		if (max > lista.size()) {
			sublista = lista;
		} else {
			Double div = lista.size() / max.doubleValue();
			if (pag < div) {
				div = div.intValue() > div ? div.intValue() - 1 : div;

				if (pag - 1 == 0)
					sublista = lista.subList(pag - 1, pag * max);
				else
					sublista = lista.subList((pag - 1) * max, pag * max);
			} else {
				Integer idxInicial = (pag - 1) * max;
				if (idxInicial <= lista.size())
					sublista = lista.subList((pag - 1) * max, lista.size());
			}
		}

		return sublista;
	}

	public static ArrayList<String> getLista() {
		lista.add("a");
		lista.add("b");
		lista.add("c");
		lista.add("d");
		lista.add("e");
		lista.add("f");
		lista.add("g");
		lista.add("h");

		return lista;
	}

}
