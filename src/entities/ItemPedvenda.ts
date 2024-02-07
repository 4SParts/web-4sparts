const { Column, Entity, PrimaryColumn } = require('typeorm');


@Entity('itempedvenda')
class ItemPedvenda {
  @PrimaryColumn()
  i_nrpedido: number;

  @Column()
  c_codigo: string;

  @Column()
  n_quantidade: number;

  @Column()
  i_ctitem: number;

  @Column()
  n_percdesconto: number;

  @Column()
  i_ordem: number;

  @Column()
  n_prcunitario: number;

  @Column()
  f_bonifica: string;

  @Column()
  i_cdarea: number;

}

export default ItemPedvenda;