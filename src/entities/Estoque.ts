const { Column, Entity, PrimaryColumn } = require('typeorm');


@Entity('estoque')
class Estoque {
  @PrimaryColumn()
  i_cdproduto: number;

  @Column()
  i_cdlocal_estoque: number;

  @Column()
  n_qtdestoque: number;
  
}

export default Estoque ;