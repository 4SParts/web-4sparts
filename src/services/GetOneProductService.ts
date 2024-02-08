import { getRepository } from "typeorm";
import Produtos from "../entities/Produtos";

interface Request {
  id: string;
}

class GetOneProductService {
  public async execute({ id }: Request) {
    const produtoRepository = await getRepository(Produtos)
      .query(
      `
      select
	  LEFT(produto.c_descricao, POSITION(' ' IN produto.c_descricao || ' ') - 1) as id,
		  produto.i_cdproduto as idproduto, 
		  replace(coalesce(produto.c_descricao,
	  '') || ' ' || coalesce(produto.c_aplicacao,
	  ''),
	  '-',
	  '') as Descrição,
	  '' as Aplicação, 
	  produto.f_enviapalm as EnviaPalm,
		  produto.c_enderecocatalogo as endCatalogo,
		  replace(replace(produto.c_cdmontadora,'-',''),'.','') as Código_Original,
		  case 
			  when produto.f_sazonal = 'S' then max(preco.n_precovenda::float)
			  else min(preco.n_precovenda::float) end as Lista_Promocional,
		  case 
			  when produto.f_sazonal = 'S' then max(preco.n_precovenda::float)
			  else max(preco.n_precovenda::float)
		  end as Lista_principal,
		  produto.i_qtembalagem::integer as embalagem,
		  marca_produto.c_descricao as montadora,
		  fornecedor.c_nomefantas as marca,
		  (sum( distinct estoque.n_qtdestoque) - sum( distinct estoque.n_reservadosaida))::integer as qtdestoque,
		  classfiscal.n_aliquota_ipi::float as ipi ,
		  produto.i_cdlinha as linha,
		  itemcomissao.n_perccomis1 as comissao,
		  produto.f_catalogo as catalogo ,
		  unidade.c_descricao as unidade,
		  produto.c_observacao as prodobservacao,
		  produto.f_destaque as destaque,
		  produto.d_cadastro as dcadastro,
		  produto.c_arqfoto as arqfoto
	  from
		  produto
	  left join itemcomissao on
		  itemcomissao.i_cdgrupo = produto.i_cdgrupo
	  left join preco on
		  produto.i_cdproduto = preco.i_cdproduto
	  left join linhaproduto on
		  produto.i_cdlinha = linhaproduto.i_cdlinha
	  left join lista_preco on
		  preco.i_cdlista_preco = lista_preco.i_cdlista_preco
	  left join marca_produto on
		  produto.i_cdmarca = marca_produto.i_cdmarca
	  left join estoque on
		  produto.i_cdproduto = estoque.i_cdproduto
	  left join classfiscal on 
		  produto.i_cdclassfiscal = classfiscal.i_cdclassfiscal
	  left join unidade on 
		  unidade.i_cdunidade = produto.i_cdunidade
	  left join fornecedor on
		  produto.i_cdultimofornecedor = fornecedor.i_cdparceiro
	  where
		  produto.f_situacao = 'A'
		  and produto.f_vendabloq = 'N'
		  and f_enviapalm = 'S'
		  and replace(COALESCE(produto.c_descricao, '') || ' ' || COALESCE(produto.c_aplicacao, ''), '-', '') ilike translate(replace('%${id}%',' ','%'),'ÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÔÖÚÙÛÜÇ', 'AAAAAEEEEIIIIOOOOOUUUUC')
	  group by
		  id,
		  idproduto,
		  Descrição,
		  Aplicação,
		  endCatalogo,
		  EnviaPalm,
		  Código_Original,
		  embalagem,
		  montadora,
		  marca,
		  ipi,
		  linha,
		  comissao,
		  catalogo,
		  unidade,
		  prodobservacao,
		  destaque,
		  arqfoto,
		  dcadastro
	  order by
		  dcadastro desc
     `

     


      )

     
    const product = produtoRepository.map((product: { idproduto: string, arqfoto: number}) => {
		const numImagens = product.arqfoto;
		const imageUrls = [];
  
		for (let i = 1; i <= numImagens; i++) {
		  const imageUrl = `${process.env.APP_API_URL}/files/${product.idproduto}_${i}.jpg`;
		  imageUrls.push(imageUrl);
		}
  
		return {
		  ...product,
		  imageProduct_Url: `${process.env.APP_API_URL}/files/${product.idproduto}.jpg`,
		  imageUrls: imageUrls,
		};
	  });
  
	  return product;
	}
}


export default GetOneProductService;