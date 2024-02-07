const { Column, Entity, PrimaryColumn } = require('typeorm');

@Entity("produto")
class Produtos {
  @PrimaryColumn()
  i_cdproduto: number;

  @Column()
  c_codigo: number;

  @Column()
  c_descricao: string;

  @Column()
  c_aplicacao: string;

  @Column()
  f_enviapalm: string;

  @Column()
  i_qtembalagem: string;

  @Column()
  c_arqfoto: string;
}

export default Produtos;
