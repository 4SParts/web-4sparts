const { Column, Entity, PrimaryColumn } = require('typeorm');


@Entity('pedidovenda')
class PedidoVenda {
  @PrimaryColumn()
  i_nrpedido: number;

  @Column()
  i_cdarea: number;

  @Column()
  i_cdcliente: number;

  @Column()
  c_cpfcnpj: string;

  @Column()
  d_pedido: string;

  @Column()
  f_tppgto: string;

  @Column()
  i_cdformapagto: number;

  @Column()
  f_tpfrete: string;

  @Column()
  n_vlrinformado: number;

  @Column()
  n_percdescpedido: number;

  @Column()
  c_prazo: string;

  @Column()
  i_cdlocal_estoque: number;

  @Column()
  f_requisicao: string;

  @Column()
  f_origem: string;

  @Column()
  c_observacao: string;

}

export default PedidoVenda;